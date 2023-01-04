// getElementById() - pega o elemento pelo id

const elementId = document.getElementById('form-title');
console.log(elementId)

// getElementByClassName - pega o elmento pela classe
const elementClass = document.getElementsByClassName('form');
console.log(elementClass)

// querySelector - pega o primeiro elemento pelo selector que ele achar, mesmo do CSS
const elementSelector = document.querySelector('p')
console.log(elementSelector)

// querySelectorAll - pega todos os elementos pelo selector que ele achar, mesmo do CSS
const elementSelectorAll = document.querySelectorAll('.login-alt')
console.log(elementSelectorAll)

// Qual usar?

// getElementById (element)
// getElementByClassName (HTMLColection)
// getElementByTagName (HTMLColection)
// querySelector (element)
// querySelectorAll (Nodelist)

// querySelector é um pouco mais lento, praticamente imperceptível. querySelector pode usar forEach