import {obter_numero,print} from "./funcoes.mjs";

/*
28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano,
 que corresponderão a dois cantos de
um retângulo.
 Baseado nisto, calcule e escreva a área deste retângulo.
  Lembre-se de que o valor da área
não pode ser negativo.

*/ 

function main(){
    // ENTRADA
    const x1=obter_numero("x1: ")
    const y1=obter_numero("y1: ")
    const x2=obter_numero("x2: ")
    const y2=obter_numero("y2: ")
    // PROCESSAMENTO
    const area=calculaArea(x1,y1,x2,y2);

    // SAIDA
    print(area)
}
main()