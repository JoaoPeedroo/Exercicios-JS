const { gets, print } = require('./funcoes-auxiliares-ex3');

const valorSalarioBruto = gets();
const adicionalDosBeneficios = gets();

function porcentagem(valor, percentual) {
   return valor * (percentual / 100);
} 

function percentualSalario (salario) {
    if (salario > 0 && salario < 1100) {
        return 5;
    } else if (salario > 1100.01 && salario < 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquota = percentualSalario(valorSalarioBruto);
const valorImposto = porcentagem(valorSalarioBruto, aliquota)

const valorAtransferir = valorSalarioBruto - valorImposto + adicionalDosBeneficios;

print(valorAtransferir)

