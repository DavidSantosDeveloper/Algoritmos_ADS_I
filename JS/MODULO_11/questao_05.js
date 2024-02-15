import { adicionar_um_elemento_a_uma_lista, inverter_elementos_de_uma_lista } from './Bibliotecas/funcoes_array.mjs'
import { juntar_2_listas } from './Bibliotecas/funcoes_array.mjs'
import { mostrar_texto, obter_numero, obter_texto } from './Bibliotecas/funcoes_entrada_saida.mjs'
import {} from './Bibliotecas/funcoes_string.mjs'
import {} from './Bibliotecas/funcoes_matematicas.mjs'
import { calcular_expressaoV1 } from './Bibliotecas/funcoes_auxiliares_lista_de_array.mjs'
import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'

function main() {
    cabecalho('APP expressao resultado -para vetor de >=21 posicoes');
    // ENTRADA
    let numero_de_elementos = obter_numero('Digite o numero de elementos da lista A: ');
    let lista_de_elementos = []
    for (let elemento_atual = 1; elemento_atual <= numero_de_elementos; elemento_atual++) {
        let valor_atual = obter_texto(`Digite um valor para a ${elemento_atual} posicao :`)
        adicionar_um_elemento_a_uma_lista(lista_de_elementos, Number(valor_atual))

    }

    //PROCESSAMENTO
    let resultado_expressao = calcular_expressaoV1(lista_de_elementos);

    //SAIDA 
    mostrar_texto(`\n resultado_expressao: ${resultado_expressao}`)

}
main()