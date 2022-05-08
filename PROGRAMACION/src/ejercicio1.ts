let btnEnv = document.getElementById("btnEnviar");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese1ernumero";
rotulo2.innerHTML = "Ingrese2donumero";
rotulo3.innerHTML = "Ingrese3ernumero";


btnEnviar.addEventListener("click", () => {
  let numero1: number = dato1.value ;
  let numero2: number = dato2.value ;
  let numero3: number = dato3.value; 
   
  if (numero1 > numero2 && numero1>numero3){
    console.log ("el 1er numero es el mayor");  
  } else if (numero2 > numero1 && numero2>numero3){ 
   console.log ("el 2do numero es el mayor");
} else if  (numero3>numero1 && numero3>numero2) {
  console.log ("el 3er numero es el mayor")}
  
  }
});