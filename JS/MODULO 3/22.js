import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
21. Leia uma temperatura em °F,
 calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).
*/ 
function convertFaheinheitToCelsius(temperatura_f){
    const temperatura_c=(5*temperatura_f-160)/9;
    return temperatura_c;
}


function main(){
    // ENTRADA
    const temperatura_f=obter_numero("Digite a temperatura (F): ")
    // PROCESSAMENTO
    const temperatura_c=convertFaheinheitToCelsius()

    // SAIDA
    console.log(`${temperatura_f} F equivale a ${temperatura_c} C`)
}

main()