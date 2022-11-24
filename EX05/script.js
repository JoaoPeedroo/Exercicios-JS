const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML += `Seu nome é: ${nome} <br>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br>` 
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)} <br>`
document.body.innerHTML += `Qual o primeiro indice da LETRA a no seu nome: ${nome.indexOf('o')} <br>`
document.body.innerHTML += `Qual o segundo indice da LETRA no seu nome: ${nome.lastIndexOf('o')} <br>` 
document.body.innerHTML += `As ultimas 3 letreas do seu nome são: ${nome.slice(-3)} <br>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`
document.body.innerHTML += `Seu nome com letras maiúculas: ${nome.toLocaleUpperCase()} <br>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()} <br>`