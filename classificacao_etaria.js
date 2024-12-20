const idade = parseInt(prompt(`Informe sua idade: `));

console.log() //quebra de linha

if (idade >= 60) {
    console.log("Você é um idoso!");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto!");
} else if (idade >= 13 && idade < 18) {
    console.log("Você é um adolescente!");
} else if (idade < 13) {
    console.log("Você é uma criança!");
} else 
    console.log("informe um valor valido")