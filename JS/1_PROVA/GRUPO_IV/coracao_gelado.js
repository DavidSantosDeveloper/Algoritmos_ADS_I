import { question } from "readline-sync"

function main() {
    // ENTRADA
    const nome = question("Digite seu nome: ")
    const idade = Number(question("Digite sua idade (anos):"))

    //PROCESSAMENTO
    const frequecia_cardica_maxima = calculaFrequenciaCardiacaMaxima(idade);

    const frequencia_minima_muito_leve = calculaFrequeciaMinimaCategoriaMuitoLeve(frequecia_cardica_maxima);
    const frequencia_maxima_muito_leve = calculaFrequeciaMaximaCategoriaMuitoLeve(frequecia_cardica_maxima);
    const frequencia_minima_leve = calculaFrequeciaMinimaCategoriaLeve(frequecia_cardica_maxima);
    const frequencia_maxima_leve = calculaFrequeciaMaximaCategoriaLeve(frequecia_cardica_maxima);
    const frequencia_minima_moderada = calculaFrequeciaMinimaCategoriaModerada(frequecia_cardica_maxima);
    const frequencia_maxima_moderada = calculaFrequeciaMaximaCategoriaModerada(frequecia_cardica_maxima);
    const frequencia_minima_dificil = calculaFrequeciaMinimaCategoriaDificil(frequecia_cardica_maxima);
    const frequencia_maxima_dificil = calculaFrequeciaMaximaCategoriaDificil(frequecia_cardica_maxima);
    const frequencia_minima_maxima = calculaFrequeciaMinimaCategoriaMaxima(frequecia_cardica_maxima);
    const frequencia_maxima_maxima = calculaFrequeciaMaximaCategoriaMaxima(frequecia_cardica_maxima);
    // SAIDA
    console.log("------------------------>>>>>>>TABELA DE BPM DE ACORDO COM A ATIVIDADE FISICA<<<<<<<--------------")
    console.log(`@ MUITO LEVE (50%-60%)`)
    console.log(`->Frequencia minima: ${frequencia_minima_muito_leve} bpm`)
    console.log(`->Frequencia maxima: ${frequencia_maxima_muito_leve} bpm`)
    console.log(`@  LEVE (60%-70%)`)
    console.log(`->Frequencia minima: ${frequencia_minima_leve} bpm`)
    console.log(`->Frequencia maxima: ${frequencia_maxima_leve} bpm`)
    console.log(`@ MODERADA (70%-80%)`)
    console.log(`->Frequencia minima: ${frequencia_minima_moderada} bpm`)
    console.log(`->Frequencia maxima: ${frequencia_maxima_moderada} bpm`)
    console.log(`@ DIFICIL (80%-90%)`)
    console.log(`->Frequencia minima: ${frequencia_minima_dificil} bpm`)
    console.log(`->Frequencia maxima: ${frequencia_maxima_dificil} bpm`)
    console.log(`@ MAXIMA (90%-100%)`)
    console.log(`->Frequencia minima: ${frequencia_minima_maxima} bpm`)
    console.log(`->Frequencia maxima: ${frequencia_maxima_maxima} bpm`)

    console.log(`\n \n`)
    const minutos_exercicio = Number(question("Digite o tempo(minutos) para o exercicio"))
    const tempo_moderada = calculaTempoModerada(minutos_exercicio);
    const tempo_leve = calculaTempoLeve(minutos_exercicio);
    const tempo_dificil = calculaTempoDificil(minutos_exercicio);
    const tempo_muito_leve = calculaTempoMuitoLeve(minutos_exercicio)
    console.log(`@ MODERADA:\n`)
    console.log(`--->${tempo_moderada[0]} min ${tempo_moderada[1]}s `)
    console.log(`Frequencia cardiaca: ${frequencia_minima_moderada} a ${frequencia_maxima_moderada} bpm `)
    console.log(`\n@ LEVE:`)
    console.log(`--->${tempo_leve[0]} min ${tempo_moderada[1]}s`)
    console.log(`Frequencia cardiaca: ${frequencia_minima_leve} a ${frequencia_maxima_leve} bpm `)
    console.log(`\n@ DIFICIL:`)
    console.log(`--->${tempo_dificil[0]} min ${tempo_dificil[1]}s`)
    console.log(`Frequencia cardiaca: ${frequencia_minima_dificil} a ${frequencia_maxima_dificil} bpm `)
    console.log(`\n@ MUITO LEVE:`)
    console.log(`--->${tempo_muito_leve[0]} min ${tempo_muito_leve[1]}s`)
    console.log(`Frequencia cardiaca: ${frequencia_minima_muito_leve} a ${frequencia_maxima_muito_leve} bpm `)

}

function calculaFrequenciaCardiacaMaxima(idade) {
    return 220 - idade;
}

function calculaFrequeciaMinimaCategoriaMuitoLeve(frequecia_cardica_maxima) {
    return 0.5 * frequecia_cardica_maxima;
}

function calculaFrequeciaMaximaCategoriaMuitoLeve(frequecia_cardica_maxima) {
    return 0.6 * frequecia_cardica_maxima;
}

function calculaFrequeciaMinimaCategoriaLeve(frequecia_cardica_maxima) {
    return 0.6 * frequecia_cardica_maxima;
}

function calculaFrequeciaMaximaCategoriaLeve(frequecia_cardica_maxima) {
    return 0.7 * frequecia_cardica_maxima;
}

function calculaFrequeciaMinimaCategoriaModerada(frequecia_cardica_maxima) {
    return 0.7 * frequecia_cardica_maxima;
}

function calculaFrequeciaMaximaCategoriaModerada(frequecia_cardica_maxima) {
    return 0.8 * frequecia_cardica_maxima;
}

function calculaFrequeciaMinimaCategoriaDificil(frequecia_cardica_maxima) {
    return 0.8 * frequecia_cardica_maxima;
}

function calculaFrequeciaMaximaCategoriaDificil(frequecia_cardica_maxima) {
    return 0.9 * frequecia_cardica_maxima;
}

function calculaFrequeciaMinimaCategoriaMaxima(frequecia_cardica_maxima) {
    return 0.9 * frequecia_cardica_maxima
}

function calculaFrequeciaMaximaCategoriaMaxima(frequecia_cardica_maxima) {
    return 1 * frequecia_cardica_maxima
}

function calculaTempoModerada(minutos_exercicio) {
    let minutos = Math.floor(minutos_exercicio) * 0.4
    let segundos = Number((((minutos_exercicio - minutos) * 60) * 0.4).toFixed(2))
    return [minutos, segundos]
}

function calculaTempoLeve(minutos_exercicio) {
    let minutos = Math.floor(minutos_exercicio) * 0.2
    let segundos = Number((((minutos_exercicio - minutos) * 60) * 0.2).toFixed(2))
    return [minutos, segundos]
}

function calculaTempoDificil(minutos_exercicio) {
    let minutos = Math.floor(minutos_exercicio) * 0.1
    let segundos = Number((((minutos_exercicio - minutos) * 60) * 0.1).toFixed(2))
    return [minutos, segundos]
}

function calculaTempoMuitoLeve(minutos_exercicio) {
    let minutos = Math.floor(minutos_exercicio) * 0.2
    let segundos = Number((((minutos_exercicio - minutos) * 60) * 0.2).toFixed(2))
    return [minutos, segundos]
}
main()