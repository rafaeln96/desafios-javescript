const numero = parseInt(prompt(`Informe um número inteiro: `));

console.log() //quebra de linha

if (numero >= 1 && numero % 2 == 0) {
    console.log(`Seu numero é positivo e par`);
} else if (numero >= 1 && numero % 2 == 1) {
    console.log(`Seu numero é positivo e impar`);
} else if (numero < 0 || numero == 0) {
    console.log(`Seu numero é negativo ou zero`);
} else 
    console.log(`Informe um valor válido!`);