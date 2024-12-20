const numero = parseInt(prompt(`Informe um número: `));

console.log(); //Quebra de linha

for (let i = numero; i >= 1; i--) {
    let linha = "";

    for (let j = 1; j <= i; j++) {
        linha += j;
    }
    
    console.log(linha);
}

/* 
const numero = parseInt(prompt(`Informe um número: `));

console.log(); //Quebra de linha

let linha = "";

for (let j = 1; j <= numero; j++) {

    linha += j;
}
    
for (let j = 1; j <= numero; j++) {
    console.log(linha);
    linha = linha.slice(0, -1)
}
*/