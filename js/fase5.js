//--Funções autoexecutáveis (IIFE)
/*Funções normais
var metodos = {
    prop: function name() {
            console.log(10 + 10)
        }
    }//chamando:
console.log(metodos.prop)
||
function funcao() {
    console.log(20 +20 )    
} //chamando:
console.log(funcao())
*/
//autoexecutável serve para não se perder nos escopos globais
(function() {
    console.log(40 + 40)
}())
//não precisa chamar, ela executa sozinha

//-- Wrapper objects e Construtores
//wrapper objects são propriedades dos objetos

//var nome = 'Viviana' -- normal
var nome = new String('Viviana') //Com construtor
console.log(nome.length)//pegando propriedade (ou wrapper object) da string 'Viviana'
var nome2 = String(10)
console.log(nome2.valueOf) //converterá para '10' - string


//Teste de valores (TypeOf) --testando tipos PRIMITIVOS de dado do JS
var nome = 'Viviana'
var numero = 500
var booleano = true

document.write(`<h1>${ typeof nome }</h1>`)
//retorna string, number e boolean, escrito no documento html

function somar(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        resultado = num1 + num2
        document.write(`<h1>O resultado da soma é: ${resultado}</h1>`)
    } else {
        document.write(`<h1>Os valores fornecidos não são numéricos</h1>`)
    }   
}
somar(10, 20)
somar('julia', 20)//cai em else

//===