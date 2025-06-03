Switch Case - Desafio 2:

let respostaCorreta = 0
let respostaIncorreta = 0 

// Pergunta1
console.log("Em qual ano estamos?")
console.log("A - 2050")
console.log("B - 2025")
console.log("C - 2030")
console.log("D - 2060")
let pergunta1 = prompt("Digite a alternativa correta:")
 switch (true){
     case pergunta1 == "B"|| pergunta1 ==2025:
       console.log ("Resposta correta ! \n")
       respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break
 }
 
 // Pergunta2 
 console.log("Qual é o resultado de 2 + 2?")
console.log("A - 3")
console.log("B - 5")
console.log("C - 4")
console.log("D - 6")
let pergunta2 = prompt("Digite a alternativa correta:")
switch (true){
    case pergunta2 == "C" || pergunta2 ==4:
        console.log ("Resposta correta ! \n")
       respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break 
}

// Pergunta3 
console.log("Qual é a cor do céu em um dia claro?")
console.log("A - Verde")
console.log("B - Azul")
let pergunta3 = prompt("Digite a alternativa correta:")
switch (true){
    case pergunta3 == "B" || pergunta3 == "B" :
      console.log ("Resposta correta ! \n")
       respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break    
}

//Pergunta4
console.log("Qual desses animais pode voar?")
console.log("A - Cachorro")
console.log("B - Peixe")
console.log("C - Pássaro")
console.log("D - Cavalo")
let pergunta4 = prompt("Digite a alternativa correta:")
switch(true){
    case pergunta4 =="C" || pergunta4 == "C":
       console.log ("Resposta correta ! \n")
       respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break     
}

// Pergunta5
console.log("Quantos dias tem uma semana?")
console.log("A - 5")
console.log("B - 6")
console.log("C - 7")
console.log("D - 8")
let pergunta5 = prompt("Digite a alternativa correta:")
switch (true){
    case pergunta5 =="C" || pergunta5 == 7 :
        console.log("Resposta correta! \n")
      respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break       
}

console.log("Qual é o maior planeta do Sistema Solar?")
console.log("A - Marte")
console.log("B - Terra")
console.log("C - Júpiter")
console.log("D - Vênus")
let pergunta6 = prompt("Digite a alternativa correta:")
switch (true){
    case pergunta6 =="C" || pergunta6 =="C":
         console.log("Resposta correta! \n")
      respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break    
       
}

// Pergunta7
console.log("Qual destes alimentos é uma fruta?")
console.log("A - Cenoura")
console.log("B - Maçã")
console.log("C - Alface")
console.log("D - Batata")
let pergunta7 = prompt("Digite a alternativa correta:")
switch (true){
    case pergunta7 =="B" || pergunta7 =="B":
         console.log("Resposta correta! \n")
      respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break  
}

// Pergunta8 
console.log("O que usamos para escovar os dentes?")
console.log("A - Garfo")
console.log("B - Escova de dentes")
console.log("C - Martelo")
console.log("D - Prato")
let pergunta8 = prompt("Digite a alternativa correta:")
switch (true){
    case pergunta8 =="B" || pergunta8 =="B":
         console.log("Resposta correta! \n")
      respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break  
}

// Pergunta9
console.log("Em que continente fica o Brasil?")
console.log("A - Europa")
console.log("B - América do Sul")
console.log("C - África")
console.log("D - Ásia")
let pergunta9 = prompt("Digite a alternativa correta:")
switch (true){
    case pergunta9 =="B" || pergunta9 =="B":
         console.log("Resposta correta! \n")
      respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break  
}

// Pergunta10 
console.log("Qual desses líquidos é essencial para a vida?")
console.log("A - Água")
console.log("B - Óleo")
console.log("C - Refrigerante")
console.log("D - Suco")
let pergunta10 = prompt("Digite a alternativa correta:")
switch (true){
    case pergunta10 =="A" || pergunta10 =="A":
         console.log("Resposta correta! \n")
      respostaCorreta++
       break
       default:
       console.log("Resposta Incorreta! \n")
       respostaIncorreta++
       break  
}

// Exibir Resultado Final
console.log("Resumo Final")
console.log("Respostas corretas: " + respostaCorreta)
console.log("Respostas incorretas: " + respostaIncorreta)


