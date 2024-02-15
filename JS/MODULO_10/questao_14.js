import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_numero, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { gerarLogin } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let nome_de_usuario = 'Davi Sousa' //obter_numero("Digite um nome =>  ");
        //PROCESSAMENTO
    let dados_de_acesso = gerarLogin(nome_de_usuario);
    let login_do_usuario = dados_de_acesso[0]
    let senha_do_usuario = dados_de_acesso[1]
        //SAIDA
    mostrar_texto(`----DADOS DE ACESSO----\n  => LOGIN -->${login_do_usuario} SENHA -->${senha_do_usuario} `);

}
main()