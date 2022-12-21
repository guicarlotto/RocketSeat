/* 

    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

    Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.
    
*/

//------------------------------------------------------//

console.log("Type conversion")

/* 

    Type conversion (typecasting) vs Type Coersion

    * Alteração de um tipo de dado para outro tipo

*/


console.log('9' + 5)


/* abaixo converti o tipo string para number, no caso o type coersion o próprio JS força a troca. */


console.log(Number('9') + 5)


//------------------------------------------------------//

console.log("Manipulando String e Números")
/*

Manipulando String e Números

Transformar String em Número e Número em String

*/

let string = "123"
console.log(Number(string))

let number = "321"
console.log(String(number))

//------------------------------------------------------//

console.log("Contagem de caracteres")

/* 

Contagem de caracteres

*/

let word = "Paralelepipedo"
console.log(word.length)

let number1 = 1234
console.log(String(number).length)

//------------------------------------------------------//

console.log("Casas Decimais")

/* 

Transformar um número quebrado com 2 casas decimais e trocar o ponto por vírgurla.

*/

let number2 = 45.2343254
console.log(number2.toFixed(2).replace(".", ",")) // vale salientar que por conta da troca o número vira string.

//------------------------------------------------------//

console.log("Minúsculo e Maiúsculo")

/* 

Transformar letras minúsculas em maiúsculas.

*/

let word2 = "Programar é pika!"
console.log(word2.toLowerCase())
console.log(word2.toUpperCase())

//------------------------------------------------------//

console.log("Separadando Strings")

/* 

Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque "_".

*/

let phrase = "O futuro é pika!"
let myArray = phrase.split(" ")

console.log(myArray)

let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)


//------------------------------------------------------//

console.log("Encontrar a palavra")

/* 

Verificar se o texto contém a palavra Amor.

*/

let phrase2 = "A Lilian é o meu grande Amor!"
let phrase2Lowercase = (phrase2.toLowerCase()) // Tranformei tudo em minúsculo para o includes encontrar.
console.log(phrase2Lowercase.includes("amor")) // INCLUDES É CASE SENSITIVE


//------------------------------------------------------//

console.log("Criando array com construtor")

/* 

Crie uma array com construtor.

*/

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

//------------------------------------------------------//

console.log("Contar Array")

/* 

Conte os elementos de uma array.

*/

console.log(myArray2.length)

//------------------------------------------------------//

console.log("String em Array")

/* 

Tranformar uma frse em elementos de uam array.

*/

console.log(Array.from(phrase2))

//------------------------------------------------------//

console.log("Manipulando Array")

let techs = ["html", "css" , "js", "c", "c++"]


// adicionar um item no fim

console.log(techs.push("nodejs"))

// adicionar um item no começo

techs.unshift("c")

// remover do fim

techs.pop()

// remover do começo

techs.shift()

// pegar somente alguns elementos da array

console.log(techs.slice(0, 2)) // de que posição até que posição vai separar

// remover 1 ou mais itens em qualquer posição do array

techs.splice(0, 2) //[primeiro é a posição depois o número que quer tirar, diference do slice]

// encontrar a posição de um elemento no array

let index = techs.indexOf('js')
console.log(techs[index])

console.log(techs)

