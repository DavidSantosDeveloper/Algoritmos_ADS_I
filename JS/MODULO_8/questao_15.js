import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_numero_entre_intervalo } from "./funcoes_entrada_saida.js"
import { converterNumeroDecimalParaBinario, converterNumeroDecimalParaHexadecimal } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    const numero_em_decimal = obter_numero_entre_intervalo("Digite um numero decimal(0-255): ", 0, 255)

    // PROCESSAMENTO
    const numero_em_binario = converterNumeroDecimalParaBinario(numero_em_decimal)
    const numero_em_hexadecimal = converterNumeroDecimalParaHexadecimal(numero_em_decimal)
        // SAIDA
    mostrar_texto(`-------RESULTADO--------`)
    mostrar_texto(`binario: ${numero_em_binario}`)
    mostrar_texto(`hexadecimal: ${numero_em_hexadecimal}`)
}
main()