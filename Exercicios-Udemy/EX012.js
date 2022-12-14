//Escreva uma funçao que retorne dois valores(max, min)

const num1 = 10;
const num2 = 30;

function qualMaior(maior, menor) {
    if (num1 > num2) {
        maior = num1;
    } else {
        maior = num2;
    }

    if (num1 < num2) {
        menor = num1;
    } else {
        menor = num2;
    }

    console.log(`O maior valor foi ${maior} e o menor valor foi ${menor}`)
}

qualMaior()