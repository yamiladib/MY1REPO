let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese 1er numero ";
rotulo2.innerHTML = "Ingrese 2do numero";
rotulo3.innerHTML = "Ingrese 3er numero ";


btnEnviar.addEventListener("click", () => {
  let numero1: number = dato1.value ;
  let numero2: number = dato2.value ;
  let numero3: number = dato3.value; 
   
  if (numero1 > numero2 && numero1>numero3){
    console.log  }
  
  }
});