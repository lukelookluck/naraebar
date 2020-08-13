# 임베디드 설계

1. 기능 명세
2. 회로도
3. 입출력 포트
4. 데이터 송수신 양식



## 1. 기능 명세

1. 데이터 수신

   - 음료 제작버튼을 누르면 라즈베리파이에서 아두이노로 MAKE신호 전송

   - 아두이노에서 데이터 파싱

2. 음료 제조

   - 파싱한 데이터를 순서대로 실행 (while)
     - 해당 솔밸브 오픈(GPIO High), 펌프 가동 (GPIO Low, PWM 세기 조절) (while 누적<목표)
       - 1초동안 유량계에서 들어온 인터럽트로 count 증가 -> 제작하면서 시간 조절
       - 1초 이후 유량계산. 목표치 도달할 때까지 반복 
     - 목표 양만큼 펌핑 완료하면 해당 솔밸브 클로즈(GPIO Low), 공기 주입구 솔밸브 오픈 (GPIO High)
     - 조금 딜레이준 이후 펌프 가동 정지 (GPIO high, PWM 세기 조절) 

3. 세척

   - 파싱한 데이터가 세척모드일 경우 0번 솔밸브(공기 주입구) 오픈 (GPIO High)
   - 일정 시간 펌프 가동 (GPIO Low, PWM 255 full power)

4. 데이터 송신

   - 음료 제조 완료시 -> 음료 제작 완료 신호
   - 세척 완료시 -> 세척 완료 신호 



## 2. 회로도

![circuit](images/circuit.JPG)



## 3. 아두이노 입출력 포트 

- 전원

  | PIN  | 상세     |
  | ---- | -------- |
  | Vin  | 12V입력  |
  | GND  | GND 입력 |

  

- 솔레노이드 밸브 제어 

  | PIN  | 솔밸브 No | 상세                |
  | ---- | --------- | ------------------- |
  | PD8  | 0         | 공기 및 세척수 주입 |
  | PD9  | 1         | 1번 액상 주입       |
  | PD10 | 2         | 2번 액상 주입       |
  | PD11 | 3         | 3번 액상 주입       |
  | PD12 | 4         | 4번 액상 주입       |

  

- 펌프 제어 

  | PIN  | 상세                                 |
  | ---- | ------------------------------------ |
  | PD4  | 모터 구동 (Low 시 동작, High시 멈춤) |
  | PD5  | PWM 신호 출력 (0~255)                |
  | PD2  | 유량계 외부 인터럽트 입력            |

  

- 데이터 송수신 

  | PIN  | 상세        |
  | ---- | ----------- |
  | TX   | 데이터 송신 |
  | RX   | 데이터 수신 |

  





## 4. 데이터 송수신 양식

- 로컬 서버 송신 데이터 

  1. 칵테일 제조

     **$,MAKE,액상번호,용량 (ml),액상번호,용량 (ml),...,&**

     - 예시

       `$,MAKE,1,180,3,350,&`

       1번 액상 180ml, 3번 액상 350ml을 펌핑하여 제조

     - 주의 

       액상번호는 1~4 사이의 값을 입력할 것

  2. 세척

     **$,WASH,&**

     

- 로컬 서버 수신 데이터 

  1. 제조 완료

     **$,DONE,MAKE,&**

  2. 세척 완료 

     **$,DONE,WASH,&**

  3. (선택) 에러 발생

     **$,ERROR,&**

     

## 5. 출처

- 회로도 이미지 출처

  [파워 서플라이](https://smartstore.naver.com/jooyontns/products/498834333)

  [레귤레이터 모듈](https://www.devicemart.co.kr/goods/view?no=1384708)

  [유량계](https://smartstore.naver.com/makepcb/products/2075862320)

  [릴레이모듈](https://ko.aliexpress.com/item/32888878613.html)

  [모터드라이버]([https://](https://images.app.goo.gl/fkMRYYNemC5Lu7nP8)[images.app.goo.gl/fkMRYYNemC5Lu7nP8](https://images.app.goo.gl/fkMRYYNemC5Lu7nP8))

  [라즈베리파이 이미지](https://images.app.goo.gl/B5gpHJRK8D4pHwyJ9)

  [라즈베리파이](https://images.app.goo.gl/YXaYJ28Qia7YodnEA)

  [아두이노](https://images.app.goo.gl/cKFc1VQZQePF3gBW6)

  [아두이노 이미지](https://images.app.goo.gl/jQ8drLVgT7zeigj18)

  [솔레노이드 밸브](https://images.app.goo.gl/XhYDWxDxoEjy7vZi9)

  [다이아프램 펌프](https://images.app.goo.gl/aPBMUthjdbKQemrd8)

  [브레드보드](https://images.app.goo.gl/8NRGa1tBWX4PcVWDA)

  