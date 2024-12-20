const numeroInicial = parseInt(prompt(`Informe um número inicial: `));
const numeroFinal = parseInt(prompt(`Informe um número final: `));
let numeroImpares = [];
let somaImpares = 0;

console.log(); //Quebra de linha

if (numeroInicial >= numeroFinal) {
    console.log(`Informe um número inicial maior que o final`)
} else {
    for (let i = numeroInicial; i <= numeroFinal; i++) {
        if (i % 2 == 1) {
            numeroImpares.push(i);
            somaImpares = somaImpares + i;
        }
    }

    console.log(`Os numeros impares são: [${numeroImpares.join(`, `)}]`);

    console.log(`A soma dos números impares do intervalo é: ${somaImpares}`);
}