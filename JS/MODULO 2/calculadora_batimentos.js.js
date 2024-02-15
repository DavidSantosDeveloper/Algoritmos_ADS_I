import { question } from "readline-sync";

function cabecalho() {
    console.log(`------------------------------------------------
                \n >>>>CALCULADORA DE BATIMENTOS CARDIACOS<<<<<
                \n --------------------------------------------`)
}

function rodape() {
    console.log(`------------------------------------------------
    \n >>>> CUIDE DE SUA SAUDE!!!<<<<<
    \n --------------------------------------------`)
}

function entrada_idade(mensagem) {
    return Number(question(mensagem));
}

function calcular_atividade_moderada(idade, freq_max) {
    console.log(`
    \n-------------------------------------------------------------\n
        FREQUENCIA CARDIACA PARA ATIVIDADES FISICAS MODERADAS
        (peso referencia: ${idade} anos)
    \n--------------------------------------------------------------
    \n de ${(freq_max*0.5).toFixed(1)}bpm ate ${(freq_max*0.7).toFixed(1)} bpm
    \n \n\n
    
    `)
}

function calcular_atividade_intensa(idade, freq_max) {
    console.log(`
    \n-------------------------------------------------------------\n
        FREQUENCIA CARDIACA PARA ATIVIDADES FISICAS INTENSAS
        (peso referencia: ${idade} anos)
    \n--------------------------------------------------------------
    \n de ${(freq_max*0.7).toFixed(1)}bpm ate ${(freq_max*0.85).toFixed(1)} bpm
    \n \n\n
    
    `)
}


function main() {
    cabecalho()
        // ENTRADA
    const idade = entrada_idade("Digite sua idade: ");
    // PROCESSAMENTO
    const freq_max = 220 - idade;
    calcular_atividade_moderada(idade, freq_max);
    calcular_atividade_intensa(idade, freq_max);
    // SAIDA
    rodape();


}


main()