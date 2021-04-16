var fithteen = 90;
var time = document.getElementById("time");
setInterval(countDown, 500);

function countDown() {
    var i = 0; i < fithteen
    fithteen--;
    time.textContent = fithteen;
    console.log(time);
}
console.log(time); 