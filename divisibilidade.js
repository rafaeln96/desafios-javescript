const numero = parseFloat(prompt(`Informe um número: `));

console.log() //Quebra de linha

if (numero % 2 == 0 && numero % 3 == 0) {
    console.log(`O numero é divisivel por 2 e 3`)
}
else if (numero % 2 == 0) {
    console.log(`O numero é divisivel apenas por 2`)
}
else if (numero % 3 == 0) {
    console.log(`O numero é divisivel apenas por 3`)
}
else 
    console.log(`O numero não é divisivel por 2 nem 3`)