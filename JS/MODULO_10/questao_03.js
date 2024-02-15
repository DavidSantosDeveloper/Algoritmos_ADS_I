import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import { remover_espacos_do_texto } from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import {} from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let frase = obter_texto('Digite uma frase: ');
    //PROCESSAMENTO
    let frase_sem_espacos = remover_espacos_do_texto(frase);
    //SAIDA
    mostrar_texto(`frase sem espaco => ${frase_sem_espacos}`)
}
main()