let caixas = [3,7, 5,2, 8];
let totalAnimais = 0;

for (let i = 0;i < caixas.length; i++) {
    totalAnimais = totalAnimais + caixas[i]
}

console.log('total animais: ', totalAnimais)

if (totalAnimais > 20){
    console.log("Estoque Cheio");
} else {
    console.log("Ainda cabe mais!!!!");
}