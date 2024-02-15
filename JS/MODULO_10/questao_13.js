import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { nome_no_padrao_abnt } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let nome = 'Davi Sousa' //obter_numero("Digite um nome =>  ");
        //PROCESSAMENTO
    let nome_em_abnt = nome_no_padrao_abnt(nome);
    //SAIDA
    mostrar_texto(`nome_em_abnt =>${nome_em_abnt} `);

}
main()