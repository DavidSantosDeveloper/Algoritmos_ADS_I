import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { calculaSalarioBruto, calculaValorDoInss, calculaImpostoDeRenda, calculaSalarioLiquido } from "./funcoes_matematicas.js"

function main() {
    header("EMPRESA - CONTRACHEQUE DOS FUNCIONARIOS");
    // ENTRADA
    let codico_funcionario;
    let horas_trabalhadas;
    let numero_de_dependentes_do_funcionario;
    let salario_bruto_funcionario;
    let valor_inss;
    let valor_imposto_renda;
    let salario_liquido_funcionario;
    let controle = 1;
    while (controle == 1) {
        mostrar_texto("\n")
        codico_funcionario = obter_numero("Digite o codico do funcionario: ")
        horas_trabalhadas = obter_numero("Digite o numero de horas trabalhadas: ")
        numero_de_dependentes_do_funcionario = obter_numero("Digite o numero de dependentes do funcionario: ");
        // PROCESSAMENTO
        salario_bruto_funcionario = calculaSalarioBruto(horas_trabalhadas, numero_de_dependentes_do_funcionario)
        valor_inss = calculaValorDoInss(salario_bruto_funcionario, 8.5)
        valor_imposto_renda = calculaImpostoDeRenda(salario_bruto_funcionario, 5)
        salario_liquido_funcionario = calculaSalarioLiquido(salario_bruto_funcionario, valor_inss, valor_imposto_renda);
        // SAIDA
        mostrar_texto("-------------CONTRACHEQUE-----------------")
        mostrar_texto(`Funcionario => CODICO:${codico_funcionario} HORAS:${horas_trabalhadas}h DEPENDENTE(S): ${numero_de_dependentes_do_funcionario}`)
        mostrar_texto(`Salario Bruto: R$ ${salario_bruto_funcionario}`)
        mostrar_texto(`Valor do INSS: R$ ${valor_inss}`)
        mostrar_texto(`Valor do imposto de renda: R$ ${valor_imposto_renda}`)
        mostrar_texto(`Salario Liquido: R$ ${salario_liquido_funcionario}`)
        mostrar_texto("\n")
        controle = obter_numero("Deseja continuar: 0-NAO 1-SIM  ")
    }

}
main()