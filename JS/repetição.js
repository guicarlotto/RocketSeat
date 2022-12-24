// Estrutura de repetiçãp

// for - para
console.log('for:')
for(let i = 0; i <10 ; i++) {
    console.log(i+1)
}

// ----------------------------------------------------------------------------

//while - enquanto
console.log('while:')
let x = 0 ;

while(x < 10) {
    console.log(x+1)
    x++;
}

// -----------------------------------------------------------------------------------

// for...of - serve para navegar em strings e arrays
console.log('for of:')
let name = 'Gui'
let names = ['Lili', 'Salem', 'Leia']

for (let name of names) {
    console.log(name)
}

// -----------------------------------------------------------------------------------

// for...in - cria um loop usando as propriedades do objeto
console.log('for in:')

let person = {
    nome : 'GUilherme',
    idade : 31,
    weight: 54.8
}

for (let property in person) {
    console.log(property, ':')
    console.log(person[property])
}

