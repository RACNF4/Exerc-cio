prompt=require('prompt-sync')();
let fh;
let calc;

fh=parseFloat(prompt("Digite uma temperatura em F°: "));

calc= (fh -32)/1.8;

console.log("O valor em celcius é: "+calc.toFixed(2)+"°C");