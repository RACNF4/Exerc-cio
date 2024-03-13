prompt=require('prompt-sync')();
let n1,perCent;


n1 = parseFloat(prompt("Informe o valor do salario: "));
perCent = parseFloat(prompt("Informe o valor do reajuste em %: "));

perCent = perCent/100;

valReaj = n1*perCent;
valFinal = n1 + valReaj;

console.log("O reajuste foi de R$", valReaj.toFixed(2), "e o valor final do salario foi de R$",valFinal.toFixed(2));