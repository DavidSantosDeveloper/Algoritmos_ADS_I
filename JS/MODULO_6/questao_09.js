import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { mostrarNumerosParesEmUmIntervalo } from "./funcoes_matematicas.js"

function main() {
    header("APP MOSTRAR NUMEROS PARES EM UM INTERVALO");
    // ENTRADA
    const limite_inferior = obter_numero("Digite o limite inferior: ");
    const limite_superior = obter_numero("Digite o limite superior: ");
    // PROCESSAMENTO
    mostrarNumerosParesEmUmIntervalo(limite_inferior, limite_superior);
    // SAIDA
}
main()