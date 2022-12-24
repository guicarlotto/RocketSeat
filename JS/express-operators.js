/* 

Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary

*/

// Operador Binário: Operador(nesse caso é o +) fica entre dois valores.

let number = 1

console.log(number + 1)

// Operador Uniário: Operador(nesse caso é o --, que está decrementando ele) lida com apenas um elemento.

console.log(--number)

// Operador Ternário: lida com três elementos(no caos é o ? e o : - se alo for false então imprima "nada".)

console.log(false ? 'alo' : 'nada')

//-------------------------------------------------------------

console.log('New:')
/*  
new
    *left-hand-side expression
    *serve para criar uma novo objeto
 */

let date = new Date('2022-12-05') //convertei o elemento em objeto tipo Date.
console.log(date)

//-------------------------------------------------------------

console.log('Operadores tipo unário:')
/*  
    Operadores tipo unário:
        typeof - mostra o tipo do elemento
        delete - deleta uma propriedade dentro de um objeto

 */

const person = {
    name: 'Gui',
    age: 31,
    weigth: 54,
}
delete person.age

console.log(person)

delete person.weigth

console.log(person)

console.log(typeof "GUi")

//-------------------------------------------------------------

console.log('Operadores aritiméticos:')

// Operadores aritiméticos:

// multiplição

console.log(2.3 * 4)

// divisão

console.log( 12 / 3)

// soma

console.log(2 + 2)

// subtração

console.log(3 - 2)

// resto da divisão

console.log (10 % 3)

// incremento

let increment = 0
increment++
console.log(increment) //pode ser usado antes e depois

// decremento

let decrement = 0
console.log(--decrement) //pode ser usado antes e depois

// exponencial

console.log(2 ** 7)

//-------------------------------------------------------------
console.log('Grouping operator:')

// Grouping operator: ( )

let total = 2 + 3 * 5
console.log (total)

let total2 = (2 + 3) * 5
console.log (total2)

//-------------------------------------------------------------


// Operadores de comparação:

console.log('Operadores de comparação:')

let one = 1
let two = 2

// == igual a (= + =)
console.log (two == 1)
console.log (one == 1)

// != diferente (! + =)
console.log(two != 1)
console.log(one != 1)

//-------------------------------------------------------------

// Operadores de estritamente: compara também o tipo e não só o valor.

console.log('Operadores de estritamente:')


// === igual a (= + = + =)
console.log (one === "1")
console.log (one === 1)

// !== diferente (! + = + =)
console.log(one !== "1")
console.log(one !== 1)

//-------------------------------------------------------------

// Maior que:

console.log('Maior que:')

// > Maior que 
console.log (one > two)
console.log (two < one)

// >= Maior ou igual que 
console.log (one >= two)
console.log (two >= one)

// < Menor que 
console.log (one < two)
console.log (two < one)

// < Menor ou igual que 
console.log (one <= two)
console.log (two <= one)

//-------------------------------------------------------------

// Operadores de atribuição: Note que o valor de x vai se alterando.

console.log('Atribuição')
let x

// = igual a
x=1
console.log(x)

// addition assignment
x +=2
console.log(x)

// subtraction assignment
x -=4
console.log(x)

// multiplication assignment
x *=-2
console.log(x)

// division assignment
x /= 1
console.log(x)

// remainder, exponetiazion assignment
x **= 2
console.log(x)
x %= 4
console.log(x)


//-------------------------------------------------------------

// Operadores Lógicos

console.log('Operadores Lógicos:')

let pao = true
let queijo  = false

// AND &&

console.log(pao && queijo)

// OR ||

console.log(pao || queijo)

// NOT !

console.log(!queijo)
console.log(!pao)



//-------------------------------------------------------------

// Operadores Condicional Ternário

console.log('Condicional Ternário:')

//Dependendenda da condição, nós receberemos valores diferentes.

// Ex1:. Amor verdadeiro

let liah = true
let gui = true

const trueLove = liah && gui ? 'Amor de verdade' : 'Amor de mentira'

console.log(trueLove)

let age = 17
const canDrive = age >= 18 ? 'Pode tirar carteira de motorista.' : 'Não pode dirigir.'

console.log (canDrive)


//-------------------------------------------------------------

// Operadores para String:

console.log('Operadores para String:')

// comparison
    console.log('a' == 'b')

// concatenatio
    console.log('a' + "a") // serve também para variaveis


//-------------------------------------------------------------

// Falsy e Truthy:

console.log('Falsy e Truthy:')

/* 

FALSY
    Quando um valor é considerado false em contextos onde o booleano é obrigatório (condicionais e loops).

    false
    -
    0-
    ""
    null
    undefined
    NaN

Nesses casos o JS precisa de um valor booeleano e como não tem, ele converte para false.
*/

console.log( 0 ? 'verdadeiro' : 'false')

/*

Truthy
    Quando um valor é considerado true em contextos onde o booleano é obrigatório (condicionais e loops).

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

Nesses casos o JS precisa de um valor booeleano e como não tem, ele converte para false.

*/

console.log( 1 ? 'verdadeiro' : 'false')

//-------------------------------------------------------------


/* 

Operator procedence
    
    * grouping                          ( )
    * negação e incremento              ! ++ --
    * multiplicaçãoo e divisão          * /
    * adição e subtração                + -
    * relacional                        < <= > >=
    * igualdade                         == != === !==
    * AND                               &&
    * OR                                ||
    * condicional                       ?:
    * assignment                        = += -= *=

*/