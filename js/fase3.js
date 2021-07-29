//CONDICIONAL TERNÁRIO (opção para if/else simples e menos verbosa)
var carro = {
    portas: 4,
    marca: 'Fiat',
    cor: 'vermelho'
}
var modelo;

/*Condicional com if else
function teste() {
    if (carro.portas === 4) {
        modelo = "Moledo 4 portas"
        console.log(modelo)
    }else {
        modelo = "Modelo 2 portas"
        console.log(modelo)
    }
}
teste()*/

//Condicional ternário
//SINTAXE var nome = condição ? true : false
var ternario = carro.portas ===4 ? modelo = "Quatro portas" : modelo = "Duas portas"
console.log(ternario)

