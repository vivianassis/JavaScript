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


//Retorno de função com array e objeto
//retorno acontece uma vez só, por exemplo
function name(params) {
    return 'Texto'
}
function name(params) {
    return 1
}
function name(params) {
    return undefined
}
function name(params) {
    return null
}
function name(params) {
    return 'Texto'
    return 3
} //Assim não funciona pq tem mais de um

//--retorno em array
function arr(params) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}//retorno nomedafuncao()[posicao] ou .propriedade
console.log(arr()[0]) //retorna 1
console.log(arr()[5]) //retorna 6
console.log(arr.length - 1) //último índice do array

function calculo() {
    var soma = arr()[9] + arr()[3]
    return soma
}

//--retorno em objeto
function obj() {
    return {
        peso: 90,
        idade:30,
        nome:'Amanda'
    }
}//retorno nomedafuncao().propriedade
console.log(obj().nome)


//Parâmetros de função com array e objeto
//-- array
var array = [5, 6, 7, 8, 9, 10]
function func(arg) {
    return arg//[0] <<<< pode fazer direto aqui, retorna 5
} //chamando:
console.log(func(array))
console.log(func(array)[4]) // ou aqui, retorna 9

//-- objeto
var obj = {
    nome: 'Juliana',
    altura: 2.10,
    peso: 94, 
    idade:30
}

function func2(arg) {
    return arg.nome //ou tudo, só não digitar propriedades
}
console.log(func2(obj))

//Vírgula e Switch
var a, b = 2, c = 3
//var a = undefined, var b = 2, var c = 3
function func3() {
    return (a += 1, a) //retorna o mesmo que return a++
}

//-- switch (condicional de um jeito diferente, usando case e default)
/*com if else
function func4(x) {
    if(x===1) {
        console.log('teste1)
    }
    } else if(x===2) {
        console.log('teste2')
    } else {
        console.log('teste3')
    }
}
*/
function func4(x) {
    switch(x) {
        case 1:
            console.log('O número é 1')
            break
        case 2: 
            console.log('O número é 2')
            break
        default: //tipo o 'else'
            console.log('O número não é 1 nem 2')
            break
        }
} //chamando
func4(10) //cai no default



