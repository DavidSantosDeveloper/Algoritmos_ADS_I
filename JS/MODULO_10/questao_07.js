import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { conjugacao_ER_dos_verbos_presente } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let verbo_er = obter_numero("Digite uma numero ) ");
    //PROCESSAMENTO
    let conjugacao_dos_verbos = conjugacao_ER_dos_verbos_presente(verbo_er);
    //SAIDA
    mostrar_texto(`conjugacao_dos_verbos => ${conjugacao_dos_verbos}`);

}
main()