prompt=require('prompt-sync')();
let n1;
let calc;
const dolar = 4.97;

n1=parseFloat(prompt("Digite um valor em dólar: "));

calc= n1 * dolar;

console.log("O valor em reais é: "+Intl.NumberFormat('pt-BR').format(calc));