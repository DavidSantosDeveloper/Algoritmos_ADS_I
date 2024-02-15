import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
15. Leia o valor da base e altura de um triângulo, 
calcule e escreva sua área. (área=(base * altura)/2)
*/ 
function calculaAreaTriangulo(base,altura){
    const area=(base*altura)/2;
    return area;
}
function main(){
    // ENTRADA
    const base=obter_numero("digite a base: ")
    const altura=obter_numero("digite a altura: ")
    // PROCESSAMENTO
    const area_triangulo=calculaAreaTriangulo(base,altura);
    // SAIDA
    console.log(` Base: ${base} Altura:${altura} corresponde a ${area_triangulo}`)
    
}

main()