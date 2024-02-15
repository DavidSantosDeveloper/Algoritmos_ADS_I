// CONVERTER PARA CAIXA DO TEXTO -FUNCOES PRINCIPAIS

export function converterTextoMinusculoEmMaiusculo(texto) {
    let caracteres_em_caixa_alta = ''
    for (let caractere of texto) {
        //FAIL FAST
        if (verificaSeCaractereEstaEmCaixaAlta(caractere) || verificaSeEhLetra(caractere) == false) {
            caracteres_em_caixa_alta += caractere
        } else {
            caracteres_em_caixa_alta += String.fromCharCode(caractere.charCodeAt() - 32)
        }
    }
    return caracteres_em_caixa_alta
}

export function converterTextoMaiusculoEmMinusculo(texto) {
    let texto_em_caixa_baixa = ''
    for (let caractere of texto) {
        //FAIL FAST
        if (verificaSeCaractereEstaEmCaixaBaixa(caractere) || verificaSeEhLetra(caractere) == false) {
            texto_em_caixa_baixa += caractere
        } else {
            texto_em_caixa_baixa += String.fromCharCode(caractere.charCodeAt() + 32)
        }
    }
    return texto_em_caixa_baixa
}

export function verificaSeCaractereEstaEmCaixaAlta(caractere) {
    if (caractere.charCodeAt() >= 65 && caractere.charCodeAt() <= 90) {
        return true
    } else {
        return false
    }
}

export function verificaSeEhLetra(caractere = '') {
    let caractere_em_codico_asc2 = caractere.charCodeAt()
    if ((caractere_em_codico_asc2 >= 65 && caractere_em_codico_asc2 <= 90) || (caractere_em_codico_asc2 >= 97 && caractere_em_codico_asc2 <= 122)) {
        return true
    } else {
        return false
    }
}

export function verificaSeCaractereEstaEmCaixaBaixa(caractere) {
    if (caractere.charCodeAt() >= 97 && caractere.charCodeAt() <= 122) {
        return true
    } else {
        return false
    }

}


//------->>>>>>>>>>>>> MOSTRAR DADOS <<<<<<<<<<<<<<<<---------------
export function mostrar_caractere_por_linha(titulo, texto) {
    return `>>>>>>>>>>${titulo}<<<<<<<<<<<< \n ${texto}`
}
export function mostrar_palavra_por_linha(titulo, texto) {
    return `>>>>>>>>>>${titulo}<<<<<<<<<<<< \n ${texto}`
}


//------->>>>>>>>>>>>> SEPARAR E JUNTAR TEXTO <<<<<<<<<<<<<<<<---------------
export function quebrar_texto(texto, caractere_de_separacao) {
    let lista_das_partes_do_texto_separadas = []
    let parte_atual = ''
    let numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0

    for (let indice_texto_atual = 0; indice_texto_atual < contar_tamanho_do_texto(texto); indice_texto_atual++) {
        if (texto[indice_texto_atual] == caractere_de_separacao) {
            lista_das_partes_do_texto_separadas.push(parte_atual)
            parte_atual = ''
        } else if (indice_texto_atual == contar_tamanho_do_texto(texto) - 1) {
            parte_atual += texto[indice_texto_atual]
            lista_das_partes_do_texto_separadas.push(parte_atual)
            parte_atual = ''
        } else {
            parte_atual += texto[indice_texto_atual]
        }

    }


    /*
    for (const caractere_atual of texto) {

        if (caractere_atual == caractere_de_separacao) {
            lista_das_partes_do_texto_separadas.push(parte_atual)
            parte_atual = ''
        } else {
            parte_atual += caractere_atual
        }
    }
    */
    return lista_das_partes_do_texto_separadas
}
export function juntar_texto(lista_de_string = [], caractere_de_uniao) {
    let string_nova = ''
    for (const indice_atual in lista_de_string) {
        if (indice_atual == 0) {
            string_nova += lista_de_string[indice_atual]
        } else {
            string_nova += caractere_de_uniao + lista_de_string[indice_atual]
        }
    }
    return string_nova
}

//------->>>>>>>>>>>>> CARACTERES <<<<<<<<<<<<<<<<---------------
export function contar_caractere(texto, caractere = '', ignore_case = false) {
    let numero_de_ocorrencias_do_caractere = 0
    if (ignore_case == true) {
        if (verificaSeCaractereEstaEmCaixaAlta(caractere)) {
            for (const caractere_atual of texto) {
                if (caractere_atual == caractere || caractere_atual == converterTextoMaiusculoEmMinusculo(caractere)) {
                    numero_de_ocorrencias_do_caractere++
                }
            }
        } else if (verificaSeCaractereEstaEmCaixaBaixa(caractere)) {
            for (const caractere_atual of texto) {
                if (caractere_atual == caractere || caractere_atual == converterTextoMinusculoEmMaiusculo(caractere)) {
                    numero_de_ocorrencias_do_caractere++
                }
            }
        }

    } else if (ignore_case == false) {
        for (const caractere_atual of texto) {
            if (caractere_atual == caractere) {
                numero_de_ocorrencias_do_caractere++
            }
        }
    }

    return numero_de_ocorrencias_do_caractere
}

export function contem_caractere(texto = '', caractere, ignore_case = false) {
    let booleano_contem_caractere = false
    if (ignore_case == true) {
        if (verificaSeCaractereEstaEmCaixaAlta(caractere)) {
            for (const caractere_atual of texto) {
                if (caractere_atual == caractere || caractere_atual == converterTextoMaiusculoEmMinusculo(caractere)) {
                    booleano_contem_caractere == true
                    return booleano_contem_caractere
                }
            }
        } else if (verificaSeCaractereEstaEmCaixaBaixa(caractere)) {
            for (const caractere_atual of texto) {
                if (caractere_atual == caractere || caractere_atual == converterTextoMinusculoEmMaiusculo(caractere)) {
                    booleano_contem_caractere = true
                    return booleano_contem_caractere
                }
            }
        }
    } else if (ignore_case == false) {
        for (const caractere_atual of texto) {
            if (caractere_atual == caractere) {
                booleano_contem_caractere = true
                return booleano_contem_caractere
            }
        }
    }
    return booleano_contem_caractere
}

export function substituir_caractere(texto, caractere_original, caractere_substituto, ignore_case = false) {
    let caractere_modificado = ''
    if (ignore_case == true) {
        if (verificaSeEhLetra(caractere_original)) {
            if (verificaSeCaractereEstaEmCaixaAlta(caractere_original)) {
                for (const indice in texto) {
                    if (texto[indice] == caractere_original || texto[indice] == converterTextoMaiusculoEmMinusculo(caractere_original)) {
                        caractere_modificado += caractere_substituto
                    } else {
                        caractere_modificado += texto[indice]
                    }
                }
                return caractere_modificado
            } else if (verificaSeCaractereEstaEmCaixaBaixa(caractere_original)) {
                for (const indice in texto) {
                    if (texto[indice] == caractere_original || texto[indice] == converterTextoMinusculoEmMaiusculo(caractere_original)) {
                        caractere_modificado += caractere_substituto
                    } else {
                        caractere_modificado += texto[indice]
                    }
                }
                return caractere_modificado
            }
        } else {
            for (const indice in texto) {
                if (texto[indice] == caractere_original) {
                    caractere_modificado += caractere_substituto
                } else {
                    caractere_modificado += texto[indice]
                }
            }
            return caractere_modificado
        }
    } else if (ignore_case == false) {
        for (const indice in texto) {
            if (texto[indice] == caractere_original) {
                caractere_modificado += caractere_substituto
            } else {
                caractere_modificado += texto[indice]
            }
        }
        return caractere_modificado
    }

}

export function remover_caractere(texto, caractere_que_deve_ser_excluido, ignore_case = false) {
    let texto_sem_o_caractere_removido = ''
    if (ignore_case == false) {
        for (const indice in texto) {
            if (texto[indice] == caractere_que_deve_ser_excluido) {
                continue
            } else {
                texto_sem_o_caractere_removido += texto[indice]
            }
        }
        return texto_sem_o_caractere_removido
    } else if (ignore_case == true) {

        if (verificaSeEhLetra(caractere_que_deve_ser_excluido)) {
            if (verificaSeCaractereEstaEmCaixaAlta(caractere_que_deve_ser_excluido)) {
                for (const caractere_atual of texto) {
                    if (caractere_atual == caractere_que_deve_ser_excluido || caractere_atual == converterTextoMaiusculoEmMinusculo(caractere_que_deve_ser_excluido)) {
                        continue
                    } else {
                        texto_sem_o_caractere_removido += caractere_atual
                    }
                }
                return texto_sem_o_caractere_removido
            } else if (verificaSeCaractereEstaEmCaixaBaixa(caractere_que_deve_ser_excluido)) {
                for (const caractere_atual of texto) {
                    if (caractere_atual == caractere_que_deve_ser_excluido || caractere_atual == converterTextoMinusculoEmMaiusculo(caractere_que_deve_ser_excluido)) {
                        continue
                    } else {
                        texto_sem_o_caractere_removido += caractere_atual
                    }
                }
                return texto_sem_o_caractere_removido
            }
        } else {
            for (const caractere_atual of texto) {
                if (caractere_atual == caractere_que_deve_ser_excluido) {
                    continue
                } else {
                    texto_sem_o_caractere_removido += caractere_atual
                }
            }
            return texto_sem_o_caractere_removido
        }
    }

}

export function verifica_se_caractere_esta_no_texto(texto = '', caractere, ignore_case = false) {
    let resultado_caractere_esta_no_texto = false

    if (ignore_case == false) {
        for (const caractere_atual of texto) {
            if (caractere_atual == caractere) {
                resultado_caractere_esta_no_texto = true
                return resultado_caractere_esta_no_texto
            }

        }
        return resultado_caractere_esta_no_texto

    } else if (ignore_case == true) {
        if (verificaSeEhLetra(caractere)) {
            if (verificaSeCaractereEstaEmCaixaAlta(caractere)) {
                for (const caractere_atual of texto) {
                    if (caractere_atual == caractere || caractere_atual == converterTextoMaiusculoEmMinusculo(caractere)) {
                        resultado_caractere_esta_no_texto = true
                        return resultado_caractere_esta_no_texto
                    }
                }
                return resultado_caractere_esta_no_texto

            } else if (verificaSeCaractereEstaEmCaixaBaixa(caractere)) {
                for (const caractere_atual of texto) {
                    if (caractere_atual == caractere || caractere_atual == converterTextoMinusculoEmMaiusculo(caractere)) {
                        resultado_caractere_esta_no_texto = true
                        return resultado_caractere_esta_no_texto
                    }
                }
                return resultado_caractere_esta_no_texto
            }
        } else {
            for (const caractere_atual of texto) {
                if (caractere_atual == caractere) {
                    resultado_caractere_esta_no_texto = true
                    return resultado_caractere_esta_no_texto
                }
            }

        }
    }
    return resultado_caractere_esta_no_texto

}

//------->>>>>>>>>>>>> O TEXTO USA OU NAO UM CARACTERE <<<<<<<<<<<<<<<<---------------
export function verifica_se_o_texto_usa_apenas_os_caracteres(texto = '', caracteres_permitidos, ignore_case = false) {
    let usa_somente_os_caracteres = false
    1
    if (ignore_case == true) {
        for (const caractere_atual of texto) {
            //FAIL FAST
            if (verificaSeEhLetra(caractere_atual)) {
                if (verifica_se_caractere_esta_no_texto(caracteres_permitidos, caractere_atual, true) == false) {
                    usa_somente_os_caracteres = false
                    return usa_somente_os_caracteres
                } else {
                    usa_somente_os_caracteres = true

                }
            } else {
                //FAIL FAST
                for (const caractere_atual of texto) {
                    if (verifica_se_caractere_esta_no_texto(caracteres_permitidos, caractere_atual) == false) {
                        usa_somente_os_caracteres = false
                        return usa_somente_os_caracteres
                    } else {
                        usa_somente_os_caracteres = true

                    }
                }
            }
        }

    } else if (ignore_case == false) {
        for (const caractere_atual of texto) {
            //FAIL FAST
            if (verifica_se_caractere_esta_no_texto(caracteres_permitidos, caractere_atual) == false) {
                usa_somente_os_caracteres = false
                return usa_somente_os_caracteres
            } else {
                usa_somente_os_caracteres = true
            }
        }
    }

    return usa_somente_os_caracteres
}

export function verifica_se_o_texto_nao_usa_os_caracteres(texto = '', caracteres_proibidos = '', ignore_case) {
    let resultado_caractere_proibidos_estao_no_texto = true

    if (ignore_case == true) {
        for (const caractere_atual of texto) {
            if (verificaSeEhLetra(caractere_atual)) {
                if (verificaSeCaractereEstaEmCaixaAlta(caractere_atual)) {
                    if (verifica_se_caractere_esta_no_texto(caracteres_proibidos, caractere_atual) || verifica_se_caractere_esta_no_texto(caracteres_proibidos, converterTextoMaiusculoEmMinusculo(caractere_atual))) {
                        resultado_caractere_proibidos_estao_no_texto = false
                        return resultado_caractere_proibidos_estao_no_texto
                    }

                } else if (verificaSeCaractereEstaEmCaixaBaixa(caractere_atual)) {
                    for (const caractere_atual of texto) {
                        if (verifica_se_caractere_esta_no_texto(caracteres_proibidos, caractere_atual) || verifica_se_caractere_esta_no_texto(caracteres_proibidos, converterTextoMinusculoEmMaiusculo(caractere_atual))) {
                            resultado_caractere_proibidos_estao_no_texto = false
                        }
                    }
                }
            } else {
                for (const caractere_atual of texto) {
                    if (verifica_se_caractere_esta_no_texto(caracteres_proibidos, caractere_atual)) {
                        resultado_caractere_proibidos_estao_no_texto = true
                    }
                }
            }
        }



    } else if (ignore_case == false) {
        for (const caractere_atual of texto) {
            if (verifica_se_caractere_esta_no_texto(caracteres_proibidos, caractere_atual)) {
                resultado_caractere_proibidos_estao_no_texto = false
                return resultado_caractere_proibidos_estao_no_texto
            }
        }

    }
    return resultado_caractere_proibidos_estao_no_texto
}

//------->>>>>>>>>>>>> OPERACOES COM CARACTERES <<<<<<<<<<<<<<<<---------------
export function multiplicar_caracteres_por_um_numero_N(caracteres, numero_n) {
    let texto_com_caracteres_multiplicados = ''
    for (const caractere_atual of caracteres) {
        for (let numero_de_adicoes = 1; numero_de_adicoes <= numero_n; numero_de_adicoes++) {
            texto_com_caracteres_multiplicados += caractere_atual
        }
    }
    return texto_com_caracteres_multiplicados
}


//------->>>>>>>>>>>>> SUBSTRING'S <<<<<<<<<<<<<<<<---------------
export function obter_substring_de_um_texto(texto, posicao_inicial, posicao_final) {
    let substring_do_texto = ''
    for (const indice_atual in texto) {
        if (indice_atual >= posicao_inicial && indice_atual <= posicao_final) {
            substring_do_texto += texto[indice_atual]
        }
    }
    return substring_do_texto
}

export function obter_substring_tammanho_N(texto, posicao_inicial, tamanho_da_substring) {
    let substring_do_texto = ''
    let indice_atual = 0
    let valor_atual = 0
    while (valor_atual != undefined) {
        valor_atual = texto[indice_atual]
        if (valor_atual == undefined) {
            continue
        }
        if (indice_atual >= posicao_inicial && indice_atual <= tamanho_da_substring - 1) {
            substring_do_texto += texto[indice_atual]
        }
        indice_atual++
    }

    //for (const indice_atual in texto) {
    //  if (indice_atual >= posicao_inicial && indice_atual <= tamanho_da_substring - 1) {
    //  substring_do_texto += texto[indice_atual]
    // }
    return substring_do_texto
}

export function verifica_se_caracteres_sao_iguais(caractere_1, caractere_2, ignore_case = false) {
    let caracteres_sao_iguais = false

    if (ignore_case == true) {
        if (converterTextoMinusculoEmMaiusculo(caractere_1) == converterTextoMinusculoEmMaiusculo(caractere_2)) {
            caracteres_sao_iguais = true

        } else if (converterTextoMaiusculoEmMinusculo(caractere_1) == converterTextoMaiusculoEmMinusculo(caractere_2)) {
            caracteres_sao_iguais = true
        }
    } else if (ignore_case = false) {
        if (caractere_1 == caractere_2) {
            caracteres_sao_iguais = true
        }
    }
    return caracteres_sao_iguais
}

export function verificar_se_contem_substring(texto = '', substring_do_texto, ignore_case = false) {
    let resultado_substring_esta_no_texto = false
    let numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
    if (ignore_case == true) {
        for (const indice_caractere_atual in texto) {
            if (verifica_se_caracteres_sao_iguais(texto[indice_caractere_atual], substring_do_texto[0], true)) {
                for (let indice_atual = 0; indice_atual < contar_tamanho_do_texto(substring_do_texto); indice_atual++) {

                    if (verifica_se_caracteres_sao_iguais(texto[Number(indice_caractere_atual) + Number(indice_atual)], substring_do_texto[indice_atual], true)) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++

                    }

                }
                if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == contar_tamanho_do_texto(substring_do_texto)) {
                    resultado_substring_esta_no_texto = true
                } else {
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                }
            }
        }
    } else if (ignore_case == false) {
        for (const indice_caractere_atual in texto) {
            if (texto[indice_caractere_atual] == substring_do_texto[0]) {
                for (let indice_atual = 0; indice_atual < contar_tamanho_do_texto(substring_do_texto); indice_atual++) {
                    console.log(`valor do texto atual=> [${Number(indice_caractere_atual)} + ${Number(indice_atual)}] = ${Number(indice_caractere_atual)+Number(indice_atual)} =>${texto[Number(indice_caractere_atual)+Number(indice_atual)]}`)
                    console.log(`valor da sustrig atual=> [${indice_atual}] => ${substring_do_texto[indice_atual]}`)
                    console.log(`resultado comparacao=> ${texto[Number(indice_caractere_atual) + Number(indice_atual)] == substring_do_texto[Number(indice_atual)]}`)
                    if (texto[Number(indice_caractere_atual) + Number(indice_atual)] == substring_do_texto[indice_atual]) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                        console.log(numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto)
                    }

                }
                if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == contar_tamanho_do_texto(substring_do_texto)) {
                    resultado_substring_esta_no_texto = true
                    return resultado_substring_esta_no_texto
                } else {
                    console.log(numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto)
                    console.log("else")
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                }
            }
        }
    }

    return resultado_substring_esta_no_texto



    /*
    for (let indice_texto_atual = 0; indice_texto_atual < texto.length; indice_texto_atual++) {
        for (const indice_caractere_atual in substring_do_texto) {
            if (texto[indice_texto_atual] == substring_do_texto[indice_caractere_atual]) {
                numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
            }

        }
    }
    */
}

export function contar_substring(texto, substring_do_texto, ignore_case = false) {
    let numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
    let numero_de_ocorrecias_da_substring = 0

    if (ignore_case = true) {

        for (let indice_texto_atual = 0; indice_texto_atual < contar_tamanho_do_texto(texto); indice_texto_atual++) {
            if (verifica_se_caracteres_sao_iguais(texto[indice_texto_atual], substring_do_texto[0], true)) {
                for (const indice_atual_substring in substring_do_texto) {
                    if (verifica_se_caracteres_sao_iguais(texto[Number(indice_texto_atual) + Number(indice_atual_substring)], substring_do_texto[Number(indice_atual_substring)], true)) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                    }
                }
                if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == contar_tamanho_do_texto(substring_do_texto)) {
                    numero_de_ocorrecias_da_substring++
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                }
            }


        }
    } else if (ignore_case = false) {
        for (let indice_texto_atual = 0; indice_texto_atual < contar_tamanho_do_texto(texto); indice_texto_atual++) {
            if (texto[indice_texto_atual] == substring_do_texto[0]) {
                for (const indice_atual_substring in substring_do_texto) {
                    if (texto[Number(indice_texto_atual) + Number(indice_atual_substring)] == substring_do_texto[Number(indice_atual_substring)]) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                    }
                }
                if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == contar_tamanho_do_texto(substring_do_texto)) {
                    numero_de_ocorrecias_da_substring++
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                }
            }


        }
    }

    return numero_de_ocorrecias_da_substring

    /*
     1. percorrer o texto
        => SE caractere do idice aual = a primeira letra da substring_do_texto
        ENTAO =>
            -PERCORRER O TEXTO E O SUBTEXTO AO MESMO TEMPO PARA VER SE ELES CORRESPODEM -
            -O PERCORRIMETO DO TEXTO SERA DA POSICAO ATUAL ATE TAMAHO DA SUBTEXTO - 1 -
           - O PERCORRIMMETO DO SUBTEXTO SERA DE 0 A TAMAHO DO SUBTEXTO - 1 -
                 SE ELES CORRESPODEREM 
                 => ETAO ICREMETA UMERO DE OCOORECIAS
        SE UMERO DE OCORRECIA = TAMAHO SUBTEXTO
            ETAO => ICREMETA COTAGEM
            ZERA UMERO DE OCOORECIAS
    
    */

}

export function substituir_substring(texto, substring_original, substring_substituta, ignore_case = false) {
    let numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
    let string_nova = ''
    let indice_texto_atual = 0
    while (indice_texto_atual < contar_tamanho_do_texto(texto)) {
        if (texto[indice_texto_atual] == substring_original[0]) {

            for (const indice_atual_substring in substring_original) {
                if (ignore_case = true) {
                    if (verifica_se_caracteres_sao_iguais(texto[indice_texto_atual + Number(indice_atual_substring)], substring_original[Number(indice_atual_substring)])) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                    }
                } else if (ignore_case = false) {
                    if (verifica_se_caracteres_sao_iguais(texto[indice_texto_atual + Number(indice_atual_substring)], substring_original[Number(indice_atual_substring)], true)) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                    }
                }

            }

            if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == contar_tamanho_do_texto(substring_original)) {
                string_nova += substring_substituta
                    //ATUALIZDO A O IDICE DO TEXTO ATUAL
                numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                indice_texto_atual += contar_tamanho_do_texto(substring_original) - 1
                indice_texto_atual++


            } else {
                string_nova += texto[indice_texto_atual]
                numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                indice_texto_atual++
            }
        } else {
            string_nova += texto[indice_texto_atual]
            indice_texto_atual++
        }


    }
    /* 
    while (indice_texto_atual < contar_tamanho_do_texto(texto)) {
        if (texto[indice_texto_atual] == substring_original[0]) {

            for (const indice_atual_substring in substring_original) {
                if (texto[indice_texto_atual + Number(indice_atual_substring)] == substring_original[Number(indice_atual_substring)]) {
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                }
            }

            if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == contar_tamanho_do_texto(substring_original)) {
                string_nova += substring_substituta
                    //ATUALIZDO A O IDICE DO TEXTO ATUAL
                numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                indice_texto_atual += contar_tamanho_do_texto(substring_original) - 1
                indice_texto_atual++


            } else {
                string_nova += texto[indice_texto_atual]
                numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                indice_texto_atual++
            }
        } else {
            string_nova += texto[indice_texto_atual]
            indice_texto_atual++
        }


    }
    */
    return string_nova
}

export function remover_substring(texto, substring, ignore_case = false) {
    let string_nova = ''
    let numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
    for (let indice_texto_atual = 0; indice_texto_atual < contar_tamanho_do_texto(texto); indice_texto_atual++) {
        if (ignore_case = true) {
            if (verifica_se_caracteres_sao_iguais(texto[indice_texto_atual], substring[0], true)) {
                for (let indice_atual_substring = 0; indice_atual_substring < contar_tamanho_do_texto(substring); indice_atual_substring++) {
                    if (verifica_se_caractere_esta_no_texto(texto[indice_texto_atual + indice_atual_substring], substring[indice_atual_substring], true)) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                    }

                }

                if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == contar_tamanho_do_texto(substring)) {
                    //PULAR PARA O PROXIMO CARACTERE APOS A SUSTRIG
                    //PROXIMO CARACTERE APOS SUSTRIG = (INCREMETO DO TAMAHO DA SUSTRIG-1 )+ 1 (O ICREMETO DE DADO PELO 'FOR' AUTOMATICAMTE AO TERMIAR A VOLTA ATUAL
                    indice_texto_atual += contar_tamanho_do_texto(substring) - 1
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                } else {
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                }
            } else {
                string_nova += texto[indice_texto_atual]
            }
        } else if (ignore_case = false) {
            if (texto[indice_texto_atual] == substring[0]) {
                for (let indice_atual_substring = 0; indice_atual_substring < contar_tamanho_do_texto(substring); indice_atual_substring++) {
                    if (texto[indice_texto_atual + indice_atual_substring] == substring[indice_atual_substring]) {
                        numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto++
                    }

                }

                if (numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto == contar_tamanho_do_texto(substring)) {
                    //PULAR PARA O PROXIMO CARACTERE APOS A SUSTRIG
                    //PROXIMO CARACTERE APOS SUSTRIG = (INCREMETO DO TAMAHO DA SUSTRIG-1 )+ 1 (O ICREMETO DE DADO PELO 'FOR' AUTOMATICAMTE AO TERMIAR A VOLTA ATUAL
                    indice_texto_atual += contar_tamanho_do_texto(substring) - 1
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                } else {
                    numero_de_caracteres_procurados_que_estao_na_sequecia_esperada_para_formar_o_texto = 0
                }
            } else {
                string_nova += texto[indice_texto_atual]
            }
        }

    }
    return string_nova
}

export function remover_substring_por_faixa(texto, indice_inicial, indice_final) {
    let string_nova = ''
    for (let indice_caractere_atual = 0; indice_caractere_atual < contar_tamanho_do_texto(texto); indice_caractere_atual++) {
        if (indice_caractere_atual < indice_inicial || indice_caractere_atual > indice_final) {
            string_nova += texto[indice_caractere_atual]
        }

    }
    return string_nova
}

//------->>>>>>>>>>>>> TEXTO <<<<<<<<<<<<<<<<---------------
export function contar_tamanho_do_texto(texto) {
    let numero_de_caracteres = 0
    let indice_atual = 0
    let valor_atual = 0

    while (valor_atual != undefined) {
        valor_atual = texto[indice_atual]
        if (valor_atual == undefined) {
            continue
        }
        indice_atual++
        numero_de_caracteres++
    }
    // for (const indice_atual in texto) {
    //     numero_de_caracteres++
    // }
    return numero_de_caracteres
}
export function inverter_texto(texto) {
    let string_nova = ''
    let indice_atual = contar_tamanho_do_texto(texto) - 1
    while (indice_atual >= 0) {
        string_nova += texto[indice_atual]
        indice_atual--
    }
    return string_nova
}
export function remover_espacos_do_texto(texto) {
    let texto_sem_espacos = ''
    for (const caractere_atual of texto) {
        if (caractere_atual != ' ') {
            texto_sem_espacos += caractere_atual
        }
    }
    return texto_sem_espacos
}