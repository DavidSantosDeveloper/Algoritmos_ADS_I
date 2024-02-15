import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { mostraMultiplosEntreInvervaloDeN } from "./funcoes_matematicas.js"

function main() {
    header("APP MULTIPLOS DE N EM UM INTERVALO DE VALORES ");
    // ENTRADA
    const numero_n = obter_numero("Digite o numero n:");
    const limite_inferior = obter_numero("Digite o limite inferior: ");
    const limite_superior = obter_numero("Digite o limite superior: ");
    // PROCESSAMENTO
    const resultado = mostraMultiplosEntreInvervaloDeN(numero_n, limite_inferior, limite_superior);
    // SAIDA

}
main()