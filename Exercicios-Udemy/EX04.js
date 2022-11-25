let varA = 'A';
let varB = 'B';
let varC = 'C';

let ajudante = varA;

varA = varB;
varB = varC;
varC = ajudante;

console.log(varA, varB, varC)