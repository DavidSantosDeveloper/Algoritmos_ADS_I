import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { ehPrimo, mostrarNumerospPrimosEmUmIntervalo } from "./funcoes_matematicas.js"

function main() {
    header("APP MOSTRAR NUMEROS PRIMOS EM UM INTERVALO");
    // ENTRADA
    const limite_inferior = obter_numero("Digite o limite inferior: ");
    const limite_superior = obter_numero("Digite o limite superior: ");
    // PROCESSAMENTO
    mostrarNumerospPrimosEmUmIntervalo(limite_inferior, limite_superior);
    // SAIDA



}
main()