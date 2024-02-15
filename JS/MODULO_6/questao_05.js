import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { calculaFatorial } from "./funcoes_matematicas.js"
import { header } from "./funcoes_decoracao.js"


function main() {
    header("APP FATORIAL")
        // ENTRADA
    const numero = obter_numero("Digite um numero:")

    // PROCESSAMENTO
    const fatorial_resultado = calculaFatorial(numero);
    // SAIDA
    mostrar_texto(`RESULTADO: ${fatorial_resultado}`)
}
main()