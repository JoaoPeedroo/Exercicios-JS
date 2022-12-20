// Validador de CPF

function ValidaCpf(cpfEnviado) {
    const cpf = cpfEnviado;
    let cpfLimpo = cpf.replace(/\D+/g, '');
    let cpfArray = Array.from(cpfLimpo);

    let calcularPrimeiroDigito = (somador, resultado) => {
        somador = 0;
        for (let i = 0; i < 9; i++) {
            somador += cpfArray[i] * (10 - i);
        }
        resultado = (11 - (somador % 11))
        if (resultado > 9) {
            resultado = 0
        }
        return resultado
    }

    if (calcularPrimeiroDigito() != cpfArray[9]) return console.log('CPF inválido')

    let calcularSegundoDigito = (somador, resultado) => {
        somador = 0;
        resultado = 0
        for (let i = 0; i < 10; i++) {
            somador += cpfArray[i] * (11 - i);
        }
        resultado = (11 - (somador % 11));
        if (resultado > 9) {
            resultado = 0
        }
        return resultado
    }
    
    if (calcularSegundoDigito() != cpfArray[10]) return console.log('CPF inválido')
    return console.log('O CPF digitado é válido')
}

const cpf = new ValidaCpf('42976395055');