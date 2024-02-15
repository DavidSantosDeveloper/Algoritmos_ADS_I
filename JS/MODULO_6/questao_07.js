import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { header } from "./funcoes_decoracao.js"
import { somaDeNumerosAteN } from "./funcoes_matematicas.js"

function main() {
    header("Soma numeros ate N")
        // ENTRADA
    const numero = obter_numero("Digite um numero (N):")
        // PROCESSAMENTO
        // const resultado = somaDeNumerosAteN(numero)
    somaDeNumerosAteN(numero)
        // SAIDA
        // mostrar_texto("resutado: " + resultado)
}
main()