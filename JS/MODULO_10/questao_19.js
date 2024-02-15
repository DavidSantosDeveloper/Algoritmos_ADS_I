import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { obter_numero_binario, converter_numero_de_binario_para_decimal } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let numero_binario = obter_numero_binario("Digite um nome =>  ");
    //PROCESSAMENTO
    let numero_em_decimal = converter_numero_de_binario_para_decimal(numero_binario);
    //SAIDA
    mostrar_texto(`numero_em_decimal =>${numero_em_decimal} `);

}
main()