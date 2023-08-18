alert('Hello World!!!')

let numbOne = parseInt(prompt('Digite o 1º digito:'))
let numbTwo = parseInt(prompt('Digite o 2º digito:'))

let sumNumb = numbOne + numbTwo
alert(sumNumb)
let subNumb = numbOne - numbTwo
alert(subNumb)
let multNumb = numbOne * numbTwo
alert(multNumb)
let divNumb = numbOne / numbTwo
alert(divNumb)

let verifyNumb = isNaN(numbOne)
let verifyNumb2 = typeof numbOne

if (verifyNumb === false && verifyNumb2 === 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}

let word = 'hello'

let verifyString = typeof word === 'string'

if (verifyString === true) {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

let testBool = false

let verifyBool = typeof testBool === 'boolean'

if (verifyBool === true) {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}

if (numbOne % 2 === 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

if (numbTwo % 2 !== 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}
