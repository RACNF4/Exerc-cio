prompt=require('prompt-sync')()
let n1;

n1=parseInt(prompt("Digite um número: "));

rest = n1 % 2;

if(rest == 0){
    console.log("Você digitou um número par");
}else{
    console.log("Você digitou um número ímpar");
}


