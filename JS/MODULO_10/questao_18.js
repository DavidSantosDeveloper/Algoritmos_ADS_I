import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import { substituir_substring } from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import {} from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let texto_original = obter_numero("Digite o texto original =>  ");
    let substring_original = obter_numero("Digite a substring original=>  ");
    let ignore_case = obter_texto("Deseja ignorar a case? (S-SIM N-NAO)=>  ")
    let substring_substituta = obter_numero("Digite a substring substituta =>  ");
    if (ignore_case == 'S' || ignore_case == 's') {
        ignore_case == true
    } else {
        ignore_case = false
    }
    //PROCESSAMENTO
    let texto_modificado = substituir_substring(texto_original, substring_original, substring_substituta, ignore_case);
    //SAIDA
    mostrar_texto(`texto_modificado =>${texto_modificado} `);


}
main()