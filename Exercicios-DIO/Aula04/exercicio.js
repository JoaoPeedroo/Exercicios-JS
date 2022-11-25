function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

function main() {
    const peso = 120;
    const altura = 1.90;

    const imc = calcularImc(peso, altura);
    console.log('Seu IMC é de:' + calcularImc(peso, altura).toFixed(1))
    console.log(classificarImc(imc));
}


main();
