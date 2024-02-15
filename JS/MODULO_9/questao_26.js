import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularMultiplicaoDiferente } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    let idade_atual = 0
    let opniao_atual
    let lista_opniao_e_quantidade_de_pessoas_adptas_dela = [
        ['1-', 0],
        ['2-', 0],
        ['3-', 0],
        ['4-', 0]
    ]

    mostrar_texto("Opnioes: 1-otimo 2-bom 3-regular 4-pessimo")
    while (idade_atual >= 0) {
        idade_atual = obter_numero("Digite sua Idade (anos):")
        if (idade_atual < 0) {
            continue
        }
        opniao_atual = obter_numero("Digite a opniao:")
        if (opniao_atual == 1) {
            lista_opniao_e_quantidade_de_pessoas_adptas_dela[0][1]++
        } else if (opniao_atual == 2) {
            lista_opniao_e_quantidade_de_pessoas_adptas_dela[1][1]++
        } else if (opniao_atual == 3) {
            lista_opniao_e_quantidade_de_pessoas_adptas_dela[2][1]++
        } else if (opniao_atual == 4) {
            lista_opniao_e_quantidade_de_pessoas_adptas_dela[3][1]++
        }
    }
    let indice = 0
    while (indice < lista_opniao_e_quantidade_de_pessoas_adptas_dela.length) {
        mostrar_texto(`opniao 1: `)

    }

    mostrar_texto(`${lista_opniao_e_quantidade_de_pessoas_adptas_dela}`)
        // PROCESSAMENTO

    // SAIDA
}
main()