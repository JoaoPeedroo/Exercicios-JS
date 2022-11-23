const nome = 'João Pedro';
const sobrenome = 'Cândido';
const idade = 20;
const peso = 120;
const altura = 1.90;
let imc;
let anoNascimento;

imc = peso / (altura) ** 2;
anoNascimento = 2022 - idade;

console.log('Meu nome é', nome, sobrenome, 'tenho', idade, 'anos de idade e nasci no ano de', anoNascimento , ',minha altura é de ', altura, 'meu peso é', peso, 'e meu IMC é', imc.toFixed(2));