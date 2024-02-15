import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { nome_no_formato_de_aeroporto } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let nome = obter_numero("Digite um nome =>  ");
    //PROCESSAMENTO
    let numero_no_formato_aeroporto = nome_no_formato_de_aeroporto(nome);
    console.log(numero_no_formato_aeroporto)
        //SAIDA
    mostrar_texto(`numero_no_formato_aeroporto =>${numero_no_formato_aeroporto[1]}/${numero_no_formato_aeroporto[0]} `);

}
main()