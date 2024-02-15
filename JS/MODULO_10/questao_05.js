import { cabecalho } from './Bibliotecas/funcoes_decoracao.mjs'
import { mostrar_texto, obter_texto } from "./Bibliotecas/funcoes_entrada_saida.mjs"
import {} from "./Bibliotecas/funcoes_matematicas.mjs"
import {} from "./Bibliotecas/funcoes_string.mjs"
import {} from "./Bibliotecas/funcoes_array.mjs"
import { mes_em_extenso } from './Bibliotecas/funcoes_auxiliares_lista_de_strings.mjs'

function main() {
    //ENTRADA
    let data = obter_texto("Digite uma data (DD-MM-AAAA) ");
    //PROCESSAMENTO
    let mes_em_extenso_da_data = mes_em_extenso(data);

    //SAIDA
    mostrar_texto(` mes_em_extenso_da_data=> ${mes_em_extenso_da_data}`);

}
main()