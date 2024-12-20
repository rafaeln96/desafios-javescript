const numero = parseInt(prompt(`Informe um número inteiro: `));
let ePrimo = true;
let numerosPrimos = [];

console.log(); // Quebra de linha

for (let i = 2; i < numero; i++) {
    ePrimo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            ePrimo = false; 
            break;
        }
    }

    if (ePrimo) {
        numerosPrimos.push(i);
    }
}

console.log(`Números primos até ${numero}: [${numerosPrimos.join(', ')}]`);