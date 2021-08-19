let nomeUsuario = '';
let qtdDolares = 0;
let resultadoCotacao = 0;
const cotacaoDolarAtual = 5.30;

function perguntarNome() {
    nomeUsuario = prompt('Informe o seu nome.');
}

function perguntarQtdDolares() {
    const value = prompt('Informe quantos dolares deseja cotar.');
    const confirmarValor = confirm(`A quantidade de dolares informado é: ${value}, clique em "OK" para proseguir ou "cancel" para digitar novamente.`)
    confirmarValor ? qtdDolares = value : perguntarQtdDolares();
}

function calcularCotacao() {
    resultadoCotacao = qtdDolares * cotacaoDolarAtual;
}

function mostrarMensagem() {
    alert(`Olá ${nomeUsuario} ,US$ ${qtdDolares} valem R$ ${resultadoCotacao} hoje.`)
}

function redirecionarParaPaginaCotacao() {
    setTimeout(function() {
        window.location.href = "https://www.cotacao.com.br/";
    }, 5000);
}

function executarSistema() {
    perguntarNome();
    perguntarQtdDolares();
    calcularCotacao();
    mostrarMensagem();
    redirecionarParaPaginaCotacao();
}

executarSistema();