String bottle[5] = {};
String contain[5] = {};
String start;
String mode;
String data;
String enddata;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  if(Serial.available()){
    parsing(Serial.readString()); // 시리얼 포트로 데이터를 받기
  }
}
// $,MAKE,1,180,3,350,&
void parsing(String str){
  int first = str.indexOf(","); // 첫번째 콤마위치
  int second = str.indexOf(",",first+1); // 두번째 콤마 위치
  int third = str.indexOf(",",second+1); // 세번째 콤마 위치
  int strlength = str.length(); // 문자열 길이
  int j = 0;
  
  start = str.substring(0, first); // 첫번째 토큰
  mode = str.substring(first+1, second); // 두번째 토큰
  data = str.substring(second+1, strlength-3); // 세번째 토큰
  enddata = str.substring(strlength-2,strlength); // 네번째 토큰

  int ss = 0;
  int ee = 0;
  String tmp = "";

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
    
//    Serial.print("tmp: ");
//    Serial.println(tmp);
//    Serial.print("ss: ");
//    Serial.println(ss);
//    Serial.print("ee: ");
//    Serial.println(ee);
//    Serial.println();
    ss = ee;

    j++;
    
  }

  bottle[j/2] = "-1";
  contain[j/2] = "-1";

  j = 0;
  while (bottle[j] != "-1"){
    Serial.print(bottle[j]);
    Serial.print(" ");
    Serial.println(contain[j]);
    j++;
  }

  Serial.println(start);
  Serial.println(mode);
  Serial.println(data);
  Serial.println(enddata);
  
}
