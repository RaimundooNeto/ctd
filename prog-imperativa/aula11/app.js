const maximo = 5;

for (let i = 0; i <= maximo; i++) {
    console.log('valor inicial: ', i)
}

let inicio = 0;
while (inicio <= maximo) {
    console.log('loop-while', inicio);
    inicio++;
}

let inicioDoWhile = 0;
do {
    console.log(`executou ${inicioDoWhile + 1}X`);
    inicioDoWhile++;
} while(inicioDoWhile <= maximo)