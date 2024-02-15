import fs from 'fs'
import { quebrar_texto } from './funcoes_string.mjs'

export function obter_os_dados_de_um_arquivo(nome_do_arquivo = "") {
    const dados = fs.readFileSync(nome_do_arquivo, 'utf-8')
    return dados
}

export function obter_os_dados_das_pessoas_que_estao_concorrendo_na_rifa() {
    const dados = fs.readFileSync("rifa.txt", 'utf-8')
    const dados_organizados_em_linha = quebrar_texto(dados, "\n")
    return dados_organizados_em_linha
}




export function obter_premios_cadrastrados() {
    const dados = obter_os_dados_de_um_arquivo("lista_de_premios.txt")
    const dados_organizados_em_linha = quebrar_texto(dados, "\n")
    return dados_organizados_em_linha
}

export function acessar_dados_brutos_dos_premios_cadrastrados() {
    const dados_brutos = obter_os_dados_de_um_arquivo('lista_de_premios.txt')
    return dados_brutos
}

export function cadrastrar_premio_na_rifa(premio_que_sera_cadrastrado = "") {

    let dados_atualizados = acessar_dados_brutos_dos_premios_cadrastrados() + "\n" + premio_que_sera_cadrastrado
    fs.writeFileSync('lista_de_premios.txt', dados_atualizados)

}






export function calcular_taxa_da_administracao(taxa_em_porcentagem = 0, valor_total = 0) {
    return (taxa_em_porcentagem / 100) * valor_total
}