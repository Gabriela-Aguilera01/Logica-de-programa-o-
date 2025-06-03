1-
let idade = prompt("Digite sua idade: ")
if (idade < 18) {
    console.log("Você é menor de idade")
} else {
    console.log("Você é de maior")
}

2-
// Obtém a hora atual
const horaAtual = new Date().getHours();

// Verifica o período do dia
let mensagem;
if (horaAtual >= 6 && horaAtual < 12) {
    mensagem = "Bom dia!"
} else if (horaAtual >= 12 && horaAtual < 18) {
    mensagem = "Boa tarde!"
} else {
    mensagem = "Boa noite!"
}

// Exibe a mensagem no console
console.log(mensagem)
3-
const idade = parseInt(prompt("Digite sua idade:"))

// Verifica se pode entrar no evento
if (idade >= 16) {
    alert("Entrada permitida!")
} else {
    alert("Entrada negada! Você precisa ter pelo menos 16 anos.")
}

4-
const num1 = parseFloat(prompt("Digite o primeiro número:"))
const num2 = parseFloat(prompt("Digite o segundo número:"))

if (num1 > num2) {
    alert("O maior número é: " + num1)
} else if (num2 > num1) {
    alert("O maior número é: " + num2)
} else 
    alert("Os números são iguais.")
}

5- 
const temperatura = parseFloat(prompt("Digite a temperatura em ºC:"));

if (temperatura < 15) {
    alert("Está Frio.");
} else if (temperatura >= 15 && temperatura <= 25) {
    alert("Está Térmico.")
} else {
    alert("Está Quente.")
}

6- 
const palavra = prompt("Digite uma palavra:")

if (palavra === "Felicidade") {
    alert("Palavra correta")
} else {
    alert("Palavra incorreta")
}

7-
let moedas = prompt("Digite quantas moedas você tem:");

if (moedas < 10) {
  alert("Poucas moedas");
} else if (moedas <= 20) {
  alert("Quantidade média");
} else {
  alert("Muitas moedas");
}

8-
let temperatura = prompt("Digite a temperatura:");

if (temperatura > 30) {
  alert("Muito quente");
} else if (temperatura >= 20) {
  alert("Calor");
} else {
  alert("Frio");
}
9-
let numero = prompt("Digite um número:");

if (numero > 0) {
  alert("Número positivo");
} else if (numero < 0) {
  alert("Número negativo");
} else {
  alert("Zero");
}
10-
let nota = prompt("Digite a nota do aluno:");

if (nota >= 7) {
  alert("Aprovado");
} else {
  alert("Reprovado");
}
11-
let animal = prompt("Digite um animal:");

if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
  alert("Animal listado");
} else {
  alert("Animal não listado");
}
12-
let dia = prompt("Digite o dia da semana:");

if (dia === "Sábado" || dia === "Domingo") {
  alert("Fim de semana");
} else {
  alert("Dia útil");
}
13-
let anos = prompt("Quantos anos de experiência em programação você tem?");

if (anos > 2) {
  alert("Experiente");
} else {
  alert("Iniciante");
}
14- 
let valor = prompt("Digite um número:");

if (valor >= 10 && valor <= 20) {
  alert("Dentro do intervalo");
} else {
  alert("Fora do intervalo");
}
15-
let idadeCNH = prompt("Digite sua idade:");

if (idadeCNH >= 18) {
  alert("Pode tirar carteira de motorista");
} else {
  alert("Não pode tirar carteira de motorista");
}
16-
let n = prompt("Digite um número:");

if (n > 0) {
  alert("Positivo");
} else if (n < 0) {
  alert("Negativo");
} else {
  alert("Zero");
}





