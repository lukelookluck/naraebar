char valve[] = {8, 9, 10, 11, 12}; // idx 0번은 공기 주입구 순서대로 1, 2, 3, 4번 솔밸브
char pump = 7; // 펌프연결 포트 


// 시리얼 통신을 위한 변수 선언
String bottle[5] = {};
String contain[5] = {};
String start;
String mode = "start";
String data;
String enddata;


//유량계
int pulse = 0; // 유량계입력 pulse
float lqd = 0; // 누적 용액
int empty = 0; // 액상이 비어있는지 확인


int main_switch = 0; // 현재 작동 모드 -> 대기? make? wash?
int cnt = 0; // ISR에서 0.1초를 만들기 위해 쌓음
int timer = 1; // 0.1초가 되면 timer 변수가 0이 됨
int flag = 0; // alarm 함수에서 몇초가 경과되었는지 확인용
int mon = 1; // 현재 펌프가 on인지 off인지 확인할 수 있음
int mon_before = 1;

// switch문을 사용하기 위한 변수 
int x = 0;  
int y = 0; 


int i = 0;



void setup() {
  //pinMode(6, OUTPUT); //PWM OUT
  TCCR0A = 0; //TCCR0A 초기화
  TCCR0B = 0; //TCCR0B 초기화
  TCNT0 = 0; //TCNT0 초기화
  OCR0A = 155; //주기 10ms,

  TCCR0A |= (1 << WGM01);
  TCCR0B |= (1 << CS02) | (1 << CS00); // 1024로 나눠서 prescale
  TIMSK0 |= (1 << OCIE0A);

  pinMode(7, OUTPUT); 
  pinMode(8, OUTPUT); 
  pinMode(9, OUTPUT); 
  pinMode(10, OUTPUT); 
  pinMode(11, OUTPUT); 
  pinMode(12, OUTPUT); 
  digitalWrite(7, HIGH);
  digitalWrite(8, HIGH);
  digitalWrite(9, HIGH);
  digitalWrite(10, HIGH);
  digitalWrite(11, HIGH);
  digitalWrite(12, HIGH);

  Serial.setTimeout(100); 
  Serial.begin(9600);  //시리얼통신 보레이트 9600으로 시작
  attachInterrupt(0, pulseCount, RISING); // 상승엣지에서 INT0(2번 포트)으로 pulseCount실행
  sei(); //인터럽트 시작

}

ISR(TIMER0_COMPA_vect) {
  if (timer == 1) {
    cnt++;

    // count가 100개 모이면 1초가 됨
    // 그 때 TCNT0 = 0 , cnt = 0으로 초기화 하자
    if (cnt > 10) {
      timer = 0;
      cnt = 0;
      TCNT0 = 0;
    }
  }
}

void loop() {
  String tmp = ""; 
  // 시리얼로 들어온 값이 있으면 이라는 뜻
  if(Serial.available()){
    // readString()은 timeout을 기준으로 1초에 한번씩 데이터를 받아옴
    // -> timer0을 써서 그런지 타임아웃이 작동하지않음 
    // 개행문자가 올 때까지 받는 until을 쓰는게 적절
    
    tmp = Serial.readStringUntil('\n');

    //아래는 나중에 지우자 지금은 테스트
//    Serial.println(tmp); // 위에서 '\n'까지 받아서 '\r'도 출력됨 
//    tmp = "$,MAKE,1,180,3,350,&";
    if (tmp && (tmp!="")){
      if (parsing(tmp)){
        if (mode == "MAKE"){
          main_switch = 1;
        }
        else if (mode == "WASH"){
          main_switch = 2;
        }
      }
    }
  }

  switch (main_switch) {
          case 0: //대기 모드
            // 파싱한 데이터의 mode에 따라 모드 전환
            if (mode == "MAKE"){
              
              main_switch = 1;
            }
            else if (mode == "WASH"){
              main_switch = 2;
            }
            break;
          case 1: //make 모드 
            // make가 완료되면 1을 return함. -> 대기모드로 전환
            if (make()){
              main_switch = 3;
              digitalWrite(pump,HIGH);
              digitalWrite(8, HIGH);
            }
            break;
          case 2: //wash 모드 
            if (wash()){
              main_switch = 3;
              digitalWrite(pump,HIGH);
              digitalWrite(8, HIGH);
            }
            break;
          case 3:
            mode = "start";
            main_switch = 0;
            break;
          default:
            break;
        }

  countFlow();  // 여기에  timer을 1로 만들어주는 코드가 있어서 이거 없으면 시간 짧아짐
}


int make(){
  //전역변수 써서 그 전역변수 idx의 bottle과 contain의 값에 따라 음료를 만들기 
  // 전역변수 idx의 bottle과 contain 의 값이 -1이면 return 1
  // 1을 return 하면 다 만들었으니까 다만들었다는 신호 보내기
  //나머지는 0 리턴 0일 경우에는 전역변수 값 1개씩 증가
  
  //원래는 1초마다 한번 받아들이도록 했는데 타이밍 안맞는 문제 생겨서 뺌
  if (!empty) {
    if (bottle[i] != "-1"){
      
      switch(x) { 
        case 0: //처음에 1초동안 잠시 기다리고 밸브 온, 펌프 온
          mon = HIGH;
          // 1초가 지나면 알람이 1이 됨 
          if (alarm(1)) {
            mon = LOW;
            x = 1;
          }
          break;
        case 1: //용량 다 차면 밸브를 닫아요
          mon = LOW;
          if (alarm(atof(contain[i].c_str())/75*2)) {
            mon = HIGH;
            x = 2;
          }
          break;
        case 2: //밸브를 닫고 있어요 
          digitalWrite(pump, HIGH);
          digitalWrite(8, HIGH);
          mon = HIGH;
          i++;
          x = 0;
          break;
        default:
          break;
      }
      digitalWrite(valve[atoi(bottle[i].c_str())], mon); //LOW가 밸브를 켜는것
      digitalWrite(pump, LOW); // 펌프도 계속 켬
      digitalWrite(8, !mon);
      return 0;
    }
    else {
      //펌프 2초 가동 후 대기모드로 전환(return 1)
      //제작 완료신호 보내기
      digitalWrite(8, LOW);
      if (alarm(2)) {
        digitalWrite(pump, HIGH);
        digitalWrite(8, HIGH);
        Serial.println("$,DONE,MAKE,&");
         i = 0;
        return 1;
      }
    }
  }
  else {
    empty = 0;
    Serial.println("$,ERROR,&");
    return 1;
  }
  
}

int wash() {
  //원래는 1초마다 한번 받아들이도록 했는데 타이밍 안맞는 문제 생겨서 뺌
  if (1) {
    switch(x) {
      case 0: 
        mon = HIGH;
        // 1초가 지나면 알람이 1이 됨 
        if (alarm(1)) {
          mon = LOW;
          x = 1;
        }
        break;
      case 1:
        mon = LOW;
        if (alarm(15)) {
          mon = HIGH;
          x = 2;
        }
        break;
      case 2:
        mon = HIGH;
        if (alarm(1)) {
          digitalWrite(pump, HIGH);
          x = 0;
          Serial.println("$,DONE,WASH,&");
          return 1;
        }
        break;
      default:
        break;
    }

    digitalWrite(9, mon);
    digitalWrite(10, mon);
    digitalWrite(11, mon);
    digitalWrite(12, mon);
    
    digitalWrite(pump, mon);
    return 0;
  }
}


// 1초동안 펄스를 측정하여 유량을 계산
void countFlow() {
  float flow;
  int tmp = 0;
  // 타이머카운터 인터럽트 써서 1초 되면 loop문 자체를 이용해서 계속 감시할 수 있음
  if (timer == 0) {
    tmp = pulse;

    // flow = 1초당 유량(mL),  Hz = 7.5 * Q(유량: L/min)
    // 7.5는 맞는지 확인해보기
    flow = (tmp / (7.5 * 60)) * 100;

    // 누적 액상
    lqd += flow;

    if (0) {
      Serial.print("flow: ");
      Serial.print(flow);
      Serial.print("mL ");
      Serial.print("lqd: ");
      Serial.print(lqd);
      Serial.print("mL ");
      //        if(lqd >= contain[i]){
      //
      //          Serial.println("넘친다!");
      //        }

      if (mon == 0){
        Serial.println("ON");
      }
      else {
        Serial.println("OFF");
      }
    }

    if (mon != mon_before){
      y = 1;
    }

    mon_before = mon;
    
    switch (y) {
      case 0: // 정상 입력값 -> 그대로 누적해줌 (break)
        break;
      case 1: // mon의 변경이 있을 때 -> 그대로 누적해줌 (break)
        if (mon == 1){
          //켜져있던게 꺼졌을 때
          //시연에서는 세척수를 못넣어서 MAKE 모드일 때만 액상 빈 것을 확인
          if ((lqd < 10) && (mode == "MAKE")){
            // 액상 없음
//            empty = 1;
            
          }
          lqd = 0;
        }
        y = 2;
        break;
      case 2: // mon변경 다음 -> 채터링 값을 버려줌 (flow를 빼기)
        lqd -= flow;
        y = 3;
        break;
//      case 3: // mon이 0이 되고 처음온 값 -> 1.5배로 누적해줌 (flow의 반을 더하기)
//        lqd += (flow/2);
//        y = 0;
//        break;  
      default: 
        break;
    }

    
    timer = 1;
    pulse = 0;
  }
}

// ISR Interrupt Service routine 인터럽트 발생시 펄스를 누적
void pulseCount() {
  pulse++;
}

// 해당 초가 지나면 1을 반환 
int alarm (float delayTime){
  if (flag >= (delayTime*10)){
    flag = 0;
    return 1;
  }
  else{
    if (timer == 0){
      flag ++;
    }
    return 0;
  }
}

// $,MAKE,1,180,3,350,&
int parsing(String str){
  int first = str.indexOf(","); // 첫번째 콤마위치
  int second = str.indexOf(",",first+1); // 두번째 콤마 위치
  int strlength = str.length(); // 문자열 길이
  int j = 0;
  
  start = str.substring(0, first); // 첫번째 토큰
  mode = str.substring(first+1, second); // 두번째 토큰
  data = str.substring(second+1, strlength-2); // 세번째 토큰
  enddata = str.substring(strlength-2,strlength-1); // 네번째 토큰 문자열 맨 마지막은 \n임 그래서 -1해줌

  int ss = 0; //이전 콤마idx
  int ee = 0; //이번 콤마idx
  String tmp = "";

  if ((start == "$") ){
    while(ss < (data.length()-1)){
      if (ss == 0){
        ee = data.indexOf(",", ss);
        tmp = data.substring(ss, ee);
      }
      else {
        ee = data.indexOf(",", ss+1);
        tmp = data.substring(ss+1, ee);
      }
  
      if ((j%2)==0){
        bottle[j/2] = tmp;
      }
      else {
        contain[(j-1)/2] = tmp;
      }
      ss = ee;
  
      j++;
    
    }
    bottle[j/2] = "-1"; //센티넬 넣어줌
    contain[j/2] = "-1";
  }
  else {
    //문자열 에러
    Serial.println("ERROR");
    Serial.print("start: ");
    Serial.println(start);
    Serial.print("mode: ");
    Serial.println(mode);
    Serial.print("data: ");
    Serial.println(data);
    Serial.print("enddata: ");
    Serial.println(enddata);

    return 0;
  }

//  Serial.print(str);
//  
//  Serial.println("$,DONE,MAKE,&");
//  Serial.println(enddata);
//  // 데이터 디버깅용 출력
//  j = 0;
//  while (bottle[j] != "-1"){
//    Serial.print(bottle[j]);
//    Serial.print(" ");
//    Serial.println(contain[j]);
//    j++;
//  }
//
//  // 데이터 디버깅용 출력
//  Serial.println(start);
//  Serial.println(mode);
//  Serial.println(data);
//  Serial.println(enddata);

  return 1; //파싱 완료 
  
}










//void pwmTest() {
//  
//  if (timer == 0) {
//    switch(x) {
//      case 0: 
//        mon = HIGH;
//        // 2초가 지나면 알람이 1이 됨 
//        if (alarm(2)) {
//          mon = LOW;
//          x = 1;
//        }
//        break;
//      case 1:
//        mon = LOW;
//        if (alarm(2)) {
//          mon = HIGH;
//          x = 2;
//        }
//        break;
//      case 2:
//        mon = HIGH;
//        break;
//      default:
//        break;
//    }
//
//    digitalWrite(8, mon);
//  }
//}


//void ledPwmTest(){
//  // delay(5); //이게 타이머카운터 인터럽트랑 걸려서 countflow함수가 실행 안됨
//            //delay 함수가 타이머카운터 0번을 사용해서 그런 것 같음
//            //Timer0 는 8비트 타이머로 시간관련 함수에 사용되고 있습니다.
//            //따라서 Timer0 레지스터를 변경하면 delay(), millis(), micros() 와 같은 시간관련 함수들도 영향을 받음
//  if(mode == 0){
//    i++;
//  }
//  else{
//    i--;
//  }
//
//  if(i<=0){
//    mode = 0;
//  }
//  else if(i>=255){
//    mode = 1;
//  }
//
//}

//void echoSerial(char data){
//  // int data로 받으면 48, 49가 출력됨
//  if(data == '1'){
//    //digitalWrite(9, HIGH);  // Turn the LED
//    Serial.println(data);
//  }
//  else if(data == '0'){
//    //digitalWrite(9, LOW);   // Turn the LED
//    Serial.println(data);
//  }
//}
