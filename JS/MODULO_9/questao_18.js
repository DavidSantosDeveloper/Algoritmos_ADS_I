import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import {} from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    let ano = 1;
    // PROCESSAMENTO
    let populacao_a = 200000
    let populacao_b = 800000
    while (populacao_a <= populacao_b) {
        populacao_a *= 1.035
        populacao_b *= 1.0135
        console.log(ano)
        ano++
    }
    // SAIDA
    mostrar_texto("tempo: " + ano + "anos")
    mostrar_texto(`populacao a:${populacao_a}`)
    mostrar_texto(`populacao b:${populacao_b}`)

}
main()