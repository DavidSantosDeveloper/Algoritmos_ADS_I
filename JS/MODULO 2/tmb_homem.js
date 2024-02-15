import {obterNumero,obterTexto,print} from "./funcoes.mjs";

/*
Metabolismo basal ou Taxa metabólica basal é um método matemático,
 inexato, de calcular a quantidade calórica que o corpo necessita,
  em vinte e quatro horas,
 para manter-se nutrido durante as atividades do dia.


*/

function main(){

    // ENTRADA
    const peso=obterNumero("Digite seu peso (Kg): ");
    const altura=obterNumero("Digite sua altura (cm): ");
    const idade=obterNumero("Digite sua idade (anos): ");
    const genero=obterTexto("Digite seu genero (H -homem , M -mulher )");

    // PROCESSAMENTO
    const tmb_homem=Math.floor((88.36) + (13.4*peso) + (4.8*altura) - (5.7*idade));
    // SAIDA
    print(`o TMB corresponde a ${tmb_homem}`)
}

main()