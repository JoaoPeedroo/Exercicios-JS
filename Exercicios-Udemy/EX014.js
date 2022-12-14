//Escreva uma função que receba um número e
//retorno o seguinte:
//Número é divisível por 3 = Fizz
//Número é divisível por 5 = Buzz
//Número é divisível por 3 e 5 = FizzBuzz
//Número Não é divisiível por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número = Retorna o próprio número
//Use a função com números de 0 a 100
function testadoraDeNumeros(num) {
  if (Number.isInteger(num) == true) {
    if (num % 3 === 0 && num % 5 === 0) {
      return console.log("FizzBuzz");
    } else if (num % 5 === 0) {
      return console.log("Buzz");
    } else if (num % 3 === 0) {
      return console.log("Fizz");
    } else {
      return console.log(`${num} não é divisível por 3 ou 5`);
    }
  } else {
      console.log('DIgite um número')
  }
}

testadoraDeNumeros(e)
