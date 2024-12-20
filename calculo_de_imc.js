const peso = parseFloat(prompt(`Informe o seu peso em kg: `));
const altura = parseFloat(prompt(`Informe a sua altura em metros: `));

const imc = (peso / (altura ** 2));

console.log(`Seu IMC é: ${imc}`);