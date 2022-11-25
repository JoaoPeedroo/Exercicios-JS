const preco = 5;
const consumo = 8;
const distancia = 100;

const litros = distancia / consumo;
const valor = preco * litros;

console.log(valor.toFixed(2));