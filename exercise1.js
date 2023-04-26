//PEDIR DOIS NÚMEROS PARA O USUÁRIO E REALIZAR CONTAS MATEMÁTICAS

let number1 = Number(prompt('Digite o primeiro número'))
let number2 = Number(prompt('Digite o segundo número'))

let sum = number1 + number2
let sub = number1 - number2
let div = number1 / number2
let multi = number1 * number2
let rest = number1 % number2

//Fazendo loop com for...of
  //Criação do array
  let math = [sum, sub, div, multi, rest]

  //Loop no array contendo os resultados das equações
  for (let sign of math) {
    alert(`O resultado é ${sign}`)
  }

//Fazendo do jeito iniciante
alert(`A soma dos números é igual à: ${sum}`)
alert(`A subtração dos números é igual à: ${sub}`)
alert(`A divisão dos números é igual à: ${div}`)
alert(`A multiplicação dos números é igual à: ${multi}`)
alert(`O resto da divisão dos números é igual à: ${div}`)

if (sum % 2 == 0) {
  alert(`O número ${sum} é par`)
} else {
  alert(`O número ${sum} é ímpar`)
}

if (number1 == number2) {
  alert(`Os números inseridos são iguais`)
} else {
  alert(`OS números inseridos são diferentes`)
}