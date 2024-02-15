import {question} from "readline-sync"
import {obter_numero,print} from "./funcoes.mjs"

/*
36. Leia a idade de uma pessoa expressa em anos,
 meses e dias e escreva-a expressa apenas em dias.
*/ 
function calculaDias(numero){
    const anos=numero*365;
    return anos;
}


function main(){
    // ENTRADA
    const numero=obter_numero("Digite a idade(em anos): ");
    // PROCESSAMENTO
    const dias=calculaDias(numero);
    // SAIDA
    print(`${numero}anos equivale a ${dias} dias`)
}

main()