const diasElement = document.getElementById('dias');
const hoursElement = document.getElementById('horas');
const minsElement = document.getElementById('min');
const secondsElement = document.getElementById('seg');
const upcomingImg = document.getElementById('upcoming-img');

let birthdias = new Date("2024-09-03");
let totalSeg,dias,horas,min,segundos;


let dive = document.createElement("div");

document.body.appendChild(dive);

let countdownInterval = setInterval(cuentaAtras, 1000);
cuentaAtras();

function cuentaAtras() {
    fechaActual = new Date();
    totalSeg = (birthdias - fechaActual) / 1000;
  
    // Condición para comprobar si ha llegado la hora establecida
    if (Math.floor(totalSeg) <= 0) {
      showProduct();
      secondsElement.innerHTML = 0;
      return;
    }
  
    //Para saber el equivalente de 1 segundo - dias se dividen los segundos entre 86400 
    // o entre 3600 y luego entre 24
    //Para saber el equivalente de 1 segundo - horas se dividen los segundos entre 3600
    //Para saber el equivalente de 1 segundo - minutos se dividen los segundos entre 60
  
    dias = Math.floor(totalSeg / 3600 / 24);
    horas = Math.floor(totalSeg / 3600) % 24;
    min = Math.floor(totalSeg / 60) % 60;
    segundos = Math.floor(totalSeg) % 60;



  
    diasElement.innerHTML =" Dias - " +dias;
    hoursElement.innerHTML = "  Horas - "+horas;
    minsElement.innerHTML = " min - " + min;
    secondsElement.innerHTML = " sec - "+segundos;
  
  };




