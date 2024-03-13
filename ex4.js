prompt=require('prompt-sync')();
let n1;
reajuste = 0.01;

n1 = parseFloat(prompt("Informe o valor do salário: "));

valReaj = (n1*reajuste);
valFinal = n1 + valReaj;

console.log("O reajuste foi de", Intl.NumberFormat('pt-BR').format(valReaj), "e o valor final do salário foi de",Intl.NumberFormat('pt-BR').format(valFinal));