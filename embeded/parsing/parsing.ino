String bottle[5] = {};
String contain[5] = {};
String start;
String mode;
String data;
String enddata;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(9, OUTPUT);
}

void loop() {
//    if(Serial.available()){
//      if ( parsing(Serial.readString()) == 1){
//        if (mode == "MAKE"){
//          // 제작 함수 실행 bottle과 contain 하나하나 돌면서 출력
////          j = 0;
////          while (bottle[j] != "-1"){
////            Serial.print(bottle[j]);
////            Serial.print(" ");
////            Serial.println(contain[j]);
////            j++;
////          }
//        }
//        else if (mode == "WASH"){
//          // 세척 함수 실행 
//        }
//      }
//    }
String tmp = ""; 

tmp = Serial.readString();
if (tmp && (tmp!="")){
  parsing(tmp);
}

}

void test(String str){
  Serial.println("$,DONE,MAKE,&");
}

// $,MAKE,1,180,3,350,&
int parsing(String str){
  int first = str.indexOf(","); // 첫번째 콤마위치
  int second = str.indexOf(",",first+1); // 두번째 콤마 위치
  int strlength = str.length(); // 문자열 길이
  int j = 0;
  
  start = str.substring(0, first); // 첫번째 토큰
  mode = str.substring(first+1, second); // 두번째 토큰
  data = str.substring(second+1, strlength-3); // 세번째 토큰
  enddata = str.substring(strlength-1,strlength); // 네번째 토큰 문자열 맨 마지막은 \n임 그래서 -1해줌

  int ss = 0; //이전 콤마idx
  int ee = 0; //이번 콤마idx
  String tmp = "";

  if ((start == "$") && (enddata == "&")){
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
    
  }
  Serial.print(str);
  
//  Serial.println("$,DONE,MAKE,&");
  Serial.println(enddata);
  
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
