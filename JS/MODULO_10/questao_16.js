import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { mostrar_texto_diagonal } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let nome_de_usuario = obter_numero("Digite um nome =>  ");
    //PROCESSAMENTO

    //SAIDA
    mostrar_texto(mostrar_texto_diagonal(nome_de_usuario, 15))

}
main()