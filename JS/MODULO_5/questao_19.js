import {obter_numero,print} from "./funcoes.mjs"

/*
19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2

). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso

(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).


*/
function calculaImc(altura,peso){
    const imc=peso/((altura)**2)
    return imc;
}

function main(){
    // ENTRADA
    const altura=obter_numero("Digite a altura(m): ")
    const peso=obter_numero("Digite o peso(kg): ")

    // PROCESSAMENTO 
    const imc=calculaImc(altura,peso)

    // SAIDA
    if(imc<25){
        print("vc esta com o peso normal")
    }
    else if(imc>=25 && imc<30 ){
        print("obeso")
    }
    else if(imc>=30){
        print("obesidade morbida")
    }
}
main()