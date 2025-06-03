let num1 = Number(prompt("Digite o numero1: "))
let num2 = Number(prompt("Digite o numero2: "))

let escolha = Number(prompt("Escolha a operação:\n1 - Soma\n2 - Multiplicação\n3 - Subtração\n4 - Divisão\n"))

let resultado

if (escolha === 1) {
    resultado = soma(num1, num2)
    console.log("O resultado da soma é:", resultado)
} else if (escolha === 2) {
    resultado = multiplicacao(num1, num2);
    console.log("O resultado da multiplicação é:", resultado)
} else if (escolha === 3) {
    resultado = subtracao(num1, num2);
    console.log("O resultado da subtração é:", resultado)
} else if (escolha === 4) {
    if (numero2 !== 0) {
        resultado = divisao(num1, num2)
        console.log("O resultado da divisão é:", resultado)
    } else {
        console.log("Erro: divisão por zero não é permitida.")
    }
} else {
    console.log("Opção inválida.")
}
function soma(a, b) {
    let resultado = a + b
    return resultado
    console.log("O resultado é:", resultado)
}

function multiplicacao(a, b) {
    let resultado = a * b
    return resultado
    console.log("O resultado é:", resultado)
}

function subtracao(a, b) {
    let resultado = a - b
    return resultado
    console.log("O resultado é:", resultado)
}
function soma(a, b) {
    let resultado = a + b
    return resultado
    console.log("O resultado é:", resultado)
}

function multiplicacao(a, b) {
    let resultado = a * b;
    return resultado
    console.log("O resultado é:", resultado)
}

function subtracao(a, b) {
    let resultado = a - b
    return resultado
    console.log("O resultado é:", resultado)
}

function divisao(a, b) {
    let resultado = a / b
    return resultado
    console.log("O resultado é:", resultado)
}

