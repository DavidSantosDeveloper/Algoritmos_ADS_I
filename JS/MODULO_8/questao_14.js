import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { calcularPorcentagem, calcularTotalDeVotos } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    let voto_atual
    let votos_45 = 0
    let votos_13 = 0
    let votos_23 = 0
    let votos_99 = 0
    let votos_98 = 0
    let votos_0 = 0
    let total_de_entrevistados = 0
    console.log(`opcoes: SERRA-45 DILMA-13 CIRO GOMES-23 99-INDECISO OUTROS-98 NULO/BRANCO-0`)
    while (voto_atual != -1) {
        voto_atual = obter_numero("Digite o numero do candidato")
        if (voto_atual == 45) {
            votos_45++
        } else if (voto_atual == 13) {
            votos_13++
        } else if (voto_atual == 23) {
            votos_23++
        } else if (voto_atual == 99) {
            votos_99++
        } else if (voto_atual == 98) {
            votos_98++
        } else if (voto_atual == 0) {
            votos_0++
        } else if (voto_atual == -1) {
            break
        }
        total_de_entrevistados++
    }
    // PROCESSAMENTO
    const total_de_votos = calcularTotalDeVotos(total_de_entrevistados);
    // SAIDA
    mostrar_texto("----------RESULTADO-------------")
    mostrar_texto(`Porcentagem do Serra(45): ${calcularPorcentagem(votos_45,total_de_votos)}`)
    mostrar_texto(`Porcentagem da Dilma(13): ${calcularPorcentagem(votos_13,total_de_votos)}`)
    mostrar_texto(`Porcentagem do Ciro Gomes(23): ${calcularPorcentagem(votos_23,total_de_votos)}`)
    mostrar_texto(`Porcentagem Indecisa(99): ${calcularPorcentagem(votos_99,total_de_votos)}`)
    mostrar_texto(`Porcentagem Outros(98): ${calcularPorcentagem(votos_98,total_de_votos)}`)
    mostrar_texto(`Porcentagem de votos brancos/nulos(0): ${calcularPorcentagem(votos_0,total_de_votos)}`)
    mostrar_texto(`Total de entrevistados: ${total_de_votos}`)
}
main()