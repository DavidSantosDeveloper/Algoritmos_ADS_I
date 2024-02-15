import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularSaldoAnual, verificaSePodeContinuar } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    let investimento
    let taxa_de_juros_mensal
    let saldo_anual = 0
    let ano_atual = 1
    let controle
    let permissao_para_continuar = true

    investimento = obter_numero('Digite o valor do investimento(R$): ')
    taxa_de_juros_mensal = obter_numero("Obter taxa de juros composto mensal(%):")
    saldo_anual = calcularSaldoAnual(investimento, taxa_de_juros_mensal)
    mostrar_texto(`Saldo do ${ano_atual} ano eh R$ ${saldo_anual}`)
    while (permissao_para_continuar) {
        controle = obter_texto("Deseja continuar? (S/N): ")
        permissao_para_continuar = verificaSePodeContinuar(controle)
        if (permissao_para_continuar) {
            ano_atual++
            saldo_anual += calcularSaldoAnual(saldo_anual, taxa_de_juros_mensal)
            mostrar_texto(`Saldo do ${ano_atual} ano eh R$ ${saldo_anual}`)
        } else {
            continue
        }
    }
    // PROCESSAMENTO

    // SAIDA
}
main()