/* 1. Declare uma varíavel de nome weight: */

    /* var weight */

/* 2. Que tipo de dado é a varíavel acima? undefined */

/* 3. Declare uma variável e atribua valores para da um dos dados:
        *name: String
        *age: Number (integer)
        *stars: Number (float)
        *isSubscribed: Boolean 
*/
/* 
    let name, age, stars, isSubscribed

        name = 'Guilherme'
        age = 31
        stars = 4.8
        isSubscribed = true
 */

/* 
    4. A variável student abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    
    4.2 Mostre no console a seguinte mensagem: <name> de idade <age> pesa <weigth> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade.
*/

    let student = {
        name : 'Guilherme',
        age : 31,
        weight : 54.5,
    }

    /* console.log(`O ${student.name} tem ${student.age} anos e pesa ${student.weight} Kgs.`) */

    /*

    5. Declare uma variável de tipo array, de nome de students e atribua a ela nenhum valor, ou seja, somente o Array vazio:
    
    */

    let students = [] 

    /* 
    
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e iserir ele no array)
    
    */

    students = [
        student
    ]
    /* 

    7. Coloque no console o valor dda posição zero do Array acima:
    
    */

    console.log(students[0])

    /* 
    
    8. Crie um novo student e coloque na posicão 1 do Array Students:

    */

    const carlos = {
        name : 'Carlos',
        age : 24,
        weight : 72.5,
    }

    students [1] = carlos
    
    console.log (students[1])

    /* 
    
    9. Sem rodar o código, qual a reposta do código abaixo? Depois rode o código e veja se acertou.

    console.log(a)
    var a = 1
    
    R: No terminal o console vai imprimir o valor undefined pois no momento de sua execução a variável ainda não foi definada, mas como ela está no código sem o block statement ele sabe que ela existe.
    */

    console.log(a)
    var a = 1

    /* 
    
    Se a variável fosse do tipo let ele não encontraria ela, por tanto daria erro de referência.
    
    */
