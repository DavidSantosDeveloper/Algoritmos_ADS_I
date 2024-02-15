import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularMultiplicaoDiferente } from "./funcoes_matematicas.js"

function main() {
    //  ENTRADA
    let lista_emissoras_e_telespectadores = [
        [2, 0],
        [4, 0],
        [5, 0],
        [7, 0],
        [10, 0]
    ]
    let numero_do_canal_atual
    let quantidade_de_telespectadores_da_casa
        // PROCESSAMENTO
    while (numero_do_canal_atual != 0) {
        numero_do_canal_atual = obter_numero("Digite o canal: ")
        if (numero_do_canal_atual == 0) {
            continue
        }
        let quantidade_de_telespectadores_da_casa = obter_numero("Digite a quantidade de telespectadores: ")

        if (numero_do_canal_atual == 2) {
            lista_emissoras_e_telespectadores[0][1] += quantidade_de_telespectadores_da_casa
        } else if (numero_do_canal_atual == 4) {
            lista_emissoras_e_telespectadores[1][1] += quantidade_de_telespectadores_da_casa
        } else if (numero_do_canal_atual == 5) {
            lista_emissoras_e_telespectadores[2][1] += quantidade_de_telespectadores_da_casa
        } else if (numero_do_canal_atual == 7) {
            lista_emissoras_e_telespectadores[3][1] += quantidade_de_telespectadores_da_casa
        } else if (numero_do_canal_atual == 10) {
            lista_emissoras_e_telespectadores[4][1] += quantidade_de_telespectadores_da_casa
        }

    }

    // SAIDA
    let indice = 0
    while (indice < lista_emissoras_e_telespectadores.length) {
        mostrar_texto(lista_emissoras_e_telespectadores[indice])
        indice++
    }
}
main()