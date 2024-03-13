prompt=require('prompt-sync')();
let n1

n1=prompt("Digite um número: ")
if(n1>0){
    console.log("Você digitou um número positivo")
}else if(n1<0){
    console.log("Você digitou um número negativo")
}
