var fithteen = 1000;
var time = document.getElementById("time");
setInterval(countDown, 0.1);

//document.getElementById("start").onclick = 
    function down() {
    for (var i = 0; i < fithteen;) {
    fithteen--;
    time.textContent = fithteen;
    settimeout(1);
    }
}