prompt=require('prompt-sync')()
let n1, n2, n3
let media

n1=parseInt(prompt("Digite uma nota: "));
n2=parseInt(prompt("Digite uma nota: "));
n3=parseInt(prompt("Digite uma nota: "));

media=(n1+n2+n3)/3

if(media >= 7){
    console.log("ALUNO APROVADO");
}else if(media>=5){
    console.log("ALUNO EM RECUPERAÇÃO");
}else{
    console.log("ALUNO REPROVADO");
}

