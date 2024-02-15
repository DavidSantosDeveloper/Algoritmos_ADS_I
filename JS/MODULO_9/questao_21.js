import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularMultiplicaoDiferente } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    const numero_1 = obter_numero("Digite o numero1: ")
    const numero_2 = obter_numero("Digite o numero2: ")
        // PROCESSAMENTO
    const resultado_multiplicacao = calcularMultiplicaoDiferente(numero_1, numero_2)

    // SAIDA
    mostrar_texto(`multiplicacao: ${resultado_multiplicacao}`)
}
main()