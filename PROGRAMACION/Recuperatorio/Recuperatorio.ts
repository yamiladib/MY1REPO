/*let productosAcomprar: string = String(prompt("ingrese productos a comprar: "));
console.log("los productos a comprar son: " + productosAcomprar);
let precioUnitario: number = Number(
  prompt("ingrese el precio unitario de cada producto:")
);
console.log(
  "el precio unitario de " + productosAcomprar + " es: " + precioUnitario
);
let cantidadDeCadaProducto: number = Number(
  prompt("ingrese cantidad de cada uno de los productos a comprar:")
);
console.log(
  "la cantidad de " + productosAcomprar + " es:$ " + cantidadDeCadaProducto
)};

console.log(numerodeProductos + productosAcomprar + precioUnitario + cantidadDeCadaProducto)*/

let numerodeProductos: number = Number(
  prompt("ingrese cantidad de productos a comprar:")
);

let compraSupermerecado: string[] = new Array(numerodeProductos);
let indice: number;
for (indice = 0; indice < numerodeProductos; indice++) {
  compraSupermerecado[indice] = prompt("ingrese productos a comprar:" + indice);
}
for (indice = 0; indice < numerodeProductos; indice++) {
  let precioUnitario: number;
  precioUnitario = prompt("ingrese el precio unitario de cada producto:");
}
let cantidadDeCadaProducto: number;
for (indice = 0; indice < numerodeProductos; indice++) {
  cantidadDeCadaProducto = prompt(
    "ingrese la cantidad reqerida de cada producto:"
  );
  console.log(cantidadDeCadaProducto "unid: " + compraSupermerecado[indice] +  "  $"precioUnitario);
}
