function adicionar(valor1, valor2) {
    return valor1 + valor2;
};

function subtracao(valor1, valor2) {
    return valor1 - valor2;
};

function multiplicacao(valor1, valor2) {
    return valor1 * valor2;
};

function divisao(valor1, valor2) {
    return valor1/valor2;
};

function quadradoDoNumero(valor1) {
    return multiplicacao(valor1, valor1);
};

function mediaDeTresNumeros(valor1, valor2, valor3) {
    const resultadoDaSoma = valor1 + valor2 + valor3;
    return divisao(resultadoDaSoma, 3);
};

function calculaPorcentagem(numero, porcentagem) {
    return `${divisao(multiplicacao(numero, porcentagem),100)}%`
}

function geradorDePorcentagem(valor1, valor2) {
    return `${divisao(multiplicacao(valor1, 100),valor2)}%`
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