prompt=require('prompt-sync')();
let n1;
reajuste = 0.3333;

n1 = parseFloat(prompt("Informe o valor do produto: "));

valReaj = n1*reajuste;
valFinal = n1 + valReaj;

console.log("O reajuste foi de R$", valReaj.toFixed(2), "e o valor final do produto foi de R$",valFinal.toFixed(2));