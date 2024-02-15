import {obterNumero,print} from "./funcoes.mjs"

function calculaTempo(distancia,velocidade){
    const tempo=(distancia/(velocidade*1000))*60
    return tempo;
}

function main(){
    // ENTRADA
    const distancia=obterNumero("Digite a distancia(m): ");
    const velocidade=obterNumero("Digite a velocidade(km/h): ");

    // PROCESSAMENTO
    const resultado=calculaTempo(distancia,velocidade);

    // SAIDA
    print(`  ${resultado}`)
}
main()