const numero = parseInt(prompt(`Informe um número inteiro: `))
let total = 1
let sequencia = "";

console.log(); //Quebra de linha

for (let i = numero; i >= 1; i--) {
    total = total * i;
    sequencia += i;
    
    if (i > 1) {
        sequencia += " x ";
    }
}

console.log(`Fatorial: ${sequencia}`);

console.log(`Resultado: ${total}`);