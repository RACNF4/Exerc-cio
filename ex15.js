let prompt = require("prompt-sync")();
let pos, res, record;

pos = parseInt(prompt("Digite uma posição "));
temp = parseFloat(prompt("Digite o tempo "));

if(temp<1.4){
    record = true;
}else{
    record = false;
}

switch(pos){
    case 1:
        switch(record){
            case true:
                res = "record mundial";
                break;
            case false:
                res ="se contente com a vitória, rapaz";
                break;
        };
    break;
    case 2:
        res = "segundo lugar";
        break;
    case 3:
        res = "terceiro lugar";
        break;
    default:
        res = "nao subiu ao podio"; 
    break;           
}

console.log(res)