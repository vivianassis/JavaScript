//Tipos primitivos e Objetos

//--Primitivos
Number - 1, 2, 3
Boolean - true / false
String - "Viviana"
null - ("Nulo/não existe")
undefined - ("Não definido")

//--Objetos
//Conjunto de propriedades com informações
var pessoa = {
    idade: 29,
    nome: 'Viviana',
    altura: 1.85,
    casado: false
}

function apresentar() {
    console.log(pessoa.nome);
}
apresentar();

function apresentar2() {
    console.log("O nome da pessoa é " + pessoa.nome + ". A sua idade é " + pessoa.idade);
    if (pessoa.idade > 29) {
        alert("Maior de 25 anos")
    } else {
        alert("Menor de 25 anos")
    }
}
//Cria entre chaves e usa a vírgula para separar uma propriedade de outra, pode chamar propriedades usando o ponto, eles agem como variáveis (sem aspas)

//---Criando uma variável do tipo FUNÇÃO

var apresentar2 = function () {
    console.log("O nome da pessoa é " + pessoa.nome + ". A sua idade é " + pessoa.idade);
    if (pessoa.idade > 29) {
        alert("Maior de 25 anos")
    } else {
        alert("Menor de 25 anos")
    }
}

//chamando
console.log(apresentar2)

//----//

//MÉTODOS DE OBJETO
var pessoa = {
    idade: 29,
    nome: 'Viviana',
    sobrenome: 'Souza',
    altura: 1.85,
    casado: false,
    aniversario: function () {
        pessoa.idade++
    },
    nomeComSobrenome: function () {
        return (pessoa.nome = pessoa.nome + " " + pessoa.sobrenome)
    }
}

pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa);
//fica 31 o valor, de idade, e o nome é sobreescrito como 'Viviana Souza'

//--TRUTHY E FALSE (serve para testar variável diretamente, sem condições, pois já tem condições pre-definidas)
//Comparativo comum
var numero = 1
/*function func() {
    if(numero === 1) {
        return true
    } else {
        return false
    }
}*/
//Com truthy e false
var booleano;
function func() {
    if (numero) {
        booleano = true
        console.log(booleano)
    } else {
        booleano = false
        console.log(booleano)
    }
}

Falsy
    - undefined
    - null
    - NaN
    - 0
    - -0
    - '' || ""

Senão, 'Truthy'
//por exemplo, se numero = 0, daria false


