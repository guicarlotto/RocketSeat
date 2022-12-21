// callback function
/* 
function sayMyName(name) {
    console.log('antes de executar a callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
 */
// serve para evitar fazer isso:

function sayMyName(name) {
    console.log('executando a função')

    function name() {
        console.log('adicionando outro valor para função')
    }
    
    name()/* executando a função name */

    console.log('depois do processo estar concluído')
}

sayMyName(
)
