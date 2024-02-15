import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { criptografaFraseV2, descriptografaFraseV2 } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let frase = obter_texto("Digite um nome =>  ");
    //PROCESSAMENTO
    let frase_criptografada = criptografaFraseV2(frase);
    let frase_descriptografada = descriptografaFraseV2(frase, frase_criptografada[1]);
    //SAIDA
    mostrar_texto(`frase_criptografada =>${frase_criptografada[0]} `);
    mostrar_texto(`frase_descriptografada =>${frase_descriptografada} `);

}
main()