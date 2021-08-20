const inputNome = document.querySelector('#nome');
const inputIdade = document.querySelector('#idade');
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
let resultadoIMC = '';

let sectionResult = document.querySelector('.resultado');

function calcularIMC() {
    resultadoIMC = Math.round(inputPeso.value / (inputAltura.value * inputAltura.value));
};

function informarResultadoIMC() {
    calcularIMC();
    sectionResult.innerHTML = `<p> O resultado do seu IMC é: <strong>${resultadoIMC}</strong>, confira na tabela abaixo em que nível seu IMC se encontra.</>`
}