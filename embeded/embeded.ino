void setup() {
  // put your setup code here, to run once:
  pinMode(9, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  
  digitalWrite(9, LOW);   // Turn the LED
  delay(1000);    // Wait for a seconds
  digitalWrite(9, HIGH);  // Turn the LED
  delay(1000);    // Wait for a seconds
}
