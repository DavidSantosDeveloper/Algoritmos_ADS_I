import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { mostrarSequenciaFibonacciAteN } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    const quantidade_termos = obter_numero('Digite o a quantidade de termos (>=2): ')

    // PROCESSAMENTO

    // SAIDA
    mostrarSequenciaFibonacciAteN(quantidade_termos)
}
main()