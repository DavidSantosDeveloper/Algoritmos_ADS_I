import { header } from './funcoes_decoracao.js'
import { obter_numero, mostrar_texto } from './funcoes_entrada_saida.js'
import { pedirNumerosAteAcharUmIgualAoNumeroN } from './funcoes_matematicas.js'

function main() {
    header("APP LER UM NUMERO ATE ACHAR UM IGUAL A ELE");
    // ENTRADA
    const numero_n = obter_numero("Digite um Numero N: ");

    // PROCESSAMENTO
    pedirNumerosAteAcharUmIgualAoNumeroN(numero_n);
    // SAIDA

}
main()