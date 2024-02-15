import { adicionar_um_elemento_a_uma_lista, criar_lista, criar_lista_de_numeros_entre_um_intervalo, criar_lista_de_numeros_pedindo_item_a_item, filtrar_uma_lista, inverter_elementos_de_uma_lista, mapeamento_de_uma_lista, mostrar_elementos_de_uma_lista, ordenar_numeros_com_quicksort, reduzir_elementos_de_uma_lista, verifica_se_uma_lista_eh_exatamente_igual_a_outra_lista } from './Bibliotecas/funcoes_array.mjs'
import {} from './Bibliotecas/funcoes_auxiliares_lista_de_array.mjs'
import { destacar_resposta_cabecalho, destacar_resposta_rodape, cabecalho_V2 } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_opcoes, obter_texto } from './Bibliotecas/funcoes_entrada_saida.mjs'
import { calcular_mediana_dos_numeros_em_uma_lista, calcular_media_dos_numeros_de_uma_lista, eh_divisivel_por_numero_N } from './Bibliotecas/funcoes_matematicas.mjs'
import {} from './Bibliotecas/funcoes_string.mjs'
import { filtrar_nao_multiplos_de_N_e_M_em_uma_lista, filtrar_numeros_multiplos_de_um_numero_N_em_uma_lista, filtrar_os_numeros_positivos_multiplos_de_2_em_uma_lista, gerar_numero_positivo_entre_um_intervalo, obter_os_maiores_numeros_em_uma_lista, obter_os_menores_numeros_em_uma_lista, retornar_numeros_menores_e_menores_que_um_numero_N } from './Bibliotecas/funcoes_auxiliares_atividade_R.mjs'

function main() {
    cabecalho_V2("ATIVIDADE R")
        //ENTRADA
    let execucao_atual = 1
    let permissao_para_continuar = true
    let lista_gerada = []
    let lista_de_positivos = []
    let lista_de_zeros = []
    let lista_de_negativos = []
    let lista_numeros_impares = []
    let somatorio_lista = 0
    let somatorio_lista_de_positivos = 0
    let somatorio_lista_de_negativos = 0
    let media_da_lista = 0
    let mediana_da_lista = 0
    let media_lista_de_positivos = 0
    let media_lista_de_negativos = 0


    while (permissao_para_continuar) {

        execucao_atual++
        mostrar_texto(`\n \n--------------------------------${execucao_atual} EXECUCAO DO APP------------------------------------------------`)
        let opcao = obter_opcoes('Escolha uma opcao', `
        1. Gerar vetor N posicoes, pedir valor padrao

        2. Preencher vetor manualmente item a item

        3. Preencher vetor automaticamente

        4. Mostrar vetor

        5. Transformar vetor: elevar a potencia N

        6. Contar: Positivos, Negativos e Zeros

        7. Somatorio: De todos, Dos Negativos e dos Positivos

        8. Exibir Media e Mediana: De Todos, Dos Positivos e Dos Negativos

        9. Exibir Maior e Menor número

        10. Sortear dois numeros: um positivo e um negativo

        11. Gerar N grupos de T tamanhos. Não repetir valores

        12. Pedir um novo vetor e verificar se está 100% presente nos numeros do sistema (e na mesma ordem)

        13. Top N maiores numeros

        14. Top N menores numeros

        15. Listar valor medio, e listar numeros maiores que a Media e Menores que a Media

        16. Somatorio da Media dos Numeros Positivos múltiplos dois COM o Produto acumulado dos números negativos pares reduzidos a metade

        17. Ordenar os números em ordem crescente: 
        Pergunta se: todos, ou apenas pares, ou impares, ou positivos ou negativos, ou ainda apenas os múltiplos (positivos ou negativos) de N

        18. Ordenar em ordem decrescente
        Pergunta se: todos, ou apenas pares, ou impares, ou positivos ou negativos, ou ainda apenas os múltiplos (positivos ou negativos) de N

        19. Eliminar numeros multiplos de N e M (simultaneamente)

        0. Sair (mensagem automatica de tchau)



        `)



        //PROCESSAMENTO
        switch (opcao) {
            case 0:
                permissao_para_continuar = false
                break;
            case 1:

                let tamanho_padrao = obter_numero("\nDigite o tamanho_padrao: ")
                let numero_padrao = obter_numero("Digite o valor padrao: ")
                destacar_resposta_cabecalho()

                lista_gerada = criar_lista(tamanho_padrao, numero_padrao)
                mostrar_texto(`\nlista: [${lista_gerada}]`)

                destacar_resposta_rodape()
                break;

            case 2:

                let tamanho_padrao_2 = obter_numero("\nDigite o tamanho_padrao: ")
                destacar_resposta_cabecalho()

                lista_gerada = criar_lista_de_numeros_pedindo_item_a_item(tamanho_padrao_2)
                mostrar_texto(`\n lista: [${lista_gerada}]`)

                destacar_resposta_rodape()
                break;

            case 3:

                let tamanho_padrao_3 = obter_numero("Digite o tamanho_padrao: ")
                let numero_minimo = obter_numero("Digite o numero_minimo : ")
                let numero_maximo = obter_numero("Digite o numero_maximo : ")
                destacar_resposta_cabecalho()

                lista_gerada = criar_lista_de_numeros_entre_um_intervalo(tamanho_padrao_3, numero_minimo, numero_maximo)
                mostrar_texto(`lista: [${lista_gerada}] \n`)

                destacar_resposta_rodape()


            case 4:

                destacar_resposta_cabecalho()

                mostrar_elementos_de_uma_lista(lista_gerada)

                destacar_resposta_rodape()
                break;

            case 5:

                let expoente_dos_elementos = Number(obter_numero(`Digite o expoente dos elementos: `))
                let lista_com_itens_elevado_a_N = mapeamento_de_uma_lista(lista_gerada, (numero) => numero == numero, (numero) => numero ** expoente_dos_elementos)
                destacar_resposta_cabecalho()

                mostrar_texto(`lista original: [${lista_gerada}] \n`)
                mostrar_texto(`lista nova: [${lista_com_itens_elevado_a_N}]`)

                destacar_resposta_rodape()
                break;

            case 6:

                lista_de_positivos = filtrar_uma_lista(lista_gerada, (numero) => numero > 0)
                lista_de_zeros = filtrar_uma_lista(lista_gerada, (numero) => numero == 0)
                lista_de_negativos = filtrar_uma_lista(lista_gerada, (numero) => numero < 0)

                destacar_resposta_cabecalho()

                mostrar_texto(`\nlista original: ${lista_gerada}  quantidade=> ${lista_gerada.length} elemento(s)`)
                mostrar_texto(`lista de positivos: ${lista_de_positivos} quantidade=> ${lista_de_positivos.length} elemento(s)`)
                mostrar_texto(`lista de zero: ${lista_de_zeros} quantidade=> ${lista_de_zeros.length} elemento(s)`)
                mostrar_texto(`lista de negativos: ${lista_de_negativos} quantidade=> ${lista_de_negativos.length} elemento(s)`)

                destacar_resposta_rodape()

                break;

            case 7:

                lista_de_positivos = filtrar_uma_lista(lista_gerada, (numero) => numero > 0)
                lista_de_negativos = filtrar_uma_lista(lista_gerada, (numero) => numero < 0)
                somatorio_lista = reduzir_elementos_de_uma_lista(lista_gerada, (valor_acumulado, valor_atual) => valor_acumulado + valor_atual)
                somatorio_lista_de_positivos = reduzir_elementos_de_uma_lista(lista_de_positivos, (valor_acumulado, valor_atual) => valor_acumulado + valor_atual)
                somatorio_lista_de_negativos = reduzir_elementos_de_uma_lista(lista_de_negativos, (valor_acumulado, valor_atual) => valor_acumulado + valor_atual)

                destacar_resposta_cabecalho()

                mostrar_texto(`\nlista original: ${lista_gerada}  - somatorio=> ${somatorio_lista}`)
                mostrar_texto(`lista_de_positivos: ${lista_de_positivos}  - somatorio=> ${somatorio_lista_de_positivos}`)
                mostrar_texto(`lista_de_negativos: ${lista_de_negativos}  - somatorio=> ${somatorio_lista_de_negativos}`)

                destacar_resposta_rodape()

                break;
            case 8:

                lista_de_positivos = filtrar_uma_lista(lista_gerada, (numero) => numero > 0)
                lista_de_negativos = filtrar_uma_lista(lista_gerada, (numero) => numero < 0)
                media_da_lista = calcular_media_dos_numeros_de_uma_lista(lista_gerada)
                media_lista_de_positivos = calcular_media_dos_numeros_de_uma_lista(lista_de_positivos)
                media_lista_de_negativos = calcular_media_dos_numeros_de_uma_lista(lista_de_negativos)
                mediana_da_lista = calcular_mediana_dos_numeros_em_uma_lista(lista_gerada)
                let mediana_lista_de_positivos = calcular_mediana_dos_numeros_em_uma_lista(lista_de_positivos)
                let mediana_lista_de_negativos = calcular_mediana_dos_numeros_em_uma_lista(lista_de_negativos)

                destacar_resposta_cabecalho()
                mostrar_texto(`\nlista original: ${lista_gerada}  - media=> ${media_da_lista}  - Mediana=> ${mediana_da_lista}`)
                mostrar_texto(`lista_de_positivos: ${lista_de_positivos}  - media=> ${media_lista_de_positivos} - Mediana=> ${mediana_lista_de_positivos}`)
                mostrar_texto(`lista_de_negativos: ${lista_de_negativos}  - media=> ${media_lista_de_negativos} - Mediana=> ${mediana_lista_de_negativos}`)
                destacar_resposta_rodape()

                break;

            case 9:

                let maior_numero_da_lista = reduzir_elementos_de_uma_lista(lista_gerada, (maior_valor, valor_atual) => {
                    if (valor_atual > maior_valor) {
                        maior_valor = valor_atual
                    }
                    return maior_valor
                })
                let menor_numero_da_lista = reduzir_elementos_de_uma_lista(lista_gerada, (menor_valor, valor_atual) => {
                    if (valor_atual < menor_valor) {
                        menor_valor = valor_atual
                    }
                    return menor_valor
                })

                destacar_resposta_cabecalho()
                mostrar_texto(`\nlista original: ${lista_gerada} `)
                mostrar_texto(`maior_numero_da_lista_4: ${maior_numero_da_lista}`)
                mostrar_texto(`menor_numero_da_lista_4: ${menor_numero_da_lista} `)
                destacar_resposta_rodape()

                break;
            case 10:

                let numero_aleatorio_positivo = gerar_numero_positivo_entre_um_intervalo(1, 1000)
                let numero_aleatorio_negativo = gerar_numero_positivo_entre_um_intervalo(-1000, -1)
                lista_gerada = [numero_aleatorio_positivo, numero_aleatorio_negativo]

                destacar_resposta_cabecalho()
                mostrar_texto(`\nlista : ${lista_gerada}`)
                destacar_resposta_rodape()

                break;
            case 11:

                lista_gerada = []
                let quantidade_de_listas = obter_numero("Digite a quatidade de listas: ")
                let quantidade_de_elementos_por_lista = obter_numero("Digite a quantidade_de_elementos_por_lista: ")

                for (let sub_lista_atual = 1; sub_lista_atual <= quantidade_de_listas; sub_lista_atual++) {
                    let sub_lista = ['[']
                    for (let elemento_atual_na_sub_lista = 1; elemento_atual_na_sub_lista <= quantidade_de_elementos_por_lista; elemento_atual_na_sub_lista++) {
                        sub_lista = adicionar_um_elemento_a_uma_lista(sub_lista, gerar_numero_positivo_entre_um_intervalo(1, 30))
                    }
                    sub_lista = adicionar_um_elemento_a_uma_lista(sub_lista, "]")
                    lista_gerada = adicionar_um_elemento_a_uma_lista(lista_gerada, sub_lista)
                }
                destacar_resposta_cabecalho()
                mostrar_texto(`\nlista de listas => ${lista_gerada}`)
                destacar_resposta_rodape()
                break;

            case 12:

                let tamanho_lista_1 = Number(obter_numero("\nDigite o tamanho da 1 lista: "))
                let lista_1 = criar_lista_de_numeros_pedindo_item_a_item(tamanho_lista_1)
                let tamanho_lista_2 = Number(obter_numero("Digite o tamanho da 2 lista: "))
                let lista_2 = criar_lista_de_numeros_pedindo_item_a_item(tamanho_lista_2)

                destacar_resposta_cabecalho()
                if (verifica_se_uma_lista_eh_exatamente_igual_a_outra_lista(lista_1, lista_2)) {
                    mostrar_texto("As listas sao iguais!!")
                } else {
                    mostrar_texto("Sao diferentes!!!!")
                }
                destacar_resposta_rodape()

                break;

            case 13:

                mostrar_texto("")
                destacar_resposta_cabecalho()

                mostrar_texto(`lista original: [${lista_gerada}] \n`)
                let intervalo_ranking_dos_maiores_numeros = Number(obter_numero("Digite o intervalo_ranking_dos_maiores_numeros: "))
                let lista_dos_maiores_numeros = obter_os_maiores_numeros_em_uma_lista(lista_gerada, intervalo_ranking_dos_maiores_numeros)
                mostrar_texto(`\n mostrar ranking do(s) ${intervalo_ranking_dos_maiores_numeros} maior(es) numero(s) : [${lista_dos_maiores_numeros}] \n`)

                destacar_resposta_rodape()
                break;

            case 14:

                destacar_resposta_cabecalho()

                mostrar_texto(`lista original: [${lista_gerada}] \n`)
                let intervalo_ranking_dos_menores_numeros = Number(obter_numero("Digite o intervalo_ranking_dos_menores_numeros: "))
                let lista_dos_menores_numeros = obter_os_menores_numeros_em_uma_lista(lista_gerada, intervalo_ranking_dos_menores_numeros)
                mostrar_texto(`\n mostrar ranking do(s) ${intervalo_ranking_dos_menores_numeros} menor(es) numero(s) : [${lista_dos_menores_numeros}] \n`)

                destacar_resposta_rodape()
                break;

            case 15:

                destacar_resposta_cabecalho()

                mostrar_texto(`\nlista original: [${lista_gerada}] \n`)
                media_da_lista = calcular_media_dos_numeros_de_uma_lista(lista_gerada)
                let lista_de_numeros_menores_que_a_media = retornar_numeros_menores_e_menores_que_um_numero_N(lista_gerada, media_da_lista)[0]
                let lista_de_numeros_maiores_que_a_media = retornar_numeros_menores_e_menores_que_um_numero_N(lista_gerada, media_da_lista)[1]
                mostrar_texto(`lista => [${lista_gerada}] \n`)
                mostrar_texto(`media da lista => [${media_da_lista}] \n`)
                mostrar_texto(`lista de numeros menores que ${media_da_lista} => [${lista_de_numeros_menores_que_a_media}] \n`)
                mostrar_texto(`lista de numeros maiores que ${media_da_lista} => [${lista_de_numeros_maiores_que_a_media}] \n`)

                destacar_resposta_rodape()
                break;

            case 16:

                let lista_de_numeros_positivos_multiplos_de_dois = filtrar_os_numeros_positivos_multiplos_de_2_em_uma_lista(lista_gerada)
                let media_da_lista_de_numeros_positivos_multiplos_de_dois = calcular_media_dos_numeros_de_uma_lista(lista_de_numeros_positivos_multiplos_de_dois)
                lista_de_negativos = filtrar_uma_lista(lista_gerada, (numero) => numero < 0)
                let produto_acumulado_dos_numeros_negativos_reduzido_a_metade = (reduzir_elementos_de_uma_lista(lista_de_negativos, (produto_acumulado, valor_atual) => produto_acumulado * valor_atual)) / 2
                let somatorio_das_listas = media_da_lista_de_numeros_positivos_multiplos_de_dois + produto_acumulado_dos_numeros_negativos_reduzido_a_metade

                destacar_resposta_cabecalho()

                mostrar_texto(`\nlista original: ${lista_gerada}\n`)
                mostrar_texto(`lista_de_numeros_positivos_multiplos_de_dois: ${lista_de_numeros_positivos_multiplos_de_dois}`)
                mostrar_texto(`media_da_lista_de_numeros_positivos_multiplos_de_dois: ${media_da_lista_de_numeros_positivos_multiplos_de_dois} `)
                mostrar_texto(`lista_de_negativos: ${lista_de_negativos}`)
                mostrar_texto(`produto_acumulado_dos_numeros_negativos_reduzido_a_metade: ${produto_acumulado_dos_numeros_negativos_reduzido_a_metade} `)
                mostrar_texto(`somatorio_das_listas: ${somatorio_das_listas}`)

                destacar_resposta_rodape()
                break;

            case 17:

                mostrar_texto(`\nlista original: [${lista_gerada}]`)
                let opcao = obter_opcoes("\nDigite uma opcao", `
                1-ORDEM CRESCENTE DE TODOS OS ELEMENTOS
                2-APENAS OS ELEMENTOS PARES
                3-APENAS OS ELEMENTOS IMPARES
                4-APENAS OS ELEMENTOS POSITIVOS
                5-APENAS OS ELEMENTOS NEGATIVOS 
                6-APENAS OS ELEMENTOS MULTIPLOS DE N (POSITIVOS OU NEGATIVOS)

                `)

                lista_gerada = ordenar_numeros_com_quicksort(lista_gerada)
                lista_de_positivos = filtrar_uma_lista(lista_gerada, (numero) => numero % 2 == 0)
                lista_numeros_impares = filtrar_uma_lista(lista_gerada, (numero) => numero % 2 == 1)
                lista_de_positivos = filtrar_uma_lista(lista_gerada, (numero) => numero > 0)
                lista_de_negativos = filtrar_uma_lista(lista_gerada, (numero) => numero < 0)

                destacar_resposta_cabecalho()
                if (opcao == 1) {
                    mostrar_texto(`\nlista ORDEM CRESCENTE DE TODOS OS ELEMENTOS: [${lista_gerada}]`)
                } else if (opcao == 2) {
                    mostrar_texto(`\nlista APENAS OS ELEMENTOS PARES: [${lista_de_positivos}]`)
                } else if (opcao == 3) {
                    mostrar_texto(`\nlista APENAS OS ELEMENTOS IMPARES: [${lista_numeros_impares}]`)
                } else if (opcao == 4) {
                    mostrar_texto(`\nlista APENAS OS ELEMENTOS POSITIVOS: [${lista_de_positivos}]`)
                } else if (opcao == 5) {
                    mostrar_texto(`\nlista APENAS OS ELEMENTOS NEGATIVOS: [${lista_de_negativos}]`)
                } else if (opcao == 6) {
                    let numero_N = obter_numero("\nDigite um numero_N: ")
                    let lista_de_multiplos_de_N = filtrar_numeros_multiplos_de_um_numero_N_em_uma_lista(lista_gerada, numero_N)
                    mostrar_texto(`lista APENAS OS ELEMENTOS MULTIPLOS DE ${numero_N} (POSITIVOS OU NEGATIVOS): [${lista_de_multiplos_de_N}]`)

                }
                destacar_resposta_rodape()
                break;

            case 18:

                mostrar_texto(`\nlista original: [${lista_gerada}]`)
                let opcao_2 = obter_opcoes("\nDigite uma opcao", `
                1-ORDEM CRESCENTE DE TODOS OS ELEMENTOS
                2-APENAS OS ELEMENTOS PARES
                3-APENAS OS ELEMENTOS IMPARES
                4-APENAS OS ELEMENTOS POSITIVOS
                5-APENAS OS ELEMENTOS NEGATIVOS 
                6-APENAS OS ELEMENTOS MULTIPLOS DE N (POSITIVOS OU NEGATIVOS)

                `)

                lista_gerada = inverter_elementos_de_uma_lista(ordenar_numeros_com_quicksort(lista_gerada))
                lista_de_positivos = filtrar_uma_lista(lista_gerada, (numero) => numero % 2 == 0)
                lista_numeros_impares = filtrar_uma_lista(lista_gerada, (numero) => numero % 2 == 1)
                lista_de_positivos = filtrar_uma_lista(lista_gerada, (numero) => numero > 0)
                lista_de_negativos = filtrar_uma_lista(lista_gerada, (numero) => numero < 0)

                destacar_resposta_cabecalho()
                if (opcao_2 == 1) {
                    mostrar_texto(`\nlista ORDEM DECRESCENTE DE TODOS OS ELEMENTOS: [${lista_gerada}]`)
                } else if (opcao_2 == 2) {
                    mostrar_texto(`\nlista ORDEM DECRESCENTE APENAS OS ELEMENTOS PARES: [${lista_de_positivos}]`)
                } else if (opcao_2 == 3) {
                    mostrar_texto(`\nlista ORDEM DECRESCENTE APENAS OS ELEMENTOS IMPARES: [${lista_numeros_impares}]`)
                } else if (opcao_2 == 4) {
                    mostrar_texto(`\nlista ORDEM DECRESCENTE APENAS OS ELEMENTOS POSITIVOS: [${lista_de_positivos}]`)
                } else if (opcao_2 == 5) {
                    mostrar_texto(`\nlista ORDEM DECRESCENTE APENAS OS ELEMENTOS NEGATIVOS: [${lista_de_negativos}]`)
                } else if (opcao_2 == 6) {
                    let numero_N = obter_numero("Digite um numero_N: ")
                    let lista_de_multiplos_de_N = filtrar_numeros_multiplos_de_um_numero_N_em_uma_lista(lista_gerada, numero_N)
                    mostrar_texto(`\nlista ORDEM DECRESCENTE APENAS OS ELEMENTOS MULTIPLOS DE ${numero_N} (POSITIVOS OU NEGATIVOS): [${lista_de_multiplos_de_N}]`)

                }

                destacar_resposta_rodape()
                break;

            case 19:

                mostrar_texto(`\nlista original: [${lista_gerada}]`)
                let pedir_numero_N = Number(obter_numero("Digite um numero N: "))
                let pedir_numero_M = Number(obter_numero("Digite um numero M: "))
                let lista_sem_multiplos_de_M_e_N = filtrar_nao_multiplos_de_N_e_M_em_uma_lista(lista_gerada, pedir_numero_N, pedir_numero_M)

                destacar_resposta_cabecalho()
                mostrar_texto(`\nlista sem multiplos de ${pedir_numero_N} e ${pedir_numero_M}: [${lista_sem_multiplos_de_M_e_N}]  `)
                destacar_resposta_rodape()
                break;

            default:
                break;
        }


        //SAIDA 
    }
}
main()