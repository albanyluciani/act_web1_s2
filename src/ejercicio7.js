//7️⃣ Descuento por volumen
let precioUnitario = 1000;
let cantidad = 20;
let precioFinal;

if (cantidad < 10) {
  precioFinal = precioUnitario * cantidad;
} else if (cantidad >= 10 && cantidad < 50) {
  precioFinal = precioUnitario * cantidad * 0.9;
} else if (cantidad >= 50) {
  precioFinal = precioUnitario * cantidad * 0.8;
}

console.log(precioFinal.toFixed(2));
