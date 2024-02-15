import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import { substituir_substring } from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import {} from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let senha = obter_numero("Digite a senha =>  ");
    //PROCESSAMENTO
    senha = substituir_substring(senha.toString(), senha.toString(), '*');
    //SAIDA
    mostrar_texto(`senha => ${senha}`);

}
main()