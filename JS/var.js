/* 

Variávies
    Nomes simbólicos para receber algu valor
    Atalhos de código
    Indentificadores

Toda variável ocupa um espaço na memória.

São 3 tipos
    var
    let
    const

*/

var clima="Quente"
console.log(clima)

let tempo="Ensolarado"
console.log(tempo)

const estacao="Verão" /* A variável const não pode ser alterada */
console.log(estacao)

/* 

No JS as variáveis são dinâmicas, ou seja, elas não precisam ser tipadas. Não precisa dizer o que é a varíavel. Ex: var numero = 32 - inteiro

*/

/* 

Scope determina a visibilidade de uma variável.

/*

Block statement:

    para criar um bloco use:
        {
            Aqui dento um bloco de código
        }

    o bloco criará num novo escopo chamado de block-scoped.

    Ex:
*/

console.log(x) /* Ele vai dizer que a variável de x é indefinida, pois ele sabe que ela existe, mas ela ainda não foi declarada.

JS lê dessa forma:
var x
console.log(x) 
{
   x=0
}

*/

{
    var x=0
}

console.log(x) /* Aqui ele sabe o valor pois ela já foi declarada. */

/* No caso de const e let, elas são locais. Ou seja, só funcionam no local onde foram criadas. Logo não se aplica a regra acima de var. Ex: 

console.log(y) 
{
   let y=3
}

Nesse caso ele não vai achar a variável let, pois ela está ¨escondida" dentro do block-statement. Isso serve também para esse caso:

{
   let y=3
}
console.log(y)

Para funcionar ela deve ser declarada antes tem que ser assim:

*/

 
{
    let y=3
    console.log(y)
}

/* Porém há um detalhe a var Y pode ser atualizada globalmente por meio de escopo block-statement. Para testar tire dos comentários o código a seguir: */

/*
{
    y=5
    console.log(y)
}

console.log(y)
*/

/* 

No caso de const funciona de forma parecida, mas você não pode alterá-la globamente, mas pode criar outra const com o mesmo nome dentro de um escopo block-statement. Ex:

*/

const w=10
{
    const w=12
    console.log(w)
}
console.log(w)

/* 

Regras para nomear variáveis:
    JS é case-sensitive;
    JS aceita a cadeia de carcteres Unicode;
        Ex:
            Álisson, Alisson, alisson - todos são diferentes.

    Posso:
        Iniciar com caracteres especiai. Ex: $
        Iniciar com letras
        Colocar acentos

    Não posso:
        Iniciar com números
        Colocar espaços vazios no nome

    Boas práticas:
        Coloque nomes que fazem sentido.
        De prefêrencia que explique o que a variável é ou faz.
        camelCase
        snake_case
        Escreve em inglês

*/
/* Declaração de variável - declaration */
var name 

/* Atribuição de valor - assigment */
name = "Guilherme"

/* que tipo de dado foi colacado na variável - tipo string */
console.log(name)

/* declaração de multiplas variáveis e variável tipo let */
let age, isHuman

age = 31 /* number */
isHuman = true /* boolean */


/* retornando multiplos argumentos */
console.log (name, age, isHuman)

/* concatenando texto e variáveis */
console.log ('O ' + name + ' tem ' + age + ' anos.')

/* interpolando valores com template strings */
console.log (`O ${name} tem ${age} anos.`)