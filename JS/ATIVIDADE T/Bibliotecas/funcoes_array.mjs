import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.mjs"

//------->>>>>>>>>>>>> CRIAR ARRAYS <<<<<<<<<<<<<<<<---------------
export function criar_lista(tamanho, valor_padrao) {
    let lista = Array(tamanho)
    for (let indice_atual = 0; indice_atual < tamanho; indice_atual++) {
        lista[indice_atual] = valor_padrao
    }
    return lista
}

export function criar_lista_de_numeros_pedindo_item_a_item(tamanho) {
    let lista = Array(tamanho)
    for (let indice_atual = 0; indice_atual < tamanho; indice_atual++) {
        let numero_atual = obter_numero(`Digite o numero da ${indice_atual} posicao : `)
        lista[indice_atual] = numero_atual
    }
    return lista
}

export function criar_lista_de_numeros_entre_um_intervalo(tamanho, numero_minimo, numero_maximo) {
    let lista = Array(tamanho)
    for (let indice_atual = 0; indice_atual < tamanho; indice_atual++) {
        lista[indice_atual] = numero_minimo
        if (numero_minimo < numero_maximo) {
            numero_minimo++
        }
    }
    return lista
}

//------->>>>>>>>>>>>> MOSTRAR ELEMENTOS DE UM ARRAYS <<<<<<<<<<<<<<<<---------------
export function mostrar_elementos_de_uma_lista(lista = []) {
    for (let indice_atual = 0; indice_atual < lista.length; indice_atual++) {
        mostrar_texto(`elemento ${indice_atual+1}. ${lista[indice_atual]}`)
    }

}
//------->>>>>>>>>>>>> QUICK SORT- ARRAYS <<<<<<<<<<<<<<<<---------------
export function ordenar_numeros_com_quicksort(lista_de_numero) {
    if (lista_de_numero.length <= 1) {
        return lista_de_numero;
    }

    const pivot = lista_de_numero[Math.floor(lista_de_numero.length / 2)];
    const left = [];
    const equal = [];
    const right = [];

    for (let numero_atual of lista_de_numero) {
        if (numero_atual < pivot) {
            left.push(numero_atual);
        } else if (numero_atual > pivot) {
            right.push(numero_atual);
        } else {
            equal.push(numero_atual);
        }
    }

    return [...ordenar_numeros_com_quicksort(left), ...equal, ...ordenar_numeros_com_quicksort(right)];
}

//------->>>>>>>>>>>>> MAPEAMENTO DE ARRAYS <<<<<<<<<<<<<<<<---------------
export function mapeamento_de_uma_lista(lista = [], funcao_criterio = () => {}, funcao_de_transformacao = () => {}) {
    let lista_resultante_do_mapeamento = []
    for (let indice_atual = 0; indice_atual < lista.length; indice_atual++) {
        if (funcao_criterio(lista[indice_atual])) {
            lista_resultante_do_mapeamento = adicionar_um_elemento_a_uma_lista(lista_resultante_do_mapeamento, funcao_de_transformacao(lista[indice_atual]))
        } else {
            lista_resultante_do_mapeamento = adicionar_um_elemento_a_uma_lista(lista_resultante_do_mapeamento, lista[indice_atual])
        }
    }
    return lista_resultante_do_mapeamento
}

//------->>>>>>>>>>>>> FILTRO OU FILTER DE ARRAYS <<<<<<<<<<<<<<<<---------------
export function filtrar_uma_lista(lista = [], funcao_criterio) {
    let lista_filtrada = []
    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista); indice_atual++) {
        if (funcao_criterio(lista[indice_atual])) {
            lista_filtrada = adicionar_um_elemento_a_uma_lista(lista_filtrada, lista[indice_atual])
        }
    }
    return lista_filtrada
}


//------->>>>>>>>>>>>> REDUCE DE ARRAYS <<<<<<<<<<<<<<<<---------------
export function reduzir_elementos_de_uma_lista(lista_de_elementos, funcao_de_ação = () => {}, valor_inicial = 0) {
    //valor_em_memoria equivale ao acumulado
    let valor_em_memoria = lista_de_elementos[0]

    for (let indice_atual = 1; indice_atual < contar_tamanho_da_lista(lista_de_elementos); indice_atual++) {
        valor_em_memoria = funcao_de_ação(valor_em_memoria, lista_de_elementos[indice_atual])
    }
    return valor_em_memoria
}


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

export function verifica_se_uma_lista_eh_exatamente_igual_a_outra_lista(lista1 = [], lista2 = []) {
    //Fail Fast
    if (contar_tamanho_da_lista(lista1) > contar_tamanho_da_lista(lista2) || contar_tamanho_da_lista(lista2) > contar_tamanho_da_lista(lista1)) {
        return false
    } else {
        let ocorrencias_na_sequencia = 0
        for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista1); indice_atual++) {
            if (lista1[indice_atual] == lista2[indice_atual]) {
                ocorrencias_na_sequencia++
            }
        }

        if (ocorrencias_na_sequencia == contar_tamanho_da_lista(lista1)) {
            return true
        } else {
            return false
        }

    }
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