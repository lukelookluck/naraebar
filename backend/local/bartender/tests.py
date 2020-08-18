# Create your tests here.

import serial
import time

ser = serial.Serial()
ser.port = '/dev/ttyAMA0'
ser.baudrate = 9600

ser.open()


# print("help")

print("in while")
ser.write('$,MAKE,1,180,3,350,&'.encode())
print('write ok')

receive_data = ser.readline()
print(receive_data)

receive_data = ser.readline()
print(receive_data)
receive_data = ser.readline()
print(receive_data)
receive_data = ser.readline()
print(receive_data)

print('read ok!')
# time.sleep(1)

ser.close()



