function adicionar(numero1, numero2) {
    return numero1 + numero2;
};

function subtracao(numero1, numero2) {
    return numero1 - numero2;
};

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
};

function divisao(numero1, numero2) {
    return numero1/numero2;
};

function quadradoDoNumero(numero1) {
    return multiplicacao(numero1, numero1);
};

function mediaDeTresNumeros(numero1, numero2, numero3) {
    const resultadoDaSoma = numero1 + numero2 + numero3;
    return divisao(resultadoDaSoma, 3);
};

function calculaPorcentagem(numero, porcentagem) {
    return `${divisao(multiplicacao(numero, porcentagem),100)}%`
}

function geradorDePorcentagem(numero1, numero2) {
    return `${divisao(multiplicacao(numero1, 100),numero2)}%`
}

console.log("-------------- Teste de Operações / Calculadora --------------");

console.log(`A soma entre 1 e 2 é: ${adicionar(1,2)}`);

console.log(`A subtração entre 1 e 2 é: ${subtracao(1,2)}`);

console.log(`A multiplicação entre 1 e 2 é: ${multiplicacao(1,2)}`);

console.log(`A divisão entre 1 e 2 é: ${divisao(1,2)}`);

console.log(`A divisão entre 0 e 2 é: ${divisao(0,2)}`);

console.log(`2 ao quadrado é: ${quadradoDoNumero(2)}`);

console.log(`A média entre 1 e 2 e 3 é: ${mediaDeTresNumeros(1,2,3)}`);

console.log(`15% de 300 é: ${calculaPorcentagem(300, 15)}`);

console.log(`2 é ${geradorDePorcentagem(2,200)} de 200`);