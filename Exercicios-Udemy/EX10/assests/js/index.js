const elementos = [
    { tag: 'p', texto: 'olá 1' },
    { tag: 'div', texto: 'olá 2' },
    { tag: 'section', texto: 'olá 3' },
    { tag: 'footer', texto: 'olá 4' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag)
    tagCriada.innerText = texto;
    div.appendChild(tagCriada)
    console.log(tag)
}

container.appendChild(div);