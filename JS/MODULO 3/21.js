import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
6. Leia uma velocidade em km/h,
 calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

*/ 
function calculaVelocidadeVm(velocidade_km_h){
    const velocidade=Number(velocidade_km_h)/3.6;
    return velocidade;
}
function main(){
    // ENTRADA
    const velocidade_km_h=obter_numero("digite a velocidade (km/h):")
    // PROCESSAMENTO
    const velocidade_vm_s=calculaVelocidadeVm(velocidade_km_h)
    console.log(`${velocidade_km_h} km/h corresponde a ${velocidade_vm_s}`)
}

main()