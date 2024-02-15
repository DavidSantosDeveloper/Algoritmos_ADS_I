import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
    9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
*/ 
function print_inverso(itemA,itemB){
  console.log(`${itemB} \n${itemA}`);
}
function main(){
    // ENTRADA
    const numeroA=obter_numero("digite o numero A:")
    const numeroB=obter_numero("digite o numero B:")
    // PROCESSAMENTO
   
    // SAIDA
    print_inverso(numeroA,numeroB);
}

main()