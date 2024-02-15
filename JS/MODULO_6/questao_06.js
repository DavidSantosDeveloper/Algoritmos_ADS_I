import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from './funcoes_entrada_saida.js'
import { mostraTabuadaPositiva } from "./funcoes_matematicas.js"

function main() {
    header("APP CALCULADORA")
        // ENTRADA
    const tabuada_do_numero = obter_numero("Digite o numero que  vc quer a tabuada: ")
    const limite_tabuada = obter_numero("Digite ate que numero vc quer multiplicar:  :  ")
        // PROCESSAMENTO
    mostraTabuadaPositiva(tabuada_do_numero, limite_tabuada)
        // SAIDA
}
main()