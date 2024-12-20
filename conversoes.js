const altura = parseFloat(prompt(`Informe sua altura em metros: `));
const idade = parseInt(prompt(`Informe sua idade: `));

const converterAltura = 100 * altura;
const converterIdade = idade * 12;

console.log(`Sua altura em centimetros é: ${converterAltura}cm e sua idade em meses é: ${converterIdade} meses`);