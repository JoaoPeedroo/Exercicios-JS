const precoGasolina = 5;
const precoEtanol = 4;
const consumo = 8;
const tipoCombustivel = 'etanol';
const distancia = 100;

const litros = distancia / consumo;
if (tipoCombustivel === 'gasolina') {
    let gasto = litros * precoGasolina;
    console.log(gasto.toFixed(2));
} else if (tipoCombustivel === 'etanol') {
    let gasto = litros * precoEtanol;
    console.log(gasto.toFixed(2));
}
