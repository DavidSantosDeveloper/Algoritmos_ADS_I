import { quebrar_texto } from './Bibliotecas/funcoes_string.mjs'
import { obter_numero, obter_opcoes } from './Bibliotecas/funcoes_entrada_saida.mjs'
import { quebrar_texto_V2, mostrar_todas_as_palavras, mostrar_palavras_com_numero_minimo_de_letras, mostrar_palavras_que_nao_contem_letras, mostrar_palavras_que_contem_todas_as_letras, mostrar_palavras_que_somente_contem_letras, mostrar_palavras_que_tem_mais_vogais_que_consoantes, mostrar_palavras_que_sejam_palindromas, mostrar_palavras_abcedarias, mostrar_palavras_que_comecam_e_terminam_com_a_mesma_letra } from './Bibliotecas/funcoes_auxiliares_wordplay.mjs'
import { readFileSync } from 'fs'

function main() {

    //ENTRADA
    let arquivo = readFileSync('words.txt', "utf-8")
    let palavras = quebrar_texto_V2(arquivo, '\n')
    let menu = obter_opcoes('MENU', `                                  1- MOSTRAR TODAS AS PALAVRAS
                                    2-PALAVRAS MINIMO DE LETRAS
                                    3-PALAVRAS QUE NAO CONTEM LETRAS
                                    4-PALAVRAS QUE CONTEM AS LETRAS
                                    5-PALAVRAS QUE SO CONÑEM LETRAS
                                    6-PALAVRAS QUE CONTEM MAIS  VOGAIS QUE CONSOANTES
                                    7-PALAVRAS PALINDROMAS
                                    8-PALAVRAS ABCEDARIAS
                                    9-PALAVRAS COM MAIOR SOMA ASCII
                                    10-SOMATORIO ASCII DAS PALAVRAS DE TAMANHO MULTIPLO DE N
                                    11-CONTAR /LISTAR PALAVRAS QUE COMECAM COM A MESMA LETRA
                                    \n `)

    //PROCESSAMENTO
    switch (menu) {
        case 1:
            mostrar_todas_as_palavras(palavras)
            break;
        case 2:
            let numero_minimo_de_letras = Number(obter_numero('Digite o numero minimo de letras: '))
            mostrar_palavras_com_numero_minimo_de_letras(palavras, numero_minimo_de_letras)
            break;
        case 3:
            mostrar_palavras_que_nao_contem_letras(palavras)
            break;
        case 4:
            mostrar_palavras_que_contem_todas_as_letras(palavras)
            break;
        case 5:
            mostrar_palavras_que_somente_contem_letras(palavras)
            break;
        case 6:
            mostrar_palavras_que_tem_mais_vogais_que_consoantes(palavras)
            break;
        case 7:
            mostrar_palavras_que_sejam_palindromas(palavras)
            break;
        case 8:
            mostrar_palavras_abcedarias(palavras)
            break;
        case 9:
            console.log('nao entendi bem o que era pra fazer nessa opcao...')
            break;
        case 10:
            console.log('nao entendi bem o que era pra fazer nessa opcao...')
            break;
        case 11:
            mostrar_palavras_que_comecam_e_terminam_com_a_mesma_letra(palavras)
            break;
        default:
            break;
    }

    //SAIDA
}
main()