import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { numero_por_extenso } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let numero = obter_numero("Digite uma numero ) ");
    //PROCESSAMENTO
    let numero_em_extenso = numero_por_extenso(numero);
    //SAIDA
    mostrar_texto(`numero_por_extenso => ${numero_em_extenso}`);

}
main()