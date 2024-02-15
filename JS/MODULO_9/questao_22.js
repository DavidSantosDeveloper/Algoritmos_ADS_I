import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularQueocionteDiferente, calcularRestoDiferente } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    const numero_1 = obter_numero("Digite o numero1: ")
    const numero_2 = obter_numero("Digite o numero2: ");
    // PROCESSAMENTO
    const queociente = calcularQueocionteDiferente(numero_1, numero_2)
    const resto = calcularRestoDiferente(numero_1, numero_2, queociente)

    // SAIDA
    mostrar_texto(`queociente: ${queociente}`)
    mostrar_texto(`resto: ${resto}`)
}
main()