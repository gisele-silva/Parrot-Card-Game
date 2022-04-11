alert("A quantidade de cartas deve ser um número par entre 4 e 14")
quantidadeCartas = Number(prompt("Informe a quantidade de cartas"))

while (quantidadeCartas < 4 || quantidadeCartas === 5 || quantidadeCartas === 7 || quantidadeCartas === 9 || quantidadeCartas === 11 || quantidadeCartas >= 13) {
    alert("Quantidade inválida")
    quantidadeCartas = Number(prompt("Informe a quantidade de cartas"))
}
alert("Bem vindo")

if (quantidadeCartas === 4) {
    document.querySelector(".jogo4").classList.remove("apaga")
} else if (quantidadeCartas === 6) {
    document.querySelector(".jogo6").classList.remove("apaga")
} else if (quantidadeCartas === 8) {
    document.querySelector(".jogo8").classList.remove("apaga")
} else if (quantidadeCartas === 10) {
    document.querySelector(".jogo10").classList.remove("apaga")
} else if (quantidadeCartas === 12) {
    document.querySelector(".jogo12").classList.remove("apaga")
}