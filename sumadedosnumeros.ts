//suma de dos numeros
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese el primer numero";
rotulo2.innerHTML = "Ingrese el segundo numero";

let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let num1: number = Number(dato1.value);
  let num2: number = Number(dato2.value);
  let resultado: number = num1 + num2;
  console.log("el resultado de la suma es" + resultado);
});
