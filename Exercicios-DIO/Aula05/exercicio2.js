class Imc {
    peso;
    altura;
    nome;

    constructor(peso, altura, nome) {
        this.peso = peso;
        this.altura = altura;
        this.nome = nome;
    }

    calcaularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        let imc = this.calcaularImc();
        
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }
}

const jose = new Imc(70, 1.75, 'José');

console.log(jose.classificarImc());

