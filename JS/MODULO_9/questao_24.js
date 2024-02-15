import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularMultiplicaoDiferente } from "./funcoes_matematicas.js"

function main() {
    header("APP P.A");
    // ENTRADA
    let razao_progressao_aritimetica = obter_numero("Digite a razao da PA:")
    let termo_inicial_pa = obter_numero("Digite o termo inicial da PA(A1): ")
    let termos_da_pa = termo_inicial_pa
    let quantidade_de_termos_pa = obter_numero("Digite a quantidade de termos(An): ")
    let indice_pa = 1
        // PROCESSAMENTO
    while (indice_pa <= quantidade_de_termos_pa) {
        if (indice_pa == 1) {
            mostrar_texto(`termo atual: A${indice_pa} => ${termos_da_pa}`)
        } else {
            termos_da_pa += razao_progressao_aritimetica
            mostrar_texto(`termo atual: A${indice_pa} => ${termos_da_pa}`)

        }

        indice_pa++
    }

    // SAIDA
}
main()