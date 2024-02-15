import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
25. Leia um número inteiro de metros, 
calcule e escreva quantos Km e quantos metros ele corresponde.
*/ 
function convertMetrosToCm(massa_kg){
    const massa_g=massa_kg*1000;
    return massa_g;
}


function main(){
    // ENTRADA
    const distancia_m=obter_numero("Digite a massa(Kg): ")
    // PROCESSAMENTO
    const distancia_cm=convertMetrosToCm(distancia_m);

    // SAIDA
    console.log(`${distancia_m}m equivale a ${distancia_cm}cm`)
}

main()