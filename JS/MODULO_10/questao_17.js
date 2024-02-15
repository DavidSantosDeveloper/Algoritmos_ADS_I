import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import { obter_substring_de_um_texto } from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import {} from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let texto = obter_numero("Digite um texto =>  ");
    let posicao_inicial = obter_numero("Digite a posicao inicial =>  ");
    let posicao_final = obter_numero("Digite a posicao final =>  ");
    //PROCESSAMENTO
    let substring_gerada = obter_substring_de_um_texto(texto, posicao_inicial, posicao_final);
    //SAIDA
    mostrar_texto(`substring =>${substring_gerada} `);

}
main()