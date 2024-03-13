// ALERT

alert("Hello World!");


// const nome = document.getElementById("nome").value;
// alert(nome);
// console.log(nome);

// PROMPT

// const email = prompt("Digite seu email");

// // CONFIRM

// const result = confirm("Deseja excluir o comentário?");
// console.log(result);


let soma = 2 + 2

console.log("O valor da soma é " + soma);

alert("O valor da soma é " + soma)

// BOTAO NOME COMPLETO

function exibirNome() {
    var nomeCompleto = document.getElementById('nome').value;
    if(nomeCompleto.trim() === '') {
        alert("Por favor, digite seu nome completo.");
    } else {
        var quantidadeLetras = nomeCompleto.length;
        alert("O Nome Completo é: \"" + nomeCompleto + "\".\nQuantidade de letras: " + quantidadeLetras);
    }
}

// LÂMPADA

function ligarDesliga(){

    var imagem = document.getElementById('lamp').src;
    var imagem_ligado = 'https://www.w3schools.com/js/pic_bulbon.gif';
    var imagem_desligado = 'https://www.w3schools.com/js/pic_bulboff.gif';
    
    if(imagem == imagem_ligado){
    	document.getElementById('lamp').src = imagem_desligado;
    }else{
    	document.getElementById('lamp').src = imagem_ligado;
    }
}
document.getElementById("lamp").addEventListener("click", ligarDesliga);

// MOUSEOVER

function trocarImagem(){
    document.getElementById("lampada").src = "https://www.w3schools.com/js/pic_bulbon.gif";
}

function retornarImagem(){
    document.getElementById("lampada").src = "https://www.w3schools.com/js/pic_bulboff.gif";
}

// EXIBIR SAUDACAO

function exibirSaudacao(){
    var nome7 = document.getElementById("nome7").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var saudacao = "Olá " + nome7 + " " + sobrenome;
    alert(saudacao);
}

// CPF

function formatarCPF(){
    var cpfInput = document.getElementById("cpf").value.replace(/\D/g, ''); // Remove qualquer caractere que não seja um dígito
    var cpfFormatado = '';

    if (cpfInput.length <= 3) {
        cpfFormatado = cpfInput;
    } else if (cpfInput.length <= 6) {
        cpfFormatado = cpfInput.substring(0, 3) + '.' + cpfInput.substring(3);
    } else if (cpfInput.length <= 9) {
        cpfFormatado = cpfInput.substring(0, 3) + '.' + cpfInput.substring(3, 6) + '.' + cpfInput.substring(6);
    } else {
        cpfFormatado = cpfInput.substring(0, 3) + '.' + cpfInput.substring(3, 6) + '.' + cpfInput.substring(6, 9) + '-' + cpfInput.substring(9);
    }

    document.getElementById("cpfFormatado").textContent = cpfFormatado;
}

// CPF COM PONTUAÇÃO

function atualizarCPF(){
    var cpfComPontuacao = document.getElementById("cpfPoint").value;
    var cpfSemPontuacao = cpfComPontuacao.replace(/\D/g, '');
    document.getElementById("cpfNoPoint").value = cpfSemPontuacao;
}

// BOTAO

function alterarCor(cor){
    document.getElementById("elemento").style.backgroundColor = cor;
}