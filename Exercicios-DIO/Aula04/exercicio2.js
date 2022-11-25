function meuNome(nome) {
    console.log('meu nome é ' + nome);
}

meuNome('João');

function maiorDeIdade(nascimento) {
    if (2022 - nascimento >= 18) {
        console.log('Você é maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

maiorDeIdade(2002)