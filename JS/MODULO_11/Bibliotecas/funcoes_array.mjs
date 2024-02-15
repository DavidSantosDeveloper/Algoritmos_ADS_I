//------->>>>>>>>>>>>> DIVISIILIDADE <<<<<<<<<<<<<<<<---------------
export function existe_na_lista_pelo_menos_1_numero_divisivel_por_numero_N(lista_de_numeros, numero_n) {
    let existe_pelo_menos_1 = false
    for (const numero of lista_de_numeros) {
        //IF
        if (numero % numero_n == 0) {
            existe_pelo_menos_1 = true
            return existe_pelo_menos_1
        }
    }
    //ELSE
    return existe_pelo_menos_1
}

//------->>>>>>>>>>>>> PERTENCIMENTO DA LISTA <<<<<<<<<<<<<<<<---------------
export function verifica_se_um_elemento_esta_em_uma_lista(lista = [], elemento_procurado) {
    let verifica_se_elemento_esta_a_lista = false
    for (const elemento_atual of lista) {
        if (elemento_atual == elemento_procurado) {
            verifica_se_elemento_esta_a_lista = true
        }
    }
    return verifica_se_elemento_esta_a_lista
}
export function adicionar_um_elemento_a_uma_lista(lista = [], elemento_adicionado) {
    let indice_atual_da_lista = 0
    let indice_vazio_disponivel = +Infinity

    while (indice_atual_da_lista < indice_vazio_disponivel) {
        if (lista[indice_atual_da_lista] == undefined) {
            indice_vazio_disponivel = indice_atual_da_lista
            continue
        }
        indice_atual_da_lista++
    }
    lista[indice_vazio_disponivel] = elemento_adicionado
    return lista
}

//------->>>>>>>>>>>>> UNIAO E INTERSECCAO DE LISTAS <<<<<<<<<<<<<<<<---------------
export function juntar_2_listas(lista_1, lista_2) {

    let uniao_das_listas = []

    for (const elemento_atual of lista_1) {
        uniao_das_listas = adicionar_um_elemento_a_uma_lista(uniao_das_listas, elemento_atual)
    }

    for (const elemento_atual of lista_2) {
        uniao_das_listas = adicionar_um_elemento_a_uma_lista(uniao_das_listas, elemento_atual)
    }

    return uniao_das_listas
}
export function interseccao_de_2_listas(lista_1, lista_2) {
    let lista_A_e_B_interseccao = []

    for (let indice_atual_da_lista = 0; indice_atual_da_lista < contar_tamanho_da_lista(lista_1); indice_atual_da_lista++) {
        if (verifica_se_um_elemento_esta_em_uma_lista(lista_2, lista_1[indice_atual_da_lista]) && verifica_se_um_elemento_esta_em_uma_lista(lista_A_e_B_interseccao, lista_1[indice_atual_da_lista]) == false) {
            lista_A_e_B_interseccao = adicionar_um_elemento_a_uma_lista(lista_A_e_B_interseccao, lista_1[indice_atual_da_lista])
        }
    }

    return lista_A_e_B_interseccao
}


//------->>>>>>>>>>>>> IGUALDADE DE ELEMENTOS EM UMA LISTA <<<<<<<<<<<<<<<<---------------
export function verifica_se_existe_um_elemento_igual_na_lista(lista) {
    let booleano_existe_elementos_iguais_na_lista = false

    for (let indice_elemento_atual = 0; indice_elemento_atual < contar_tamanho_da_lista(lista); indice_elemento_atual++) {
        for (const indice_do_elemento_atual_comparado in lista) {
            // FAIL FAST
            if (Number(indice_do_elemento_atual_comparado) == indice_elemento_atual) {
                continue
            } else {
                if (lista[Number(indice_do_elemento_atual_comparado)] === lista[indice_elemento_atual]) {
                    booleano_existe_elementos_iguais_na_lista = true
                    return booleano_existe_elementos_iguais_na_lista
                }
            }
        }

    }
    return booleano_existe_elementos_iguais_na_lista
}



//------->>>>>>>>>>>>> INVERTER A LISTA <<<<<<<<<<<<<<<<---------------
export function inverter_elementos_de_uma_lista(lista = []) {
    let lista_inversa = []
    for (let indice_atual = contar_tamanho_da_lista(lista) - 1; indice_atual >= 0; indice_atual--) {
        lista_inversa.push(lista[indice_atual])
    }
    return lista_inversa
}



//------->>>>>>>>>>>>>CONTAR TAMANHO DA LISTA <<<<<<<<<<<<<<<<---------------
export function contar_tamanho_da_lista(lista = []) {
    let numero_de_elementos = 0
    let posicao_atual = 0
    while (lista[posicao_atual] != undefined) {
        numero_de_elementos++
        posicao_atual++
    }
    return numero_de_elementos
}

//------->>>>>>>>>>>>>CONTAR NUMERO DE OCORRENCIAS DE UM ELEMENTO EM UMA LISTA <<<<<<<<<<<<<<<<---------------
export function contar_ocorrencia_de_um_elemento_em_uma_lista(lista, elemento_procurado) {
    let numero_de_ocorrencias_do_elemento = 0

    for (const elemento_da_lista_atual of lista) {
        if (elemento_da_lista_atual == elemento_procurado) {
            numero_de_ocorrencias_do_elemento++
        }
    }
    return numero_de_ocorrencias_do_elemento
}



//------->>>>>>>>>>>> OPERACOES SOBRE TODOS OS ELEMENTOS DA LISTA <<<<<<<<<<<<<<<<---------------
export function retonar_maior_numero_da_lista(lista) {
    let lista_de_numeros = lista
    let maior_numero_da_lista = -Infinity
    for (const numero_atual of lista_de_numeros) {
        if (numero_atual > maior_numero_da_lista) {
            maior_numero_da_lista = numero_atual
        }
    }
    return maior_numero_da_lista
}
export function multiplica_numeros_de_uma_lista_entre_si(lista_de_divisores) {
    let resultado_da_multiplicacao = 1
    for (const numero_atual of lista_de_divisores) {
        resultado_da_multiplicacao *= numero_atual
    }
    return resultado_da_multiplicacao
}