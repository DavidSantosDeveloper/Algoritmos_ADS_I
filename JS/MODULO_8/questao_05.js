import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js";
import { divisaodeXPorN } from "./funcoes_matematicas.js"
import { header } from "./funcoes_decoracao.js"

function main() {
    header("APP DIVISAO DE X POR N");
    // ENTRADA
    const numero_x = obter_numero("Digite o numero X: ")
    const numero_n = obter_numero("Digite o numero N: ");

    // PROCESSAMENTO
    divisaodeXPorN(numero_x, numero_n)

    // SAIDA
    mostrar_texto(`>>Resultado: ${divisaodeXPorN(numero_x, numero_n)}`)
}
main()