var mraa = require("mraa");
var led = new mraa.Gpio(13); 
var v = 0;
setInterval(function(){
	v = v ? 0:1;
	if(v){
		console.log("LED ON with isaax");
		led.dir(mraa.DIR_OUT);
	}else{
		console.log("LED OFF with isaax");
	}led.write(v);},4000);
