import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { calculaValordaFormulaS } from "./funcoes_matematicas.js"

function main() {
    header("APP CALCULAR 'S' COM BASE EM 'N' ");
    // ENTRADA
    const numero_n = obter_numero("Digite o valor de 'N' :");
    const tipo_da_formula = 5;
    // PROCESSAMENTO
    const resultado_de_s = calculaValordaFormulaS(numero_n, tipo_da_formula);
    // SAIDA
    mostrar_texto(`VALOR DE S: ${resultado_de_s}`)
}
main()