char data = 9;

void setup() {
  // put your setup code here, to run once:
  pinMode(9, OUTPUT);
  Serial.begin(9600);
  
}

void loop() {
  //함수로 나누어서 인터럽트 받기 
  // put your main code here, to run repeatedly:
  if(Serial.available()){
    data=Serial.read();
  }
  if(data == '1'){
    digitalWrite(9, HIGH);  // Turn the LED
  }
  else if(data == '0'){
    digitalWrite(9, LOW);   // Turn the LED
  }
  
}
