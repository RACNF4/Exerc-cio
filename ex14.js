const prompt = require('prompt-sync')();

let n1,n2,n3, maior;
let numbers = [];

n1 = parseFloat(prompt("Digite um número: "));
n2 = parseFloat(prompt("Digite um número: "));
n3 = parseFloat(prompt("Digite um número: "));

numbers.push(n1,n2,n3);

numbers.sort();
numbers.reverse();

maior = numbers[0];

console.log("O maior número é:",maior);