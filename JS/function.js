// criar um aplicativo de frases motivacionais

/*
function createPhrases() {
    console.log('Estudar é muito bom.')
    console.log('Paciência e persistência.')
    console.log('Revisão é a mãe do aprendizado.')
}

createPhrases()
*/

/* function expression ou function anonymous */

/* parâmentro(parameters) */

/* 
function sem return
const sum = function(number1, number2) {
     console.log(number1+number2)
}
 */

/* 
function com return
*/
let total = 0

const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

/* Repare que agora ele vai retornar a variável total e portanto não será mas undefined o valor retornado */

/* 
console.log (number1)
se puxar number 1 fora da function ele não vai funcionar, como funciona nos blocks statements.
 */

/* sum (2, 3) */

/* agora por conta da function toda a vez que eu quiser executar a soma eu só preciso reatribuir os valores. */

/* sum(4, 5)
sum(56, 23) */

/* Utilizando o mesmo conceito com variáveis declaradas para os número dentro da sum */
/* 
let number1 = 34
let number2 = 25

sum(number1, number2)

Se rodar o código dessa forma continua funcionando normalmente.

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma dos dois é ${sum(number1, number2)}`)

Ele vai tentar retortar um resultado, mas como não tem a palavra return na função ele vai retornar um valor undefined.
*/

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma dos dois é ${sum(number1, number2)}`)

/* para isso acontecer você precisa usar a palavra return na function */

/*
Se não declarar que variável é (let, var, const) na variável total dentro da function então ela pode ser chamada em qualquer momento, se declarar qual variavel ela não vai ser encontrada fora do escopo da function. No caso abaixo só não vai dar erro, pois foi declarado um valor para let total fora da function. */

console.log(total)

