import {obterNumero,print} from "./funcoes.mjs";

function calculaPesoReducao(peso,porcentagem){
    const peso_reduzido=peso*(porcentagem/100)
    return peso_reduzido;
}
function calculaDefictDiario(peso_reduzido,semanas){
    const deficit_diario=(peso_reduzido*7700)/(semanas*7);
    return deficit_diario;
}
function calculaQuantidadeSessoes(deficit_diario,kcal_sessao){
    const quantidade_sessoes=deficit_diario/kcal_sessao;
    return quantidade_sessoes;
}


function main(){
    // ENTRADA
    const peso=obterNumero("Digite seu peso (kg): ");
    const porcentagem_peso=obterNumero("Digite a porcentagem do peso a ser perdida:");
    const semanas=obterNumero("Digite o numero de semana(s): ");
    const kcal_consumidas_diariamente=obterNumero("Digite o numero de calorias(kcal) ingeridas diariamete:");
    const kcal_sessao=obterNumero("Digite o numero de calorias (kcal) gastas por sessao de exercicio:")
    // PROCESSAMENTO
    const deficit_diario=calculaDefictDiario(peso,semanas);
    const qtd_sessoes=calculaQuantidadeSessoes(deficit_diario,kcal_sessao)
    // SAIDA
    print(`--------------REDUCAO PESO----------------------
        \n  calorias perdidas por dia: ${deficit_diario} kcal/d
        \n  sessoes: ${qtd_sessoes} sessao(oes) 
        `)
