//-- Loop condicional while (enquanto)
Sintaxe
/*while(condição) {
    faz o que?
    e depois?
} volta pro início*/
var contador = 0
while (contador < 10) {
    console.log(contador)
    contador++
}//Imprime de 0 a 9 no console
var contador = 10
while (contador !== 0) {
    console.log(contador)
    contador--
}//imprime de 10 a 1 no console

//Operador módulo '%'
10 % 2  //da o resto da divisão = 0

//achar os pares dentro de 20
var numero = 0
while (numero <= 20) {
    numero % 2 === 0 ? console.log(numero) : ''
}

//--Array e a propriedade length
var array = [1, 2, 3, 4, 5, 'Viviana', 'Souza', { idade: '29 anos' }]
var quantidade = array.length
console.log(array[4]) //da o 5 (posição)
console.log("Essa é a quantidade: " + quantidade) //quantos elementos(itens) tem no array = 8

while (quantidade >= 0) {
    console.log(array[quantidade--])
    if (quantidade === 3) {
        console.log(array[quantidade].idade) //mostra só o valor '29 anos'
    }
} //reduzindo sempre pra mostrar todos

//--Métodos em array

/*
 concat()	Junta dois ou mais arrays e retorna uma cópia dos arrays unidos
 join()	    Junta todos os elementos de um array em uma string
 pop()	    Remove o último elemento de um array e retorna esse elemento
 push()	    Adiciona novos elementos ao final de um array e retorna o novo tamanho
 shift()	Remove o primeiro elemento de um array e retorna esse elemento
 slice()	Seleciona uma parte de um array e retorna o novo array
 splice()	Adiciona / Remove elementos de um array
 toString()	Converte um array em uma string e retorna o resultado
 unshift()	Adiciona novos elementos ao início de um array e retorna o novo tamanho
*/

//uso
var array = ['Viviana', 'Souza', 1, 2, 3, 4, 5, true]
function func6() {
    array.push('String Adicionada'/*ou qualquer tipo de dado*/) //pode usar qualquer método aqui    
    return array
}
console.log(func6())

//-- Lopp 'for'
//sintaxe for (inicio ; condição ; posterior) 
//o que fazer
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (var array/*(ndex)*/ = 0; array[i] < array.length; array[i++]) {
    console.log(array[i]);
}


//===