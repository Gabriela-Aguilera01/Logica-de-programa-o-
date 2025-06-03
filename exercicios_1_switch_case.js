Exercícios 1

Exercício 1: Crie um script que exiba diferentes saudações com base no idioma escolhido (Português, Inglês, Espanhol, etc)



let Idimoma = "Espanhol"
switch (Idimoma) {
  case "Espanhol":
    console.log("Hola Qué tal Cómo estás ")
    break
  case "Inglês": 
    console.log("Hello good morning")
    break
  case "Português":
    console.log("Oi como vai ?")
    break
  default:
    console.log("Idioma invalido")
    break
}




2.Escreva um código que exiba os dias da semana com base no número fornecido (1 para domingo, 2 para segunda-feira, etc.)



  let numero = 4
  switch (numero){
  case 1:
   console.log("Domingo")
   break
   case 2:
   console.log("Segunda")
   break
    case 3:
     console.log("Terça")
       break
       case 4:
        console.log("Quarta")
         break
          default:
            console.log("Numero invalido")
                    break



3. Exercício 3: Escreva um script que exiba diferentes tipos de transporte com base no número fornecido (1 para carro, 2 para bicicleta, 3 para ônibus, etc.).


let numero = 3
switch (numero){
case 1:
console.log("carro")
break
case 2:
console.log("bicicleta")
break
case 3:
console.log("ônibus")
break
default:
console.log("Numero invalido")
break
  }


4. Exercício 4: Desenvolva um programa que classifique diferentes níveis de urgência com base em um número fornecido (1 para baixa, 2 para média, 3 para alta).


let nivel = 2
switch (nivel){
case 1:
console.log("Urgência Baixa")
break
case 2:
console.log("Urgência media")
break
case 3:
console.log("Urgência alta")
break
default:
console.log("Urgência invalida")
break
  }



5. Exercício 5: Escreva um script que determine a fase da lua com base no número do mês.



let mes = 8

switch (mes) {
  case 1:
  case 5:
  case 9:
    console.log("Lua") 
    break
  case 2:
  case 6:
  case 10:
    console.log("Quarto Crescente")
    break
  case 3:
  case 7:
  case 11:
    console.log("Lua Cheia")
    break
  case 4:
  case 8:
  case 12:
    console.log("Quarto Minguante")
    break
  default:
    console.log("Mês inválido")
    break
}


6. Exercício 6: Crie um código que exiba diferentes tipos de veículos com base na categoria (compacto, SUV, caminhão).


let categoria = "Suv"
switch (categoria){
case "compacto":
console.log("Veículo Compacto Econômico e ideal para a cidade")
break
case "Suv":
console.log("Veículo SUV Espaçoso e ótimo para viagens em família")
break
case "caminhão":
console.log ("Caminhão Usado para transporte de cargas pesadas")
default:
console.log("Veículo invalido")
break
}


7.  Exercício 7: Desenvolva um programa que calcule diferentes tarifas de estacionamento com base na duração do tempo estacionado.

let horas = 8
let categoria
if (horas <= 1) {
  categoria = "curto"
} else if (horas <= 3) {
  categoria = "médio"
} else if (horas <= 6) {
  categoria = "longo"
} else {
  categoria = "diária"
}
switch (categoria) {
  case "curto":
    console.log("Tarifa: R$ 5,00")
    break
  case "médio":
    console.log("Tarifa: R$ 10,00")
    break
  case "longo":
    console.log("Tarifa: R$ 15,00")
    break
  case "diária":
    console.log("Tarifa: R$ 25,00")
    break
  default:
    console.log("Categoria inválida")
    break
}


8. Exercício 8: Escreva um script que exiba diferentes níveis de dificuldade em jogos com base no número fornecido (1 para fácil, 2 para médio, 3 para difícil).

let jogo = 2
switch (jogo){
case 1:
console.log(" Nível fácil")
break
case 2:
console.log(" Nível médio")
break
case 3:
console.log("Nível difícil")
break
default:
console.log("Nível invalido")
break
}

9. Exercício 9: Crie um código que determine diferentes tipos de serviços oferecidos por uma academia com base na categoria (aula de yoga, musculação, personal trainer).


let categoria = "Musculação"
switch(categoria){
case "Aula de yoga":
console.log("Aula de Yoga:Relaxamento, respiração e alongamento")
break
case "Musculação":
console.log("Musculação:Treinamento com pesos e aparelhos")
break
case "Personal Trainer":
console.log("Personal Trainer:Treino exclusivo com acompanhamento individual")
break
default:
  console.log("Serviço invalido")
break          
}



10. Exercício 10: Escreva um script que exiba diferentes preços de ingressos para um evento com base na categoria escolhida (estudante, meia entrada, inteira).

let categoria = "meia entrada"

switch (categoria){
  case "estudante":
    console.log("Preço do ingresso: R$ 15,00")
    break
  case "meia entrada":
    console.log("Preço do ingresso: R$ 20,00")
    break
  case "inteira":
    console.log("Preço do ingresso: R$ 40,00")
    break
  default:
    console.log("Categoria inválida")
    break
}


11. Exercício 11: Crie um código que determine diferentes níveis de dificuldade em exercícios físicos com base na faixa etária do praticante.


let idade = 45
let faixaEtaria
if (idade < 13) {
  faixaEtaria = "infantil"
} else if (idade < 18) {
  faixaEtaria = "adolescente"
} else if (idade < 60) {
  faixaEtaria = "adulto"
} else {
  faixaEtaria = "idoso"
}
switch (faixaEtaria) {
  case "infantil":
    console.log("Nível de dificuldade: Leve")
    break;
  case "adolescente":
    console.log("Nível de dificuldade: Moderado")
    break
  case "adulto":
    console.log("Nível de dificuldade: Intenso")
    break
  case "idoso":
    console.log("Nível de dificuldade: Suave")
    break
  default:
    console.log("Faixa etária inválida")
    break
}


12. Exercício 12: Desenvolva um programa que exiba diferentes tipos de instrumentos musicais com base no gênero musical

let gênero = "rock"

switch (gênero){
  case "rock":
    console.log("Instrumentos típicos: Guitarra elétrica, baixo, bateria")
    break
  case "samba":
    console.log("Instrumentos típicos: Pandeiro, cavaquinho, surdo")
    break
  case "jazz":
    console.log("Instrumentos típicos: Saxofone, piano, contrabaixo acústico")
    break
  case "sertanejo":
    console.log("Instrumentos típicos: Violão, sanfona, baixo")
    break
  case "funk":
    console.log("Instrumentos típicos: Batidas eletrônicas, sintetizadores")
    break
  default:
    console.log("Gênero musical não reconhecido. Tente: rock, samba, jazz, sertanejo ou funk")
    break
}

13. Exercício 13: Crie um código que exiba diferentes tipos de cursos oferecidos em uma escola de tecnologia com base na área (front-end, back-end, mobile).

let area = "front-end"
switch (area){
  case "front-end":
    console.log("Cursos disponíveis: HTML, CSS, JavaScript, React")
    break
  case "back-end":
    console.log("Cursos disponíveis: Node.js, Java, Python, Banco de Dados")
    break
  case "mobile":
    console.log("Cursos disponíveis: React Native, Flutter, Kotlin, Swift")
    break
  default:
    console.log("Área inválida. Escolha entre: front-end, back-end ou mobile")
    break
}


14. Exercício 14: Desenvolva um programa que determine diferentes níveis de habilidade em esportes com base na idade do atleta.


let idade = 25;
let nivel
if (idade < 10) {
  nivel = "iniciante"
} else if (idade < 18) {
  nivel = "intermediario"
} else if (idade <= 40) {
  nivel = "avancado"
} else {
  nivel = "master"
}
switch (nivel) {
  case "iniciante":
    console.log("Iniciante: Foco em fundamentos e diversão.")
    break
  case "intermediario":
    console.log(": Intermediário: Aprimoramento técnico")
    break
  case "avancado":
    console.log("Avançado:Treinamento de alto rendimento")
    break
  case "master":
    console.log( "Master:Exercícios adaptados.")
    break
  default:
    console.log("Nível desconhecido")
    break
}

15.  Exercício 15: Escreva um script que exiba diferentes níveis de dificuldade em desafios matemáticos com base na categoria (básico, intermediário, avançado)

let categoria = "intermediário"

switch (categoria){
  case "básico":
    console.log("Desafio: adição, subtração, multiplicação")
    break
  case "intermediário":
    console.log("Desafio: Frações, potências, porcentagens e equações simples")
    break
  case "avançado":
    console.log("Desafio: Álgebra, funções, equações do 2º grau e lógica matemática")
    break
  default:
    console.log("Categoria inválida")
    break
}
