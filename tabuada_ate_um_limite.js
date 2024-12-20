const numeroInicial = parseInt(prompt(`Informe um número inicial: `));
const numeroLimite = parseInt(prompt(`Informe um número final: `));
let resultado = 0;

console.log() //Quebra de linha

for (let i = 1; i <= numeroLimite; i++) {
    let resultado = numeroInicial * i
    console.log(`${numeroInicial} x ${i} : ${resultado}`);
}