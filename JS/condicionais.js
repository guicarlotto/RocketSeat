// If...Else

/* const prompt = require("prompt-sync")({ sigint: true });

console.log ('If...Else:')

let temperature = prompt("Qual sua temperatura? ")

if (temperature >=37.8) {
    console.log ('Febre Alta')
} else
    if (temperature < 37.8 && temperature >= 37) { 
        console.log('Febre Moderada')
    } else {
    console.log('Sem Febre')
    } */

// ------------------------------------------------------------------

// Switch

console.log ('Switch:')

/* switch (expresssion) {
    case 'a':
        //código para a
        break
    case 'b':
        //código para b
        break
    default:
        // código para nem a e nem b
        break
}
 */

/* let expresssion = 'a'

switch (expresssion) {
    case 'a':
        console.log('a')
        break // faz com que pare aqui, se n tiver o break ele vai imprimir até encontrar o break.
    case 'b':
        console.log('b')
        break
    default:
        console.log('default')
        break
}

 */

/* function calculate (number1, operator, number2) {
    
    let result;

    switch (operator) {
        case'+':
            result = number1 + number2
            break
   
        case'-':
            result = number1 - number2
            break

        case'*':
            result = number1 * number2
            break

        case'/':
            result = number1 / number2
            break

        default:
            console.log('Operador não definido.')
            break
    }
return result
}

console.log(calculate(4, '*', 2))
 */

// -------------------------------------------------------------------------------------------

// Throw ele vai interromper a função e jogar para o try...catch

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }
    console.log ('depois do erro')
}

console.log('após a funçào de erro')
// Try...catch

try {
    sayMyName('')
} catch (e) {
    console.log(e)
}