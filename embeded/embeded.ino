char data = 9;
int pulse = 0;
float lqd = 0;
int i = 0;
int mode = 0;
int cnt = 0;
int timer = 1;
int flag = 0;
int mon = 1;
int x = 0; // switch문 사용 용도 

void setup() {
  //pinMode(6, OUTPUT); //PWM OUT
  TCCR0A = 0; //TCCR0A 초기화
  TCCR0B = 0; //TCCR0B 초기화
  TCNT0 = 0; //TCNT0 초기화
  OCR0A = 155; //주기 10ms,

  TCCR0A |= (1 << WGM01);
  TCCR0B |= (1 << CS02) | (1 << CS00); // 1024로 나눠서 prescale
  TIMSK0 |= (1 << OCIE0A);

  pinMode(9, OUTPUT); //

  Serial.begin(9600);  //시리얼통신 보레이트 9600으로 시작
  attachInterrupt(0, pulseCount, RISING); // 상승엣지에서 INT0(2번 포트)으로 pulseCount실행
  digitalWrite(9, mon);
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
  //  if(Serial.available()){
  //    data=Serial.read();
  //    echoSerial(data);
  //  }
  pwmTest();

  countFlow();
}

// 1초동안 펄스를 측정하여 유량을 계산
void countFlow() {
  float flow;
  int tmp = 0;
  // 타이머카운터 인터럽트 써서 1초 되면 mo loop문 자체를 이용해서 계속 감시할 수 있음
  if (timer == 0) {
    tmp = pulse;

    // flow = 1초당 유량(mL),  Hz = 7.5 * Q(유량: L/min)
    // 7.5는 맞는지 확인해보기
    flow = (tmp / (7.5 * 60)) * 100;

    // 누적 액상
    lqd += flow;
    if (1) {
      Serial.print("flow: ");
      Serial.print(flow);
      Serial.print("mL ");
      Serial.print("lqd: ");
      Serial.print(lqd);
      Serial.print("mL ");
      //        if(lqd >= 180){
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

    timer = 1;
    pulse = 0;
  }
}

// ISR Interrupt Service routine 인터럽트 발생시 펄스를 누적
void pulseCount() {
  pulse++;
}

// 해당 초가 지나면 1을 반환 
int alarm (int delayTime){
  if (flag >= delayTime){
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

void pwmTest() {
  
  if (timer == 0) {
    switch(x) {
      case 0: 
        mon = HIGH;
        // 20초가 지나면 알람이 1이 됨 
        if (alarm(20)) {
          mon = LOW;
          x = 1;
        }
        break;
      case 1:
        mon = LOW;
        if (alarm(20)) {
          mon = HIGH;
          x = 2;
        }
        break;
      case 2:
        mon = HIGH;
        break;
      default:
        break;
    }

    digitalWrite(9, mon);
  }
}

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
