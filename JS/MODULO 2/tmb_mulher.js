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
    const tmb_mulher=Math.floor(447.6 + (9.2*peso) + (3.1*altura) - (4.3*idade));
    // SAIDA
    print(`o TMB corresponde a ${tmb_mulher}`)
}

main()