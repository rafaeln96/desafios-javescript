const idade = parseInt(prompt(`informe sua idade: `));
const altura = parseFloat(prompt(`Informe sua altura: `));

const idadeFloat = parseFloat(idade);
const alturaInt = parseInt(altura);

console.log(); //quebra de  linha
console.log(`Sua idade em float é ${idade.toFixed(1)} e sua altura em inteiro é ${alturaInt}`);