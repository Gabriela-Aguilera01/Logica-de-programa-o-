let usuario = prompt("Digite seu nome de usuário:")
let senha = prompt("Digite sua senha:")
function login(usuarioDigitado, senhaDigitada) {
     if (usuarioDigitado === "Gabi" && senhaDigitada === "senha123") {
          console.log("Login OK: Bem-vinda")
     } else if (usuarioDigitado === "joaoSilva" && senhaDigitada === "joao2025") {
         console.log("Login OK: Bem-vindo")
     } else if (usuarioDigitado === "mariaLuz" && senhaDigitada === "mluz@456") {
          console.log("Login OK")
     } else if (usuarioDigitado === "lucasTech" && senhaDigitada === "tech#321") {
     console.log("Login OK: Bem-vindo")
     } else if (usuarioDigitado === "anaRosa" && senhaDigitada === "flores78") {
         console.log("Login OK: Bem-vinda")
     } else if (usuarioDigitado === "carlos123" && senhaDigitada === "carpass!") {
      console.log("Login OK: Olá")
     } else if (usuarioDigitado === "juliana88" && senhaDigitada === "ju88senha") {
           console.log("Login OK: Bem-vinda")
     } else if (usuarioDigitado === "pedroDev" && senhaDigitada === "codigo42") {
         console.log("Login OK: Bem-vindo")
     } else if (usuarioDigitado === "lara_night" && senhaDigitada === "l@ra#night") {
           console.log("Login OK: Bem-vindo")
     } else if (usuarioDigitado === "vinicius77" && senhaDigitada === "vin77senha") {
          console.log("Login OK: Olá")
     } else if (usuarioDigitado === "samanthaX" && senhaDigitada === "xS@12345") {
         console.log("Login OK: Bem-vinda")
     } else {
        console.log("Usuário ou senha incorretos.")
    }
}
login(usuario, senha)

