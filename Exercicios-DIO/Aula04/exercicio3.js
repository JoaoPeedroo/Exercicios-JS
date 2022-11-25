function aplicarDesconto(valor, desconto) {
   return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

const valorProduto = 1000;
const pagamentoProduto = 2;

if (pagamentoProduto === 1) {
    console.log(aplicarDesconto(valorProduto, 10))
} else if (pagamentoProduto === 2) {
    console.log(aplicarDesconto(valorProduto, 15))
} else if (pagamentoProduto === 3) {
    console.log(valorProduto)
} else if (pagamentoProduto === 4) {
      console.log(aplicarJuros(valorProduto, 10))
}

