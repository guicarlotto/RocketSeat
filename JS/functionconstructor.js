/* 
Function Constructor

    * expressão new
    * criar um novo objeto
    * this keyword
 */

function Person (name) {
    this.name = name // referência o gui
    this.walk = function() {
        return this.name + " está andando"
    }
}

const gui = new Person("Gui")
const lili = new Person("Lili")
console.log(gui.walk())
console.log(lili.walk())

console.log(``)