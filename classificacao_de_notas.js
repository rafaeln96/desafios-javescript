const nota = parseFloat(prompt(`Informe uma nota de 0 a 100: `));

console.log()

if (nota > 100) {
    console.log("Informe um intervalo de 0 a 100");
} else if (nota >= 90) {
    console.log(`Excelente!`);
} else if (nota >= 70) {
    console.log(`Bom!`);
} else if (nota >= 50) {
    console.log(`Regular!`);
} else if (nota < 50) {
    console.log(`Insuficiente!`);
} else 
    console.log(`Informe um número válido`);