//Escreva uma função que receba um número e
//retorno o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número Não é divisiível por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número = Retorna o próprio número
//Use a função com números de 0 a 100
function testadoraDeNumeros(num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}

console.log('a', testadoraDeNumeros('a'))
for (let i = 0; i <= 100; i++) {
  console.log(i, testadoraDeNumeros(i));
}
