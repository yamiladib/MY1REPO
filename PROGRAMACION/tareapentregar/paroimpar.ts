let btnEnv = document.getElementById("btnEnviar");


btnEnv.addEventListener("click", () => {
let numeroIngresado: number = Number(dato.value);
if (numeroIngresado%2 == 0) {
console.log ("el numero ingresado es par");
else