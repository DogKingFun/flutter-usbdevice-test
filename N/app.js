const dgram = require('dgram');

const PORT_P = 8000;
const HOST_P = 'p';

const PORT_N = 8001;
const HOST_N = 'n';

const socket = dgram.createSocket('udp4');
socket.on('message', (buf, rinfo) => {
  let array = frombuffer(buf);

});

socket.bind(PORT_N, HOST_N);

function frombuffer(buf){
  // Numpy of uint16 buffer can convert array.
  let data = new Uint16Array(buf);
  let array = [];
  for(let i = 0;i<data.length/2;i++){
    array[i] = data[2*i] + 256*data[2*i+1];
  }
  return array;
}

/*
function tobytes(array){
  // Array can convert Numpy of uint16 buffer.
  
}
*/