import { header } from './funcoes_decoracao.js'
import { obter_numero, mostrar_texto } from './funcoes_entrada_saida.js'
import { mostrarNumerosConsecutivosCujaSomaSejaAteUmNumeroX } from './funcoes_matematicas.js'

function main() {
    header("APP MOSTRA SOMA DE NUMEROS CONSECUTIVOS ATE NUMERO X DE NUMEROS");
    // ENTRADA
    const numero_x = obter_numero("Digite um numero X:");
    // PROCESSAMENTO
    mostrarNumerosConsecutivosCujaSomaSejaAteUmNumeroX(numero_x);

    // SAIDA
}
main()