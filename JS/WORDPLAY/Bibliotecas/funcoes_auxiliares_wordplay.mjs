import { contar_tamanho_da_lista, contar_ocorrencia_de_um_elemento_em_uma_lista, verifica_se_um_elemento_esta_em_uma_lista } from './funcoes_array.mjs'
import { mostrar_texto } from './funcoes_entrada_saida.mjs';
import { contar_tamanho_do_texto, verificaSeEhLetra, verifica_se_o_texto_nao_usa_os_caracteres, verifica_se_o_texto_usa_apenas_os_caracteres, contem_caractere, verificaSeCaractereEstaEmCaixaAlta, verificaSeCaractereEstaEmCaixaBaixa, converterTextoMaiusculoEmMinusculo, verifica_se_caracteres_sao_iguais } from './funcoes_string.mjs';

export function calcular_porcentagem_do_total(parte, total) {
    return Number(((parte / total) * 100).toFixed(2))
}

export function quebrar_texto_V2(texto = '', caractere_de_separacao) {
    return texto.split(caractere_de_separacao)
}


export function mostrar_todas_as_palavras(lista) {
    mostrar_texto(lista)
    mostrar_texto(`QUANTIDADE DE PALAVRAS => ${contar_tamanho_da_lista(lista)}`)
}

export function mostrar_palavras_com_numero_minimo_de_letras(lista = [], numero_minimo_de_palavras) {
    let quantidade_de_letras_na_palavra = 0
    let lista_de_palavras_com_numero_minimo_de_letras = []

    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista); indice_atual++) {
        console.log(`carregando os dados... ${calcular_porcentagem_do_total(indice_atual+1,contar_tamanho_da_lista(lista))} %`)
        for (const caractere_atual of lista[indice_atual]) {
            if (contar_tamanho_do_texto(lista[indice_atual]) >= numero_minimo_de_palavras) {
                lista_de_palavras_com_numero_minimo_de_letras.push(lista[indice_atual])
            }
        }


    }

    mostrar_texto(lista_de_palavras_com_numero_minimo_de_letras)
    mostrar_texto(`numero de palavras: ${contar_tamanho_da_lista(lista_de_palavras_com_numero_minimo_de_letras)} palavras`)
    mostrar_texto(`Porcetagem do total: ${calcular_porcentagem_do_total(contar_tamanho_da_lista(lista_de_palavras_com_numero_minimo_de_letras),contar_tamanho_da_lista(lista))} %`)
}


export function mostrar_palavras_que_nao_contem_letras(lista = []) {
    let lista_de_palavras_que_nao_contem_letras = []
    let quantidade_de_letras_na_palavra = 0


    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista); indice_atual++) {
        quantidade_de_letras_na_palavra = 0

        for (const caractere_atual of lista[indice_atual]) {
            console.log(`caregando o resultado... ${calcular_porcentagem_do_total(indice_atual+1,contar_tamanho_da_lista(lista))} %`)
            if (verificaSeEhLetra(caractere_atual)) {
                quantidade_de_letras_na_palavra++
            }

        }
        if (quantidade_de_letras_na_palavra == 0) {
            lista_de_palavras_que_nao_contem_letras.push(lista[indice_atual])
        }

    }

    mostrar_texto(lista_de_palavras_que_nao_contem_letras)
    mostrar_texto(`numero de palavras: ${contar_tamanho_da_lista(lista_de_palavras_que_nao_contem_letras)} palavras`)
    mostrar_texto(`Porcetagem do total: ${calcular_porcentagem_do_total(contar_tamanho_da_lista(lista_de_palavras_que_nao_contem_letras),contar_tamanho_da_lista(lista))} %`)


}

export function mostrar_palavras_que_contem_todas_as_letras(lista) {
    let lista_de_palavras_que_contem_todas_as_letras = []

    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista); indice_atual++) {
        console.log(`caregando o resultado... ${calcular_porcentagem_do_total(indice_atual+1,contar_tamanho_da_lista(lista))} %`)
        if (verifica_se_o_texto_usa_apenas_os_caracteres(lista[indice_atual], 'abcdefghijklmnopqrstuvxywz', true)) {
            lista_de_palavras_que_contem_todas_as_letras.push(lista[indice_atual])
        }

    }

    mostrar_texto(lista_de_palavras_que_contem_todas_as_letras)
    mostrar_texto(`numero de palavras: ${contar_tamanho_da_lista(lista_de_palavras_que_contem_todas_as_letras)} palavras`)
    mostrar_texto(`Porcetagem do total: ${calcular_porcentagem_do_total(contar_tamanho_da_lista(lista_de_palavras_que_contem_todas_as_letras),contar_tamanho_da_lista(lista))} %`)


}

export function mostrar_palavras_que_somente_contem_letras(lista) {

    let lista_de_palavras_que_somente_contem_letras = []
    let quantidade_de_letras_na_palavra_atual = 0
    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista); indice_atual++) {
        quantidade_de_letras_na_palavra_atual = 0
        console.log(`caregando o resultado... ${calcular_porcentagem_do_total(indice_atual+1,contar_tamanho_da_lista(lista))} %`)
        for (const caractere_atual of lista[indice_atual]) {
            if (verificaSeEhLetra(caractere_atual)) {
                quantidade_de_letras_na_palavra_atual++
            }
        }
        if (quantidade_de_letras_na_palavra_atual == contar_tamanho_do_texto(lista[indice_atual])) {
            lista_de_palavras_que_somente_contem_letras.push(lista[indice_atual])
        }

    }

    mostrar_texto(lista_de_palavras_que_somente_contem_letras)
    mostrar_texto(`numero de palavras: ${contar_tamanho_da_lista(lista_de_palavras_que_somente_contem_letras)} palavras`)
    mostrar_texto(`Porcetagem do total: ${calcular_porcentagem_do_total(contar_tamanho_da_lista(lista_de_palavras_que_somente_contem_letras),contar_tamanho_da_lista(lista))} %`)


}

export function mostrar_palavras_que_tem_mais_vogais_que_consoantes(lista) {
    let lista_de_palavras_que_tem_mais_vogais_que_consoantes = []

    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista); indice_atual++) {
        quantidade_de_vogais_na_palavra_atual = 0
        quantidade_de_consoantes_na_palavra_atual = 0
        console.log(`caregando o resultado... ${calcular_porcentagem_do_total(indice_atual+1,contar_tamanho_da_lista(lista))} %`)
        for (const caractere_atual of lista[indice_atual]) {
            if (contem_caractere(caractere_atual, 'aeiou', true)) {
                quantidade_de_vogais_na_palavra_atual++
            } else if (contem_caractere(caractere_atual, 'bcdfghjklmnpqrstvxywz', true)) {
                quantidade_de_consoantes_na_palavra_atual++
            }
        }
        if (quantidade_de_vogais_na_palavra_atual > quantidade_de_consoantes_na_palavra_atual) {
            lista_de_palavras_que_tem_mais_vogais_que_consoantes.push(lista[indice_atual])
        }

    }

    mostrar_texto(lista_de_palavras_que_tem_mais_vogais_que_consoantes)
    mostrar_texto(`numero de palavras: ${contar_tamanho_da_lista(lista_de_palavras_que_tem_mais_vogais_que_consoantes)} palavras`)
    mostrar_texto(`Porcetagem do total: ${calcular_porcentagem_do_total(contar_tamanho_da_lista(lista_de_palavras_que_tem_mais_vogais_que_consoantes),contar_tamanho_da_lista(lista))} %`)


}


export function mostrar_palavras_que_sejam_palindromas(lista) {
    let lista_de_palavras_palindromas = []

    for (let indice_da_palavra_atual = 0; indice_da_palavra_atual < contar_tamanho_da_lista(lista); indice_da_palavraatual++) {
        let palavra_atual_reversa = ''
        console.log(`caregando o resultado... ${calcular_porcentagem_do_total(indice_da_palavra_atual+1,contar_tamanho_da_lista(lista))} %`)
        for (let indice_do_caractere_atual = contar_tamanho_do_texto(lista[indice_da_palavra_atual]) - 1; indice_do_caractere_atual >= 0; indice_do_caractere_atual--) {
            palavra_atual_reversa += lista[indice_da_palavra_atual][indice_do_caractere_atual]

        }
        if (palavra_atual_reversa == lista[indice_da_palavra_atual]) {
            lista_de_palavras_palindromas.push(lista[indice_da_palavra_atual])
        }

    }

    mostrar_texto(lista_de_palavras_palindromas)
    mostrar_texto(`numero de palavras: ${contar_tamanho_da_lista(lista_de_palavras_palindromas)} palavras`)
    mostrar_texto(`Porcetagem do total: ${calcular_porcentagem_do_total(contar_tamanho_da_lista(lista_de_palavras_palindromas),contar_tamanho_da_lista(lista))} %`)

}

export function verifica_se_uma_palavra_eh_abcedaria(palavra) {
    let letras_unicas = []
    let booleano_eh_palavra_abcdaria = false
    let palavra_em_minuscula = converterTextoMaiusculoEmMinusculo(palavra)

    for (const indice_caractere_atual in palavra_em_minuscula) {
        if (verificaSeEhLetra(palavra_em_minuscula[indice_caractere_atual])) {
            if (verifica_se_um_elemento_esta_em_uma_lista(letras_unicas, indice_caractere_atual)) {
                booleano_eh_palavra_abcdaria = false
                return booleano_eh_palavra_abcdaria
            } else {
                letras_unicas.push(palavra_em_minuscula[indice_caractere_atual])
            }

        } else {
            return false
        }
    }
    if (contar_tamanho_da_lista(letras_unicas) == 26) {
        booleano_eh_palavra_abcdaria = true
    } else {
        booleano_eh_palavra_abcdaria = false
    }

    return booleano_eh_palavra_abcdaria

}

export function mostrar_palavras_abcedarias(lista) {
    let lista_de_palavras_abcedarias = []

    for (let indice_da_palavra_atual = 0; indice_da_palavra_atual < contar_tamanho_da_lista(lista); indice_da_palavra_atual++) {
        console.log(`caregando o resultado... ${calcular_porcentagem_do_total(indice_da_palavra_atual+1,contar_tamanho_da_lista(lista))} %`)
        for (const palavra_atual of lista[indice_da_palavra_atual]) {
            if (verifica_se_uma_palavra_eh_abcedaria(palavra_atual)) {
                lista_de_palavras_abcedarias.push(palavra_atual)
            }
        }
    }

    mostrar_texto(lista_de_palavras_abcedarias)
    mostrar_texto(`numero de palavras: ${contar_tamanho_da_lista(lista_de_palavras_abcedarias)} palavras`)
    mostrar_texto(`Porcetagem do total: ${calcular_porcentagem_do_total(contar_tamanho_da_lista(lista_de_palavras_abcedarias),contar_tamanho_da_lista(lista))} %`)


}

export function mostrar_palavras_que_comecam_e_terminam_com_a_mesma_letra(lista) {
    let lista_de_palavras_que_comecam_e_terminam_com_a_mesma_letra = []

    for (let indice_da_palavra_atual = 0; indice_da_palavra_atual < contar_tamanho_da_lista(lista); indice_da_palavra_atual++) {

        console.log(`caregando o resultado... ${calcular_porcentagem_do_total(indice_da_palavra_atual+1,contar_tamanho_da_lista(lista))} %`)
        if (verifica_se_caracteres_sao_iguais(lista[indice_da_palavra_atual][0], lista[indice_da_palavra_atual][contar_tamanho_do_texto(lista[indice_da_palavra_atual]) - 1], true)) {
            lista_de_palavras_que_comecam_e_terminam_com_a_mesma_letra.push(lista[indice_da_palavra_atual])
        }
    }

    mostrar_texto(lista_de_palavras_que_comecam_e_terminam_com_a_mesma_letra)
    mostrar_texto(`numero de palavras: ${contar_tamanho_da_lista(lista_de_palavras_que_comecam_e_terminam_com_a_mesma_letra)} palavras`)
    mostrar_texto(`Porcetagem do total: ${calcular_porcentagem_do_total(contar_tamanho_da_lista(lista_de_palavras_que_comecam_e_terminam_com_a_mesma_letra),contar_tamanho_da_lista(lista))} %`)
}