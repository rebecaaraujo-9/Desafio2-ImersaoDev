//Desafio 2: Paulo quer a quantidade de tentativas. 
//Guilherme quer que seja restringido o número, entre 1 e 1000 ao invés de 0 e 1000. 
//Rafaela quer a quantidade máxima de tentativas.

var numeroSecreto = parseInt(Math.random () * (101 - 1) + 1)
var iterador = 6

var jogar = prompt('Quer jogar? s/n')

if (jogar == 's' || jogarDeNovo == 's') {
    while (iterador > 0) {
         var chute = prompt('Digite um número de 1 a 100.')
        if (chute == numeroSecreto) {
            alert('Acertou!')
        var jogarDeNovo = prompt('Deseja jogar novamente? s/n')
        } else if (chute > numeroSecreto) {
            alert(`Errou... O número secreto é menor que ${chute}. Você tem ${iterador -1} chances.`)
        } else if (chute < numeroSecreto) {
            alert(`Errou... O número secreto é maior que ${chute}. Você tem ${iterador -1} chances.`)
        }
        iterador -= 1
        }

if (chute != numeroSecreto && iterador <= 0) {
    alert(`Você esgotou suas chances. O número secreto era ${numeroSecreto}. Boa sorte na próxima vez.`)
}
}

//Vamos quebrar a expressão: Math.random(): 1- Gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo). |2- Multiplicação por (1001 - 1): Isso amplia a faixa aleatória. (1001 - 1) é igual a 1000, então a expressão se torna equivalente a Math.random() * 1000, o que significa que o número aleatório gerado estará entre 0 (inclusive) e 1000 (exclusivo).  |3- Adição de 1: Adiciona 1 ao resultado da multiplicação. Agora a faixa é de 1 a 1001 (inclusive).  |4-parseInt(): Converte o resultado para um número inteiro. O parseInt() trunca qualquer parte decimal, deixando apenas a parte inteira do número.  |Em resumo, a expressão (1001 - 1) + 1 é usada para definir a faixa de números possíveis para o resultado do Math.random(). A adição de 1 garante que o número mínimo seja 1, e a subtração por 1 na expressão (1001 - 1) garante que o número máximo seja 1000. Portanto, o resultado final é um número inteiro aleatório entre 1 e 1000 (inclusive).


//Isso é uma forma abreviada de incrementar o valor da variável iterador em 1. A expressão iterador += 1 é equivalente a iterador = iterador + 1. Em outras palavras, você está adicionando 1 ao valor atual de iterador e, em seguida, atribuindo esse novo valor de volta à variável iterador.