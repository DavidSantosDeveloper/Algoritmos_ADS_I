import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import { substituir_substring } from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { contar_numero_de_palavras } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let texto = obter_numero("Digite uma texto =>  ");
    //PROCESSAMENTO
    let numero_de_palavras = contar_numero_de_palavras(texto);
    //SAIDA
    mostrar_texto(`numero de palavras =>${numero_de_palavras} palavras`);

}
main()