var today = new Date();
var time = today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
var fithteen = 900000;
var out = today - fithteen; 

console.log(out);