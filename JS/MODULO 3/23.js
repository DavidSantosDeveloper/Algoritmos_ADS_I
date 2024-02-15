import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
23. Leia um valor em kg (quilograma),
 calcule e escreva o equivalente em g (grama).
*/ 
function convertKgToG(massa_kg){
    const massa_g=massa_kg*1000;
    return massa_g;
}


function main(){
    // ENTRADA
    const massa_kg=obter_numero("Digite a massa(Kg): ")
    // PROCESSAMENTO
    const massa_g=convertKgToG(massa_kg);

    // SAIDA
    console.log(`${massa_kg}Kg equivale a ${massa_g}g`)
}

main()