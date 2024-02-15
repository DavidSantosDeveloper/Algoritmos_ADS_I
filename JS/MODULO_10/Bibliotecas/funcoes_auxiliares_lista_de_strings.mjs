import { question } from 'readline-sync'
import { mostrar_texto } from "./funcoes_entrada_saida.mjs";
import { inverter_texto, verifica_se_o_texto_nao_usa_os_caracteres, verifica_se_o_texto_usa_apenas_os_caracteres, verificaSeEhLetra, quebrar_texto, contar_tamanho_do_texto } from "./funcoes_string.mjs";
import { contar_tamanho_da_lista, inverter_elementos_de_uma_lista, verifica_se_um_elemento_esta_em_uma_lista } from "../Bibliotecas/funcoes_array.mjs"
import { converterTextoMinusculoEmMaiusculo } from "../Bibliotecas/funcoes_string.mjs"
//------->>>>>>>>>>>>> CRIPTOGRAFIA <<<<<<<<<<<<<<<<---------------
// # QUESTAO (1) 
export function criptografaFraseV1(frase) {
    let frase_criptografada = ''
    let frase_invertida = inverter_texto(frase)
        //FAIL FAST
    for (const caractere_atual of frase_invertida) {
        if (verificaSeEhLetra(caractere_atual)) {
            if (verifica_se_o_texto_nao_usa_os_caracteres(caractere_atual, 'aeiou', true)) {
                frase_criptografada += '#'
            } else {
                frase_criptografada += caractere_atual
            }

        } else {
            frase_criptografada += caractere_atual
        }
    }
    return frase_criptografada
}

// # QUESTAO (2) 
export function mostrar_todos_caracteres_em_sequencia(frase) {
    for (const caractere_atual of frase) {
        mostrar_texto(caractere_atual)
    }
}

// # QUESTAO (5) 
export function mes_em_extenso(data) {
    let data_dia_mes_ano = quebrar_texto(data, "-")
    let mes_numero = data_dia_mes_ano[1]
    let mes_por_extenso
    let meses = ['Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    if (mes_numero == 1) {
        mes_por_extenso = meses[0]
    } else if (mes_numero == 2) {
        mes_por_extenso = meses[1]
    } else if (mes_numero == 3) {
        mes_por_extenso = meses[2]
    } else if (mes_numero == 4) {
        mes_por_extenso = meses[3]
    } else if (mes_numero == 5) {
        mes_por_extenso = meses[4]
    } else if (mes_numero == 6) {
        mes_por_extenso = meses[5]
    } else if (mes_numero == 7) {
        mes_por_extenso = meses[6]
    } else if (mes_numero == 8) {
        mes_por_extenso = meses[7]
    } else if (mes_numero == 9) {
        mes_por_extenso = meses[8]
    } else if (mes_numero == 10) {
        mes_por_extenso = meses[9]
    } else if (mes_numero == 11) {
        mes_por_extenso = meses[10]
    } else if (mes_numero == 12) {
        mes_por_extenso = meses[11]
    }
    return mes_por_extenso
}

// # QUESTAO (6) 
export function numero_por_extenso(numero) {
    let numero_por_extenso = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove']
    for (const indice_atual in numero_por_extenso) {
        if (numero == Number(indice_atual)) {
            numero_por_extenso = numero_por_extenso[Number(indice_atual)]
        }
    }
    return numero_por_extenso
}

export function conjugacao_ER_dos_verbos_presente(verbo_er) {
    let radical_do_verbo = ''
    let todas_as_conjugacoes = []
    for (let indice_atual = 0; indice_atual < contar_tamanho_do_texto(verbo_er) - 2; indice_atual++) {
        radical_do_verbo += verbo_er[indice_atual]
    }

    todas_as_conjugacoes.push(`EU  ${radical_do_verbo}o`)
    todas_as_conjugacoes.push(`TU  ${radical_do_verbo}es`)
    todas_as_conjugacoes.push(`ELE/ELA  ${radical_do_verbo}e`)
    todas_as_conjugacoes.push(`NOS  ${radical_do_verbo}emos`)
    todas_as_conjugacoes.push(`VOS  ${radical_do_verbo}eis`)
    todas_as_conjugacoes.push(`ELES /ELAS  ${radical_do_verbo}em`)

    return todas_as_conjugacoes

}

// # QUESTAO (8)

export function mostrar_horario(string_horario, caractere_de_separacao) {
    let horario = quebrar_texto(string_horario, caractere_de_separacao)
    let hora = horario[0]
    let minutos = horario[1]
    let segundos = horario[2]
    return `${hora} hora(s) ${minutos} minuto(s) ${segundos} segundo(s)`
}

// # QUESTAO (10)

export function verifica_se_eh_palindromona(palavra) {
    let palavra_reversa = inverter_texto(palavra)
    if (palavra == palavra_reversa) {
        return true
    } else {
        return false
    }
}

// # QUESTAO (11)

export function contar_numero_de_palavras(texto) {
    let numero_de_palavras = 1
    for (const indice_atual in texto) {
        if (texto[indice_atual] == ' ' && texto[Number(indice_atual) - 1] != " ") {
            numero_de_palavras++
        }
    }
    return numero_de_palavras
}

// # QUESTAO (12)

export function nome_no_formato_de_aeroporto(texto) {
    let partes_do_nome = []
    let parte_atual = ''
    for (const indice_atual in texto) {
        if (texto[indice_atual] == ' ' && texto[Number(indice_atual) - 1] != ' ') {
            partes_do_nome.push(parte_atual)
            parte_atual = ''
        } else if (texto[Number(indice_atual) + 1] == undefined) {
            parte_atual += texto[indice_atual]
            partes_do_nome.push(parte_atual)
        } else {
            parte_atual += texto[indice_atual]
        }
    }
    console.log(partes_do_nome)
    return [partes_do_nome[0], partes_do_nome[contar_tamanho_da_lista(partes_do_nome) - 1]]
}
// # QUESTAO (13)
export function nome_no_padrao_abnt(nome) {
    let nome_em_abnt = ''
    let partes_do_nome = []
    let parte_atual = ''
    for (const indice_atual in nome) {
        if (nome[indice_atual] == ' ' && nome[Number(indice_atual) - 1] != ' ') {

            partes_do_nome.push(parte_atual)
            parte_atual = ''
        } else if (nome[Number(indice_atual) + 1] == undefined) {
            parte_atual += nome[indice_atual]
            partes_do_nome.push(parte_atual)
            parte_atual = ''
        } else {
            parte_atual += nome[indice_atual]
        }
    }
    partes_do_nome = inverter_elementos_de_uma_lista(partes_do_nome)

    for (const indice_atual in partes_do_nome) {
        if (Number(indice_atual) == 0) {
            for (const caractere_atual of partes_do_nome[Number(indice_atual)]) {
                nome_em_abnt += converterTextoMinusculoEmMaiusculo(caractere_atual)
            }
            nome_em_abnt += ' , '
        } else {
            nome_em_abnt += converterTextoMinusculoEmMaiusculo(partes_do_nome[indice_atual][0]) + '. '
        }

    }


    return nome_em_abnt

}
// # QUESTAO (14)
export function gerarLogin(nome_de_usuario) {
    let partes_do_nome = []
    let parte_atual = ''
    let login = ''
    let senha = ''
    for (const indice_atual in nome_de_usuario) {
        if (nome_de_usuario[indice_atual] == ' ' && nome_de_usuario[Number(indice_atual) - 1] != ' ') {
            partes_do_nome.push(parte_atual)
            parte_atual = ''
        } else if (Number(indice_atual) == contar_tamanho_do_texto(nome_de_usuario) - 1) {
            parte_atual += nome_de_usuario[indice_atual]
            partes_do_nome.push(parte_atual)
            parte_atual = ''
        } else {
            parte_atual += nome_de_usuario[indice_atual]
        }
    }
    console.log(partes_do_nome)

    for (const parte_do_nome_atual of partes_do_nome) {
        login += parte_do_nome_atual[0]
        let numero_aleatorio = Math.floor(Math.random() * 10)
        senha += parte_do_nome_atual[0] + numero_aleatorio
    }
    console.log([login, senha])
    return [login, senha]
}

// # QUESTAO (15)
export function mostrar_texto_vertical(numero_maximo_da_coluna, texto_mostrado) {
    let texto_atual = ''
    for (let linha_atual = 1; linha_atual <= numero_maximo_da_coluna; linha_atual++) {
        texto_atual += ' ' + texto_mostrado
        console.log(texto_atual)

    }
}

// # QUESTAO (16)
export function mostrar_texto_diagonal(texto_mostrado, quantidade_de_vezes) {
    let texto_atual = ''
    for (let linha_atual = 1; linha_atual <= quantidade_de_vezes; linha_atual++) {
        texto_atual = ''
        texto_atual += repete_caractere_N_vezes(' ', contar_tamanho_do_texto(texto_mostrado) * linha_atual) + texto_mostrado
        mostrar_texto(texto_atual)

    }

}
export function repete_caractere_N_vezes(caractere, quantidade_de_vezes) {
    let texto_formado = ''
    for (let numero_de_acrecimos = 1; numero_de_acrecimos <= quantidade_de_vezes; numero_de_acrecimos++) {
        texto_formado += caractere
    }
    return texto_formado
}

// # QUESTAO (17)

// # QUESTAO (19)
export function obter_numero_binario(label) {
    let numero = question(label)
    while ((isNaN(Number(numero)) == true || numero == '')) {
        numero = question(label)
    }
    while (verifica_se_o_texto_usa_apenas_os_caracteres(numero, '01') == false) {
        mostrar_texto("Dados invalidos!!!")
        numero = question(label)
    }


    return numero
}

export function converter_numero_de_binario_para_decimal(numero_binario) {
    let numero_binario_invertido = inverter_texto(numero_binario)
    let numero_em_decimal = 0
    for (const indice_atual in numero_binario_invertido) {
        numero_em_decimal += Number(numero_binario_invertido[indice_atual]) * (2 ** Number(indice_atual))
    }
    return numero_em_decimal
}

// # QUESTAO (20)
export function criptografaFraseV2(frase) {
    let chave_descriptografia = []
    let frase_criptografada = ''
    for (const indice_atual in frase) {
        if (verifica_se_o_texto_nao_usa_os_caracteres(frase[indice_atual], 'aeiou', true) == false) {
            chave_descriptografia.push([frase[indice_atual], Number(indice_atual)])
        } else {
            frase_criptografada += frase[indice_atual]
        }
    }
    console.log([frase_criptografada, chave_descriptografia])
    return [frase_criptografada, chave_descriptografia]
}

export function descriptografaFraseV2(frase, chave_descriptografia) {
    let frase_descriptografada = ''
    for (let indice_atual = 0; indice_atual < contar_tamanho_do_texto(frase) + contar_tamanho_da_lista(chave_descriptografia); indice_atual++) {
        if (verifica_se_um_elemento_esta_em_uma_lista(chave_descriptografia[indice_atual], Number(indice_atual))) {
            frase_descriptografada += chave_descriptografia[indice_atual][0]
        } else if (frase[indice_atual] == undefined) {
            continue
        } else {
            frase_descriptografada += frase[indice_atual]
        }

    }
    return frase_descriptografada

}