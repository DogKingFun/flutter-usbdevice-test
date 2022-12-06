import numpy as np
import time
from socket import socket, AF_INET, SOCK_DGRAM

s = socket(AF_INET, SOCK_DGRAM)
ADDRESS = ("n",8001)


arr = np.array(range(2**10),dtype='uint16')
arr_bin = arr.tobytes()
s.sendto(arr_bin, ADDRESS)
time.sleep(10)

s.close()
