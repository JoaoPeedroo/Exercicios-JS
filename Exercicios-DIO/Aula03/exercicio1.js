const primeiraNota = 8;
const segundaNota = 9;
const terceiraNota = 8;
const media = (primeiraNota + segundaNota + terceiraNota) / 3;

console.log(media.toFixed(2))

if (media < 5) {
    console.log('reprovado')
} else if (media >= 5 && media <= 7) {
    console.log('recuperação')
} else {
    console.log('Aprovado')
}