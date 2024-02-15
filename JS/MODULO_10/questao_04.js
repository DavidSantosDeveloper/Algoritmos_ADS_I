import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import { multiplicar_caracteres_por_um_numero_N } from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import {} from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let frase = obter_texto("Digite uma frase");
    //PROCESSAMENTO
    let frase_com_caracteres_duplicados = multiplicar_caracteres_por_um_numero_N(frase, 2);

    //SAIDA
    mostrar_texto(`frase com caracteres duplicados => ${frase_com_caracteres_duplicados}`);

}
main()