let usuario = prompt("Digite o usuário:")
while (usuario !== "admin") {
    console.log("Nome do usuário errado.")
    usuario = prompt("Digite o usuário:")
}
let senha = Number(prompt("Digite a senha:"))
while (senha !== 1234) {
    console.log("Senha errada.")
    senha = Number(prompt("Digite a senha:"))
}
console.log("Senha correta!")
let confirmacao = Number(prompt("Confirme sua senha:"))
while (confirmacao !== 1234) {
    console.log("Senha incorreta")
    confirmacao = Number(prompt("Confirme sua senha:"))
}
console.log("Senha correta")
usuario = prompt("Digite o usuário:")
senha = Number(prompt("Digite a senha:"))
while (usuario !== "admin" || senha !== 1234) {
    console.log("Usuário ou senha incorretos.")
    usuario = prompt("Digite o usuário:")
    senha = Number(prompt("Digite a senha:"))
}
console.log("Login efetuado!")
let tentativas = 0
while (tentativas < 3) {
    usuario = prompt("Usuário:")
    senha = Number(prompt("Senha:"))
    if (usuario === "admin" && senha === 1234) {
        console.log("Login realizado com sucesso!")
        break
    } else {
        tentativas++
        console.log("Usuário ou senha incorretos.")
    }
}
if (tentativas >= 3) {
    console.log("Acesso bloqueado.")
}
let nomeCadastrado = ""
while (nomeCadastrado === "") {
    nomeCadastrado = prompt("Cadastre seu nome de usuário:")
}
let senhaCadastrada = ""
while (senhaCadastrada === "") {
    senhaCadastrada = prompt("Cadastre sua senha:")
}
let nomeDigitado = ""
let senhaDigitada = ""

while (nomeDigitado !== nomeCadastrado || senhaDigitada !== senhaCadastrada) {
    nomeDigitado = prompt("Digite seu nome de usuário para login:")
    senhaDigitada = prompt("Digite sua senha:")
    
    if (nomeDigitado !== nomeCadastrado || senhaDigitada !== senhaCadastrada) {
        let esqueci = prompt("Nome de usuário ou senha incorretos. Esqueceu a senha? (sim/não)")
        if (esqueci === "sim") {
            console.log("Sua senha é: " + senhaCadastrada)
        }
    }
}
console.log("Login realizado com sucesso! Bem-vindo(a), " + nomeCadastrado + "!")
let comando = ""

while (comando !== "sair") {
    comando = prompt("Digite 'sair' para fazer logout:")
}
console.log("Logout realizado com sucesso!")
