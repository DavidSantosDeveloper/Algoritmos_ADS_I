import { obter_numero, print } from "./funcoes.mjs";

/*
10. Leia uma data (dia, mês e ano),
 verifique e escreva se a data é ou não válida.

*/

function verificaValidadeData(dia, mes, ano) {
    const compara_dia = dia >= 0 && dia <= 31;
    const compara_mes = mes >= 0 && mes <= 31;
    const compara_ano = ano >= 0 && ano <= 31;
    if (compara_dia && compara_mes && compara_ano) {
        return true;

    } else {
        return false;
    }
}

function main() {
    // ENTRADA
    const dia = obter_numero("Digite o dia(dd): ")
    const mes = obter_numero("Digite o mes(mm): ")
    const ano = obter_numero("Digite o ano(aaaa)")
        // PROCESSAMENTO
    const validade_data = verificaValidadeData(dia, mes, ano);

    // SAIDA
    if (validade_data) {
        print(`data valida (^-^)!!!`)
    } else {
        print("a data nao eh valida!!!")
    }

}
main()