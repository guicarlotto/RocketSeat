// function scope

/* let subject = 'create video'

function createThing (subject) {
    subject = 'study'
    return subject
}

console.log (subject)
console.log (createThing(subject)) */
/* 
Importante lembrar que devido ao escopo a variável subject não é a mesma, ela é uma dentro da function e outra fora. A de dentro só aparece quando a function é executada. Se não criar o subject dentro da function então ele vai alterar o subject de fora. Ex:
 */

/* let subject = 'create video'

function createThing () {
    return subject
}

console.log (subject)
console.log (createThing(subject)) */

/* Também é possível declara a variável de fora com a function, mas só depois que a function for chamada. Ex: */

let subject

function createThing () {
    subject = 'study'
    return subject
}

console.log (subject)
console.log (createThing())
console.log (subject)

