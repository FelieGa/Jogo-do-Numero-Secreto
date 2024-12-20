// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Numero Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'escolha um numero entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
        campo.innerHTML = texto;

        if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR';
            utterance.rate = 1.2;
            window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }

            // if ('speechSynthesis' in window) {
            //     let utterance = new SpeechSynthesisUtterance(texto);
            //     utterance.lang = 'pt-BR'; 
            //     utterance.rate = 1.3; 
            //     window.speechSynthesis.speak(utterance); 
            // } else {
            //     console.log("Web Speech API não suportada neste navegador.");
            // }
        

}
function exibirMensageminicial() {
    exibirTextoNaTela('h1', 'Space Rescue');
exibirTextoNaTela('p', 'Descubra o codigo entre 1 e 100, para ajudar a astronauta sair da nave!');
}

exibirMensageminicial();

// no lugar no name vamos adicionar um nome para a função
// function name(){}



function verificarChute(){
    let chute = document.querySelector('input').value;

   
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o código com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
                exibirTextoNaTela('p', 'O código é Menor');
        } else{
                exibirTextoNaTela('p', 'O código é Maior');
        }
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}   
function reiniciarJogo() {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensageminicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}