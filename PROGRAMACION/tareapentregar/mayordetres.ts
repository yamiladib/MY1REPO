//mayor de tres numeros
let rotulo = document.getElementById("rotulo");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato1");
let dato1 = document.getElementById("dato2");
let dato2 = document.getElementById("dato3");

rotulo.innerHTML = "Ingrese numero 1";
rotulo1.innerHTML = "Ingrese numero 2";
rotulo2.innerHTML = "Ingrese numero 3";

btnEnv.addEventListener("click", () => {
  let numero1: number = dato1.value;
  let numero2: number = dato2.value;
  let numero3: number = dato3.value;

  if (numero1 > numero2 && numero1 > numero3) {
    console.log("el numero1 numero es el mayor");
  } else if (numero2 > numero1 && numero2 > numero3) {
    console.log("el numero2 numero es el mayor");
  } else if (numero3 > numero1 && numero3 > numero2) {
    console.log("el numero3 numero es el mayor");
  }
});
