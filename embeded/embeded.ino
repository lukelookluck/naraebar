char data = 9;
int pulse;
float lqd = 0;
int i = 0;
int mode = 0;

void setup() {
  //pinMode(2, INPUT); //외부인터럽트 INT0
  pinMode(6, OUTPUT); //PWM OUT
  //pinMode(9, OUTPUT); //
  Serial.begin(9600);  //시리얼통신 보레이트 9600으로 시작

  attachInterrupt(0, pulseCount, RISING); // 상승엣지에서 INT0(2번 포트)으로 pulseCount실행
  
}

void loop() {
  analogWrite(6,i); //PWM 출력 
  pwmTest();
  

  if(Serial.available()){
    data=Serial.read();
    echoSerial(data);
  }

//  if((pulse%10) == 0){
//    Serial.println(pulse);
//  }

    countFlow();
}

void pwmTest(){
  delay(5);
  if(mode == 0){
    i++;
  }
  else{
    i--;
  }

  if(i<=0){
    mode = 0;
  }
  else if(i>=255){
    mode = 1;
  }
}

void echoSerial(char data){
  // int data로 받으면 48, 49가 출력됨
  if(data == '1'){
    //digitalWrite(9, HIGH);  // Turn the LED
    Serial.println(data);
  }
  else if(data == '0'){
    //digitalWrite(9, LOW);   // Turn the LED
    Serial.println(data);
  }
}

// 1초동안 펄스를 측정하여 유량을 계산
void countFlow(){
    float flow;
    pulse = 0;  //변수 초기화
    sei();  //인터럽트 시작
    delay(1000); //1초 대기
    // 타이머카운터 인터럽트 써서 1초 되면 mode 바뀌는 방식으로 loop문 자체를 이용해서 계속 감시할 수 있음
    cli();  //인터럽트 멈춤

    // flow = 1초당 유량(mL),  Hz = 7.5 * Q(유량: L/min)
    // 7.5는 맞는지 확인해보기 
    flow = (pulse/(7.5*60))*1000;

    // 누적 액상
    lqd += flow;
    Serial.print(lqd);
    Serial.println("mL");

    if(lqd >= 180){
      Serial.println("넘친다!");
    }
}

// ISR Interrupt Service routine 인터럽트 발생시 펄스를 누적
void pulseCount(){
  pulse++;
}
