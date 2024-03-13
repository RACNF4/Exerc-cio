prompt=require('prompt-sync')();
let n1;
let calc;
const dolar = 4.97;

n1=parseFloat(prompt("Digite um valor em reais: "));

calc= n1/dolar;

console.log("O valor em doláres é: "+new Intl.NumberFormat('en-US').format(calc));