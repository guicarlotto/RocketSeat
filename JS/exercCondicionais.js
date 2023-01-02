/* 

1. Crie um algoritmo que transforme as notas do sitema númerico para sistema de notas em caracteres tipo A B C...

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

console.log ('Algortimo Notas:')


/* let score = 64

    if (score < 60) {
        console.log('F')
    }
         else if (score >= 60 && score < 70) {
            console.log('D')
            }
            else if (score >= 70 && score < 80) {
                console.log('C')
            }
            else if (score >= 80 && score < 90) {
                    console.log('B')
            }
            else if (score >= 90 && score<= 100) {
                        console.log('A')
            } else {console.log('Nota Inválida.')}; */

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 100
    let scoreC = score >= 70 && score <= 100
    let scoreD = score >= 60 && score <= 100
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = 'A'
    } else if (scoreB) {
        scoreFinal = 'B'
    } else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreD) {
        scoreFinal = 'D'
    } else if (scoreF) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Nota Inválida.'
    }

    return scoreFinal
}

console.log (getScore(-1))
console.log (getScore(102))
console.log (getScore(100))
console.log (getScore(88))
console.log (getScore(77))
console.log (getScore(66))
console.log (getScore(55))


/* 
2. Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas []
    * desoesas []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar um mensagem se a família está com saldo positivo ou negativo, seguido do valor saldo.
*/

console.log('Calculo de saldo Familiar:')

let entries = {
expenses : [3231.58, 234.54, 1235.90],
incomes : [4357.23],
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance () {
    const calculateIncomes = sum(entries.incomes)
    const calculateExpenses = sum(entries.expenses)

    const total = calculateIncomes - calculateExpenses
    const positive = total >=0
    let balanceText = 'Seu saldo é negativo'

    if (positive) {
        balanceText = 'Seu saldo é positivo'
    }

    console.log(`${balanceText} no valor de R$${total.toFixed(2).replace(".", ",")}`)
}

calculateBalance()

/* 
3. Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

C = (F - 32) * 5 / 9
F = C * 9 / 5 + 32
*/

console.log('Conversor temperatura:')

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
// fluxo de erro
    if (!celsiusExists && !fahrenheitExists) {
            throw new Error('Grau não identificado')
    }

// fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let degreeSign = 'C'

// fluxo alternativo, C -> F
    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C",""));
        formula = (celsius) => (celsius * 9 / 5) + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree('50f'))
    console.log(transformDegree('10C'))
}   catch(error){
    console.log(error.message)
}

/* 
4. Busacndo e contando dados em Arrays =

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

        * Contar o número de categorias e o número de livros em cada categoria.
        * Contar o número de autores.
        * Mostrar os livros do autor Gerge R.R. Martin
        * Transformar a função acima em uma função que irá receber o nome do autor e decolver os livros desse autor.

*/
console.log("Lista de autores:")

const booksByCategory =
[
    {
        category: "Fantasia",
        books:  [
                {
                    title:'A Guerra dos Tronos',
                    author:'George R. R. Martin',
                },
                {
                    title:'A Fúria dos Reis',
                    author:'George R. R. Martin',
                },
                {
                    title:'A Tormenta de Espadas',
                    author:'George R. R. Martin',
                },
                {
                    title:'O Festim dos Corvos',
                    author:'George R. R. Martin',
                },
                {
                    title:'A Dança dos Dragões',
                    author: 'George R. R. Martin',
                },
                {
                    title:'Hobbit',
                    author:'J. R. R. Tolkien',
                },
                {
                    title:'O Senhor dos Anéis',
                    author:'J. R. R. Tolkien',
                },
                {
                    title:'O Silmarillion',
                    author:'J. R. R. Tolkien',
                },
                {
                    title:'Contos Inacabados',
                    author:'George R. R. Martin',
                },
                {
                    title:'As Aventuras de Tom Bombadil',
                    author:'J. R. R. Tolkien',
                },
                {
                    title:'Os Filhos de Húrin',
                    author:'J. R. R. Tolkien',
                },
                ]
    },
]

const totalcategories = booksByCategory.length

for (let category of booksByCategory) {
    console.log('Total de livros da categoria', category.category,':')
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];
    
    for (let category of booksByCategory) {
        for (let books of category.books) {
            if(authors.indexOf(books.author) == -1) {
                authors.push(books.author)
            } //indexOf para verificar se a informação já está na array. e push é para colocar na array o que não for encontrado dentro dela.
        }
    }
    console.log('Total de autores:',authors.length)
    console.log(`Autores:
    ${authors}`)
}

function booksOfAuthor(author) {
    let books = [];
    
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            } 
        }
    }
    console.log('Quantos livros o autor tem:',books.length)
    console.log(`Livros do Autor:
    ${books.join(", ")}.`)//join para adicionar o separador
}

countAuthors();
booksOfAuthor('J. R. R. Tolkien');