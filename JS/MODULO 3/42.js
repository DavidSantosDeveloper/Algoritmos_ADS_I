import {question} from "readline-sync"
import {obter_numero,print} from "./funcoes.mjs"

/*
 42.Escreva um algoritmo que, tendo como dados de entrada 
2 pontos quaisquer no plano, ponto1 (x1,y1) e
ponto2 (x2,y2), escreva a distância entre eles, 
conforme fórmula abaixo.
*/ 

function calculaDistancia(x1,y1,x2,y2){
    const distancia=Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    return distancia;
}


function main(){
    // ENTRADA
    const x1=obter_numero("Digite o x1:");
    const y1=obter_numero("Digite o y1:");
    const x2=obter_numero("Digite o x2:");
    const y2=obter_numero("Digite o y2:");
    // PROCESSAMENTO
    const distancia=calculaDistancia(x1,y1,x2,y2);
    // SAIDA
    print(`Math.sqrt((${x2}-${x1})**2 + (${y2}-${y1})**2)
    \n = ${distancia}`);
}

main()