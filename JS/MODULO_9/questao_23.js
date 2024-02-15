import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularMultiplicaoDiferente } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    let razao_progressao_geometrica = obter_numero("Digite a razao da PG:")
    let termo_inicial_pg = obter_numero("Digite o termo inicial da PG(A1): ")
    let termos_da_pg = termo_inicial_pg
    let quantidade_de_termos_pg = obter_numero("Digite a quantidade de termos(An): ")
    let indice_pg = 1
        // PROCESSAMENTO
    while (indice_pg <= quantidade_de_termos_pg) {
        if (indice_pg == 1) {
            mostrar_texto(`termo atual: A${indice_pg} => ${termos_da_pg}`)
        } else {
            termos_da_pg *= razao_progressao_geometrica
            mostrar_texto(`termo atual: A${indice_pg} => ${termos_da_pg}`)

        }

        indice_pg++
    }

    // SAIDA
}
main()