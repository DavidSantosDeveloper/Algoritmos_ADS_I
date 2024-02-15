import { header } from './funcoes_decoracao.js'
import { obter_numero, mostrar_texto } from './funcoes_entrada_saida.js'
import { calcularDiferenca, calcularSalarioReajustado } from './funcoes_matematicas.js'

function main() {
    header("APP SALARIO FUNCIONARIOS");
    // ENTRADA
    let id_funcionario_atual
    let salario_atual
    let salario_reajustado
    let somatorio_salario_atual = 0
    let somatorio_salario_reajustado = 0
    let diferenca_entre_somatorio_reajustado_eo_atual = 0;
    // PROCESSAMENTO
    while (id_funcionario_atual != 0) {
        id_funcionario_atual = obter_numero("Digite o id do funcionario atual:")
        if (id_funcionario_atual == 0) {
            continue
        }
        salario_atual = obter_numero("Digite o salario do funcionario: ")
        salario_reajustado = calcularSalarioReajustado(salario_atual)
        console.log("salario reajustado: R$ " + salario_reajustado)
        somatorio_salario_atual += salario_atual
        somatorio_salario_reajustado += salario_reajustado
    }
    diferenca_entre_somatorio_reajustado_eo_atual = calcularDiferenca(somatorio_salario_atual, somatorio_salario_reajustado)


    // SAIDA
    mostrar_texto("---------RESULTADO-------")
    mostrar_texto(`Somatorio Salario atual:R$${somatorio_salario_atual}`)
    mostrar_texto(`Somatorio salario reajustado: R$${somatorio_salario_reajustado}`)
    mostrar_texto(`diferenca entre os somatorios: R$${diferenca_entre_somatorio_reajustado_eo_atual}`)
}
main()