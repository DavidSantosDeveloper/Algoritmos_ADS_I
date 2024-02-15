import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { calculaMediaDeFilhos, calculaMediaSalarial, calculaPorcentagemDoTotal } from "./funcoes_matematicas.js"

function main() {
    header("APP DE MEDIA SALARIAL E DE FILHOS");
    // ENTRADA
    let quantidade_pessoas = 0;
    let salario;
    let numero_de_filhos;

    let soma_salarial = 0
    let soma_filhos = 0
    let media_salarial = 0
    let media_filhos = 0
    let numero_de_pessoas_com_salario_ate_1000 = 0
    let percentual_pessoas_com_salario_ate_1000 = 0

    let controle = 1
    while (controle == 1) {
        salario = obter_numero("Digite seu salario (R$): ")
        numero_de_filhos = obter_numero("Digite o numero de filh(os/as):");
        // PROCESSAMENTO
        soma_salarial += salario
        soma_filhos += numero_de_filhos;
        quantidade_pessoas++
        if (salario <= 1000) {
            numero_de_pessoas_com_salario_ate_1000++;
        }

        controle = obter_numero("Deseja continuar: 0-NAO 1-SIM  ")
    }
    media_filhos = calculaMediaDeFilhos(soma_filhos, quantidade_pessoas);
    media_salarial = calculaMediaSalarial(soma_salarial, quantidade_pessoas);
    percentual_pessoas_com_salario_ate_1000 = calculaPorcentagemDoTotal(numero_de_pessoas_com_salario_ate_1000, quantidade_pessoas)

    // SAIDA
    mostrar_texto("\n ------------RESULTADO-------------");
    mostrar_texto(`MEDIA DE FILH(OS/AS) => ${media_filhos}`)
    mostrar_texto(`MEDIA SALARIAL => ${media_salarial}`)
    mostrar_texto(`PERCENTUAL DE PESSOAS COM SALARIO DE ATE R$ 1000: ${percentual_pessoas_com_salario_ate_1000}%`)

}
main()