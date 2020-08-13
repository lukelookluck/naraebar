int timer = 1;
int cnt = 0;
int toggle = 0;
int i = 0;

void setup() {
  pinMode(3, OUTPUT); //OC2B
  pinMode(4, OUTPUT); 
//  pinMode(11, OUTPUT); //OC2A
  TCCR2A = 0; //TCCR2A 초기화
  TCCR2B = 0; //TCCR2B 초기화
  TCNT2 = 0; //TCNT2 초기화
  OCR2A = 199; //top 값
  OCR2B = 199; //듀티비 top의 50%
  // 10K -> 프리스케일러 8에서 OCR2A = 199; OCR2B = 99;
  // 25K -> 프리스케일러 8에서 OCR2A = 39; OCR2B = 19;
  // 20K ->프리스케일러 8에서 OCR2A = 99; OCR2B = 49;

  // Fast PWM with OCRA top mode -> OC2B만 출력으로 사용 가능
  TCCR2A |= (1<<COM2B1)|(1<<WGM21)|(1<<WGM20);
  TCCR2B |= (1<<WGM22)|(1<<CS21); //프리스케일러 8
  TIMSK2 |= (1<<OCIE2B); //Output Compare B Match Interrupt Enable 
  
  sei(); //인터럽트 시작
}

ISR(TIMER2_COMPA_vect){
  
  if (timer == 1){
    cnt++;
    
    // count가 10000개 모이면 1초가 됨 
    // 그 때 TCNT2 = 0 , cnt = 0으로 초기화 하자
    if (cnt > 20000) {
      timer = 0;
      cnt = 0;
      TCNT2 = 0;
      
    }   
  }
}

void loop() {
//  if (timer == 1){
//    digitalWrite(4, LOW);
//  }
//  else {
//    digitalWrite(4, HIGH);
//  }
digitalWrite(3,HIGH);
digitalWrite(4,LOW);
}
