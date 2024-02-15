import {obter_numero,print} from "./funcoes.mjs"

/*
20. Leia a medida de um ângulo (entre 0 e 360°)
 e escreva o quadrante (primeiro, segundo, terceiro ou
quarto) em que o ângulo se localiza.

*/ 
function quadrante(angulo){
    if(angulo>=0 && angulo<=360){
        if(angulo>=0 && angulo<=90){
            return 1;
        }
        else if(angulo>90 && angulo<=180){
            return 2;
        }
        else if(angulo>180 && angulo<=270){
            return 3;
        }
        else if(angulo>270 && angulo<=360){
            return 4;
        }

    }
}

function main(){
    // ENTRADA
    const angulo=obter_numero("Digite o angulo (0-360):")
    // PROCESSAMENTO
    const quadrante=calculaQuadrante(angulo);

    // SAIDA
    print(quadrante);
}
main()