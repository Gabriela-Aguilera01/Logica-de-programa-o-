1-
let idade = 55
let categoria;
const nome = &quot;Fernanda&quot;
if (idade &lt; 12) {
categoria = &quot;Criança&quot;
} else if (idade &gt;= 12 &amp;&amp; idade &lt;= 18) {
categoria = &quot;adolescente&quot;
} else if (idade &gt; 18 &amp;&amp; idade &lt; 60) {
categoria = &quot;adulto&quot;
} else {
categoria = &quot;idosa&quot;
}

console.log(&quot;Categoria: &quot; + categoria)
let resultado = idade + 5
console.log(&quot;Idade final: &quot; + resultado)

2-
let idade = 34
if (idade &lt; 16) {
console.log (&quot;Não Vota&quot;)
}
else if ((idade &gt;= 16 &amp;&amp; idade &lt; 18) || idade &gt;= 70) {
console.log (&quot;Voto facultativo&quot;)
} else {
console.log (&quot;Voto obrigatório&quot;)
}

3-
let numero = -5
if (numero &gt; 0) {
console.log(&quot;Positivo&quot;)
} else if (numero &lt; 0) {
console.log(&quot;Negativo&quot;)
} else {
console.log(&quot;Zero&quot;)
}

4-
let combustivel = &quot;Gasolina&quot;
if (combustivel === &quot;Gasolina&quot;) {
console.log(&quot;Você escolheu Gasolina&quot;)
} else if (combustivel === &quot;Álcool&quot;) {
console.log(&quot;Você escolheu Álcool&quot;)
} else if (combustivel === &quot;Diesel&quot;) {
console.log(&quot;Você escolheu Diesel&quot;)
}

5-
let velocidade = 13000

if (velocidade &lt;= 60) {
console.log(&quot;Dentro do limite&quot;)
}
else if (velocidade &lt;= 80) {
console.log(&quot;Atenção&quot;)
}
else {
console.log(&quot;Multado&quot;)
}