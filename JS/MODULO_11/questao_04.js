import { adicionar_um_elemento_a_uma_lista, interseccao_de_2_listas, inverter_elementos_de_uma_lista } from './Bibliotecas/funcoes_array.mjs'
import { juntar_2_listas } from './Bibliotecas/funcoes_array.mjs'
import { mostrar_texto, obter_numero, obter_texto } from './Bibliotecas/funcoes_entrada_saida.mjs'
import {} from './Bibliotecas/funcoes_string.mjs'
import {} from './Bibliotecas/funcoes_matematicas.mjs'
import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'

function main() {
    cabecalho('APP JUNTAR e INTERSECCAO 2 LISTAS');
    // ENTRADA

    let numero_de_elementos = obter_numero('Digite o numero de elementos da lista A: ');
    let lista_de_elementos = []
    for (let elemento_atual = 1; elemento_atual <= numero_de_elementos; elemento_atual++) {
        let valor_atual = obter_texto(`Digite um valor para a ${elemento_atual} posicao :`)
        adicionar_um_elemento_a_uma_lista(lista_de_elementos, valor_atual)

    }

    let numero_de_elementos_lista_b = obter_numero('Digite o numero de elementos da lista B: ');
    let lista_de_elementos_B = []
    for (let elemento_atual = 1; elemento_atual <= numero_de_elementos_lista_b; elemento_atual++) {
        let valor_atual = obter_texto(`Digite um valor para a ${elemento_atual} posicao :`)
        adicionar_um_elemento_a_uma_lista(lista_de_elementos_B, valor_atual)

    }
    //PROCESSAMENTO
    let listas_A_e_B_unidas = juntar_2_listas(lista_de_elementos, lista_de_elementos_B);
    let lista_A_e_B_interseccao = interseccao_de_2_listas(lista_de_elementos, lista_de_elementos_B)

    //SAIDA 
    mostrar_texto(`\nlista original A: ${lista_de_elementos}`)
    mostrar_texto(`lista original B: ${lista_de_elementos_B}`)
    mostrar_texto(`lista unida: ${listas_A_e_B_unidas}`)
    mostrar_texto(`lista interseccao: ${lista_A_e_B_interseccao}`)
}
main()