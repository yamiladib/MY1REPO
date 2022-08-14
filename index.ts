//Carrito de compras
//declaramos variables y arreglos.
let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("btn-calcular");
let detalle = document.getElementById("detalle");
let total = document.getElementById("total");
let vaciarInputs = document.getElementById("vaciar");
let productos: string[] = [];
let precios: number[] = [];
let sumaDeCantidades: number = 0;
//push para cargar elementos a un arreglo
const agregarAlCarrito = () => {
  productos.push(producto.value);
  precios.push(Number(precio.value));

  detalle?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  //vaciar las entradas de valores
  producto.value = "";
  precio.value = "";
};
//creo funciones para calcular la compra
const calcularTotal = () => {
  sumaDeCantidades = 0;
  for (let i: number = 0; i < precios.length; i++) {
    sumaDeCantidades += Number(precios[i]);
  }
  total?.innerHTML = sumaDeCantidades;
};
//creo funcion para vaciar el carrito de compras
const vaciarDetalleCompra = () => {
  detalle?.innerHTML = "";
  total?.innerHTML = "";
};
//le indeco a los botnones que disparen los eventos al hacer click.
agregar?.addEventListener("click", agregarAlCarrito);
calcular?.addEventListener("click", calcularTotal);
vaciarInputs?.addEventListener("click", vaciarDetalleCompra);
