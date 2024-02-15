import { question } from "readline-sync";

function main() {
    cabecalho()

    //Entrada
    const idade = Number(question("Digite sua idade"))

    //Processamento

    /* faltou os parenteses e passar a variavel idade para as funcoes calcula_,
    pq a variavel idade que esta na funcao main nao pode ser acessada 
    por meio de uma outra funcao(no caso ,as calcula_*) que esteja externa a ela.

    -->eh pq funcoes calcula_* nao conseguem  enxegar 
      o que há dentro( variaveis) da funcao main 
      ou de outra qualquer funcao externa a ela. 

      #######obs:exite um caso em que elas conseguem enxegar,mas somente 
      quando uma funcao foi definida dentro de outra e entao 
      a funcao pai pode acessar o conteudo da filha e vice-versa


        -->Sendo assim,as funcoes calcular_* so enxegam as variaveis 
        que estao dentro delas 
       ---->Desse modo, eh preciso colocar o valor da idade ao chamar as
           funcoes calcula_* para que elas consigam ter acesso a esse valor


    
    */    

    const freque_moderada_min = calcula_freque_moderada_min(idade)
    const freque_moderada_max = calcula_freque_moderada_max(idade)
    const freque_intensa_min = calcula_freque_intensa_min(idade)
    const freque_intensa_max = calcula_freque_intensa_max(idade)

    //Saida
    console.log(`\nFrequencia cardiaca maxima ${calcula_freque_max(idade)}bpm\n`)
    console.log(`Frequencia cardiaca minima para atividade fisica moderada é de ${freque_moderada_min}bpm`)
    console.log(`Frequencia cardiaca maxima para atividade fisica moderada é de ${freque_moderada_max}bpm\n `)

    console.log(`Frequencia cardiaca minima para atividade fisica intensa é de ${freque_intensa_min}bpm`)
    console.log(`Frequencia cardiaca maxima para atividade fisica intensa é de ${freque_intensa_max}bpm`)

}


/*
 nas funcoes calcula_* so estava errado o nome da funcao 
 e faltando passar a idade para funcao calcula_freq_max() ter acesso a ela

*/

function calcula_freque_max(idade) {
    return 220 - idade
}

function calcula_freque_moderada_min(idade) {
    return 0.5 * calcula_freque_max(idade)
}

function calcula_freque_moderada_max(idade) {
    return 0.7 * calcula_freque_max(idade)
}

function calcula_freque_intensa_min(idade) {
    return 0.7 * calcula_freque_max(idade)

}

function calcula_freque_intensa_max(idade) {
    return 0.85 * calcula_freque_max(idade)
}

function cabecalho() {
    console.log(`#### Seu coração merece cuidado #### `)
}

function rodape() {
    console.log(`----Te orienta----`)
}
main()