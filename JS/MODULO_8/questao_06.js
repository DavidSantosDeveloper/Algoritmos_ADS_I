import { header } from "./funcoes_decoracao.js";
import { obter_numero, mostrar_texto, obter_texto } from './funcoes_entrada_saida.js'
import { verificaSeEhNumero, calcularNumeroDeDigitos } from './funcoes_matematicas.js'

function main() {
    header("APP CONTAGEM DE DIGITOS DE UM NUMERO");
    // ENTRADA
    const numero_n = obter_numero("Digite um numero: ");
    // PROCESSAMENTO
    const resultado = calcularNumeroDeDigitos(numero_n);
    // SAIDA
    mostrar_texto(`Resultado: ${resultado}`)

}

main()