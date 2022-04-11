alert("Para jogar Parrot você deve informar um quantidade par de cartas entre 4 e 14")
quantidadeCartas = Number(prompt("Informe a quantidade de cartas"))

while (quantidadeCartas < 4 || quantidadeCartas % 2 !== 0 || quantidadeCartas >= 14) {
    alert("Quantidade inválida")
    quantidadeCartas = Number(prompt("Informe a quantidade de cartas"))
}
alert("Bem vindo ao Parrot Card Game")

if (quantidadeCartas === 4) {
    document.querySelector(".jogo4").classList.remove("apaga")
    const cartas = document.querySelector(".jogo4");
    const imagem = [
        'bobrossparrot.gif',
        'explodyparrot.gif'
    ];
    let cartaHTML = '';
    imagem.forEach(imagens =>{
        cartaHTML += `
        <div> 
            <img src="img/${imagens}">
            
        </div>
        `
    })  

} else if (quantidadeCartas === 6) {
    document.querySelector(".jogo6").classList.remove("apaga")
    const cartas = document.querySelector(".jogo6");
    const imagem = [
        'bobrossparrot.gif',
        'explodyparrot.gif',
        'fiestaparrot.gif'
    ];
    let cartaHTML = '';
    imagem.forEach(imagens =>{
        cartaHTML += `
        <div> 
            <img src="img/${imagens}">
            
        </div>
        `;
    });
    
    
} else if (quantidadeCartas === 8) {
    document.querySelector(".jogo8").classList.remove("apaga");
    const cartas = document.querySelector(".jogo8");
    const imagem = [
        'bobrossparrot.gif',
        'explodyparrot.gif',
        'fiestaparrot.gif',
        'metalparrot.gif'
    ];
    let cartaHTML = '';
    imagem.forEach(imagens =>{
        cartaHTML += `
        <div> 
            <img src="img/${imagens}">
            
        </div>
        `
    })  
} else if (quantidadeCartas === 10) {
    document.querySelector(".jogo10").classList.remove("apaga")
    const cartas = document.querySelector(".jogo10");
    const imagem = [
        'bobrossparrot.gif',
        'explodyparrot.gif',
        'fiestaparrot.gif',
        'metalparrot.gif',
        'revertitparrot.gif'
    ];
    let cartaHTML = '';
    imagem.forEach(imagens =>{
        cartaHTML += `
        <div> 
            <img src="img/${imagens}">
            
        </div>
        `
    })  
} else if (quantidadeCartas === 12) {
    document.querySelector(".jogo12").classList.remove("apaga")
    const cartas = document.querySelector(".jogo12");
    const imagem = [
        'bobrossparrot.gif',
        'explodyparrot.gif',
        'fiestaparrot.gif',
        'metalparrot.gif',
        'revertitparrot.gif',
        'tripletsparrot.gif'
    ];
    let cartaHTML = '';
    imagem.forEach(imagens =>{
        cartaHTML += `
        <div> 
            <img src="img/${imagens}">
            
        </div>
        `
    })  
}

