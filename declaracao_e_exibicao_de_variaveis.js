const nome = prompt(`Informe o seu nome: `);
const idade = parseInt(prompt(`Informe a sua idade: `));
const altura = parseFloat(prompt(`Informe sua altura em metros: `));
const peso = parseFloat(prompt(`Informe o seu peso em quilogramas: `));

anoNascimento = 2024 - idade; 

console.log(`Olá ${nome}, você nasceu em ${anoNascimento}. Sua altura é ${altura}m e seu peso é ${peso}kg`);