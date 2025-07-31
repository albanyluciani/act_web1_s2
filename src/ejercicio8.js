//8️⃣ Transporte con tarifa reducida
let edad = 67;
let distanciaKm = 120;
let tarifaBase = distanciaKm * 0.21;

if (edad >= 65) {
  tarifaBase *= 0.5;
} else if (edad < 18) {
  tarifaBase *= 0.8;
}
console.log(`Tarifa final: ${tarifaBase.toFixed(2)}`);
