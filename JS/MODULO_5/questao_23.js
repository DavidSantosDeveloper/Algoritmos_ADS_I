import {obter_numero,print} from "./funcoes.mjs";

/*
23. Leia 2 datas 
(cada data é composta por 3 variáveis inteiras: dia, mês e ano) 
e escreva qual delas é a mais
recente.

*/ 

function verificaDataRecente(dia_1,mes_1,ano_1,dia_2,mes_2,ano_2){
    if(ano_1>ano_2){
        return 1;
    }
    else if(ano_2>ano_1){
        return 2;
    }
    else if(ano_1==ano_2 && mes_1>mes_2){
        return 1;
    }
    else if(ano_1==ano_2 && mes_2>mes_1){
        return 2;
    }
    else if(ano_1==ano_2 && mes_1==mes_2 && dia_1>dia_2){
        return 1;
    }
    else if(ano_1==ano_2 && mes_1==mes_2 && dia_2>dia_1){
        return 2;
    }

}

function main(){
    // ENTRADA
    const dia_1=obter_numero("1 Dia:")
    const mes_1=obter_numero("1 mes:")
    const ano_1=obter_numero("1 ano:")
    const dia_2=obter_numero("2 Dia:")
    const mes_2=obter_numero("2 mes:")
    const ano_2=obter_numero("2 ano:")
    // PROCESSAMENTO
    const data_recente=verificaDataRecente(dia_1,mes_1,ano_1,dia_2,mes_2,ano_2);
    // SAIDA
    print(`a data mais recente eh: ${data_recente} data`)
}
main()