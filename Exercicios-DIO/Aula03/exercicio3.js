const valorProduto = 1000;
const pagamentoProduto = '2';

if (pagamentoProduto === '1') {
    let desconto = valorProduto * 0.1
    let total = valorProduto - desconto
    console.log(total)
} else if (pagamentoProduto === '2') {
    let desconto = valorProduto * 0.15
    let total = valorProduto - desconto
    console.log(total)
} else if (pagamentoProduto === '3') {
    console.log(valorProduto)
} else if (pagamentoProduto === '4') {
    let acrescimo = valorProduto * 1.1
    console.log(acrescimo)
}