import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { mostrar_todos_caracteres_em_sequencia } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let frase = obter_texto('Digite um texto: ');
    //PROCESSAMENTO

    //SAIDA
    mostrar_todos_caracteres_em_sequencia(frase)
}
main()