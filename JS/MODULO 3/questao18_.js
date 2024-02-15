import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
18. Leia o valor do raio de uma circunferência, 
calcule e escreva seu comprimento.(c = 2 * p * r)
*/ 
function calculaComprimentoCircuferencia(raio){
    const comprimento=2*3.14*raio;
    return comprimento;
}
function main(){
    // ENTRADA
    const raio=obter_numero("digite o valor do raio (cm): ")
    // PROCESSAMENTO
    const area_triangulo=calculaComprimentoCircuferencia(raio);
    // SAIDA
    console.log(`Uma circuferencia de raio ${raio} cm tem ${calculaComprimentoCircuferencia(raio)}  `)
}

main()