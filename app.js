//let titulo = document.querySelector("h1");
    //titulo.innerHTML = "JOGO DO PINGUIM SECRETO";

//let paragrafo = document.querySelector("p");
    //paragrafo.innerHTML = "Escolha um número de 1 a 100";

let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

    function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
            campo.innerHTML = texto
            responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
    }

    function exibirMensagemInicial(){
        exibirTextoNaTela("h1","JOGO DO NÚMERO SECRETO");
        exibirTextoNaTela("p","Escolha um número de 1 a 100");
    }

    exibirMensagemInicial();
        function verificarChute(){
        let chute = document.querySelector("input").value;
        if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? `COM APENAS ${tentativas} TENTATIVAS!` : "DE PRIMEIRA!";
                let mensagemTentativas = `VOCÊ ACERTOU ${palavraTentativa}`;
                document.getElementById("reiniciar").removeAttribute("disabled");
                exibirTextoNaTela("h1", mensagemTentativas);
                exibirTextoNaTela("p", `O número secreto era ${numeroSecreto}!`)
            } else {
                if (chute > numeroSecreto) {
                exibirTextoNaTela("p", `O número secreto é menor que ${chute}`);
                } else {
                exibirTextoNaTela("p",`O número secreto é maior que ${chute}`);
                }
         } 
         //tentativas = tentativa + 1;
                    tentativas++;
        limparCampo();
        }
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
    
}
    function reiniciarTudo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        exibirMensagemInicial();
        tentativas = 1;
        document.getElementById("reiniciar").setAttribute("disabled", true);

    }
