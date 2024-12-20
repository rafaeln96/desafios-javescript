const primeiroNumero = parseFloat(prompt(`Informe o primeiro numero: `));
const segundoNumero = parseFloat(prompt(`Informe o segundo numero: `));
const terceiroNumero = parseFloat(prompt(`Informe o terceiro numero: `));

console.log() //qubera de linha

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
    console.log(`O primeiro numero é maior!`)
}
else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
    console.log(`O segundo numero é maior!`)
}
else if (terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero) {
    console.log(`O terceiro numero é maior!`)
}
else 
    console.log("Informe uma entrada valida!")