import { adicionar_um_elemento_a_uma_lista } from './Bibliotecas/funcoes_array.mjs'
import {} from './Bibliotecas/funcoes_de_ordenacao.mjs'
import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_opcoes, obter_texto } from './Bibliotecas/funcoes_entrada_saida.mjs'
import {} from './Bibliotecas/funcoes_matematicas.mjs'
import {} from './Bibliotecas/funcoes_string.mjs'
import { cadrastrar_premio_na_rifa, calcular_taxa_da_administracao, obter_os_dados_das_pessoas_que_estao_concorrendo_na_rifa, obter_premios_cadrastrados } from './Bibliotecas/funcoes_auxiliares_rifa.mjs'

function main() {
    cabecalho("ATIVIDADE T - RIFA")

    //Condicao de continuidade do app
    let permitido_continuar = true;
    //Carregando os dados do BD em txt
    let dados = obter_os_dados_das_pessoas_que_estao_concorrendo_na_rifa()

    //Valores iniciais da Rifa (Configuração inicial)
    let valor_do_ponto = 0
    let porcentagem_da_taxa_de_administracao = 0
    let valor_da_taxa_de_administracao = 0
    let valor_liquido_arrecadado = 0
    let valor_total_arrecadado = 0
    let lista_de_premios_sorteados = obter_premios_cadrastrados()


    while (permitido_continuar) {
        let opcoes = obter_opcoes("Escolha uma opcao", `
        1-cadrastrar valor do ponto(R$)
        2-cadrastrar taxa da administracao(%)
        3-cadrastrar premio (por ordem de sorteio)
        4- cadrastrar o ponto de uma pessoa
        5- mostrar dados de quem esta participando
        6-mostrar os premios
        7-mostrar os pontos ocupados e os disponiveis

         
        `)

        //Menu de Opcoes

        switch (opcoes) {
            case 0:
                permitido_continuar = false
                break;

            case 1:
                valor_do_ponto = obter_numero("Digite o valor do ponto (R$): ")
                break;
            case 2:
                porcentagem_da_taxa_de_administracao = obter_numero("Digite a porcentagem da taxa de administracao (%): ")
                break;
            case 3:
                let deseja_continuar_cadrastrando_premios = true
                let numero_do_premio = 1

                while (deseja_continuar_cadrastrando_premios) {
                    let nome_do_premio_atual = obter_texto(`Digite o nome do ${numero_do_premio} premio:`)
                    cadrastrar_premio_na_rifa(nome_do_premio_atual)
                    deseja_continuar_cadrastrando_premios = obter_numero("Deseja continuar cadrastrando premios (1-SIM 0-NAO) ?")
                    deseja_continuar_cadrastrando_premios = deseja_continuar_cadrastrando_premios ? true : false
                }

                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                lista_de_premios_sorteados = obter_premios_cadrastrados()
                mostrar_texto(lista_de_premios_sorteados)
                break;

            default:
                break;
        }

    }

    //Processamento

    //Saida
}
main()