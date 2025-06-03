let nome = prompt(&quot;Digite seu nome: &quot;)
let email = prompt(&quot;Digite seu email: &quot;)
let telefone = prompt(&quot;Digite seu telefone: &quot;)
let idade = prompt(&quot;Digite sua idade: &quot;)
console.log(&quot;\n&quot;)
console.log(&quot;Verifique as informações&quot;)
console.log(&quot;A idade digitada : &quot;, idade)
console.log(&quot;Digite seu email: &quot;,email)
console.log(&quot;O nome digitado: &quot;,nome)
console.log(&quot;Digite seu telefone: &quot;, telefone)

function calcularIdade(){
const anoAtual = 2025
let anoNascimento = parseInt(prompt(&quot;Digite o seu ano de nascimento:&quot;)
let idade = anoAtual - anoNascimento
console.log (`Você tem ${idade} anos.`)
}

calcularIdade();