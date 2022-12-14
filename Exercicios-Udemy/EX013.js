//Escreva uma funçar chamada ePaisagem
//que recebe dois argumentos: largura e altura
//de uma imagem (number).
//Retorne se True se a imagem estiver no modo paisagem
function ePaisagem(largura, altura) {
    if (altura > largura) {
        return console.log('A imagem está no modo retrato ' + false);
    } else {
        return console.log('A iamgem está no modo paisagem ' + true)
    }
}

ePaisagem(1080, 1920)