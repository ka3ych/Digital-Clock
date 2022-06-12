
var horas = document.getElementById("horas");
var minutos = document.getElementById("minutos");
var segundos = document.getElementById("segundos");

function relogio() {
    var data = new Date();
    var hor = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();

    if(hor<10) { hor = "0" + hor};
    if(min<10) { min = "0" + min};
    if(sec<10) { sec = "0" + sec};

    horas.textContent = hor;
    minutos.textContent = min;
    segundos.textContent = sec;
}
setInterval(relogio, 1000);