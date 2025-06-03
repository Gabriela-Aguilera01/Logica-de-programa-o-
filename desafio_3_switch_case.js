console.log("1 - CMD")
console.log("2 - Terminal linux")

let opcao = prompt("Digite uma opção:")

if (opcao == 1 || opcao == "CMD") {
    let comando = prompt("Digite um comando desejado:")
    switch (true) {
        case comando == "dir":
            console.log("O comando dir lista os arquivos da pasta.")
            break
        case comando == "mkdir":
            console.log("O comando mkdir cria uma nova pasta.")
            break
        case comando == "echo":
            console.log("O comando echo cria um novo arquivo.")
            break
        case comando == "del":
            console.log("O comando del deleta um arquivo.")
            break
        default:
            console.log("Comando inválido para CMD.")
            break
    }
} else if (opcao == 2 || opcao == "Terminal linux") {
    let comando = prompt("Digite um comando desejado")
    switch (true) {
        case comando == "ls":
            console.log("O comando ls lista os conteúdos de um diretório.")
            break;
        case comando == "mv":
            console.log("O comando mv move ou renomeia arquivos e diretórios.")
            break
        default:
            console.log("Comando inválido para Terminal Linux.")
            break
    }
} else {
    console.log("Opção inválida.")
}
    
