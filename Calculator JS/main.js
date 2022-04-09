const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')
const plus = document.querySelector('.plus')
const result = document.querySelector('.result')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')

let numbers = []
let temp = 0

const add = (...inp) => inp.map((input) => temp += input)
const minus = (...inp) => inp.map((input) => temp -= input)
const add = (...inp) => inp.map((input) => temp += input)
const add = (...inp) => inp.map((input) => temp += input)

const pushToArray = (inp) => {
  numbers.push((+inp.textContent))
}

const displayNumber = function(inp) {
  result.textContent += inp.textContent
}

const buttons = [one, two, three, four, five, six, seven, eight, nine, zero]

buttons.map(function(inp) {
  inp.addEventListener('click', function() {
    displayNumber(this)
    pushToArray(this)
    // result.textContent = ''
  })
})


plus.addEventListener('click', function() {
  displayNumber(this)
})

equal.addEventListener('click', function() {
  add(...numbers)
  result.textContent = temp
  temp = 0
  numbers = []
})

clear.addEventListener('click', () => {
  result.textContent = ''
  numbers = []
})



// const pushToArray = function(inp) {
//   inp.textContent
// }

// console.log(+one.textContent)


