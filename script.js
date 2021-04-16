var fithteen = 1000;
var time = document.getElementById("time");

document.getElementById("start").onclick =
    function down() {
    for (var i = 0; i < fithteen;) {
    fithteen--;
    time.textContent = fithteen;
    setInterval(down, 0.1);
    settimeout(1);
    }
}