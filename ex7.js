prompt=require('prompt-sync')();
let C;
let calc;

C=parseFloat(prompt("Digite uma temperatura em C°: "));

calc= (C *1.8)+32;

console.log("O valor em fahreinheits é: "+calc.toFixed(2)+"°F");