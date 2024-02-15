import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import { substituir_substring } from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { verifica_se_eh_palindromona } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let palavra = obter_numero("Digite uma palavra =>  ");
    //PROCESSAMENTO
    let resultado = verifica_se_eh_palindromona(palavra);
    //SAIDA
    mostrar_texto(`palavra eh palindroma =>${resultado}`);

}
main()