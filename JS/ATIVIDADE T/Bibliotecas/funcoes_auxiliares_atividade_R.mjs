import { adicionar_um_elemento_a_uma_lista, contar_tamanho_da_lista, ordenar_numeros_com_quicksort } from "./funcoes_array.mjs";
import { eh_divisivel_por_numero_N } from "./funcoes_matematicas.mjs";
import { contar_tamanho_do_texto } from "./funcoes_string.mjs"

export function converter_numero_em_texto(numero = 0) {
    return `${numero}`
}
export function gerar_numero_positivo_entre_um_intervalo(valor_minimo, valor_maximo) {
    return Math.floor(Math.random() * (valor_maximo - valor_minimo + 1)) + valor_minimo;
}
export function gerar_numero_negativo_entre_um_intervalo(valor_minimo, valor_maximo) {
    return Math.floor(Math.random() * (valor_maximo - valor_minimo + 1)) + valor_minimo;
}

export function obter_os_maiores_numeros_em_uma_lista(lista_de_numeros = [], intervalo_do_ranking = 1) {
    let lista_de_numeros_ordenada = ordenar_numeros_com_quicksort(lista_de_numeros)
    let lista_dos_maiores_numeros = []

    for (let indice_atual = contar_tamanho_da_lista(lista_de_numeros_ordenada) - 1; indice_atual > contar_tamanho_da_lista(lista_de_numeros_ordenada) - 1 - intervalo_do_ranking; indice_atual--) {
        lista_dos_maiores_numeros = adicionar_um_elemento_a_uma_lista(lista_dos_maiores_numeros, lista_de_numeros_ordenada[indice_atual])
    }

    return lista_dos_maiores_numeros
}

export function obter_os_menores_numeros_em_uma_lista(lista_de_numeros = [], intervalo_do_ranking = 1) {
    let lista_de_numeros_ordenada = ordenar_numeros_com_quicksort(lista_de_numeros)
    let lista_dos_menores_numeros = []
    contar_tamanho_da_lista(lista_de_numeros_ordenada) - 1
    for (let indice_atual = 0; indice_atual < intervalo_do_ranking; indice_atual++) {
        lista_dos_menores_numeros = adicionar_um_elemento_a_uma_lista(lista_dos_menores_numeros, lista_de_numeros_ordenada[indice_atual])
    }

    return lista_dos_menores_numeros
}

export function retornar_numeros_menores_e_menores_que_um_numero_N(lista_de_numeros, numero_N) {
    let lista_dos_numeros_menores = []
    let lista_dos_numeros_maiores = []
    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista_de_numeros); indice_atual++) {
        if (lista_de_numeros[indice_atual] > numero_N) {
            lista_dos_numeros_maiores = adicionar_um_elemento_a_uma_lista(lista_dos_numeros_maiores, lista_de_numeros[indice_atual])
        } else if (lista_de_numeros[indice_atual] < numero_N) {
            lista_dos_numeros_menores = adicionar_um_elemento_a_uma_lista(lista_dos_numeros_menores, lista_de_numeros[indice_atual])
        }
    }
    return [lista_dos_numeros_menores, lista_dos_numeros_maiores]
}

export function filtrar_os_numeros_positivos_multiplos_de_2_em_uma_lista(lista_de_numeros = []) {
    let lista_de_numeros_posivos_multiplos_de_2 = []

    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista_de_numeros); indice_atual++) {
        if (eh_divisivel_por_numero_N(lista_de_numeros[indice_atual], 2) && lista_de_numeros[indice_atual] >= 0) {
            lista_de_numeros_posivos_multiplos_de_2 = adicionar_um_elemento_a_uma_lista(lista_de_numeros_posivos_multiplos_de_2, lista_de_numeros[indice_atual])
        }
    }
    return lista_de_numeros_posivos_multiplos_de_2
}

export function filtrar_numeros_multiplos_de_um_numero_N_em_uma_lista(lista_de_numeros, numero_N) {
    let lista_numero_de_multiplos_de_N = []
    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista_de_numeros); indice_atual++) {
        if (eh_divisivel_por_numero_N(lista_de_numeros[indice_atual], numero_N)) {
            lista_numero_de_multiplos_de_N = adicionar_um_elemento_a_uma_lista(lista_numero_de_multiplos_de_N, lista_de_numeros[indice_atual])
        }
    }
    return lista_numero_de_multiplos_de_N
}

export function filtrar_nao_multiplos_de_N_e_M_em_uma_lista(lista_de_numeros = [], numero_N = 0, numero_M = 0) {
    let lista_filtrada = []

    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista_de_numeros); indice_atual++) {

        let eh_multiplo_de_N = eh_divisivel_por_numero_N(lista_de_numeros[indice_atual], numero_N)
        let eh_multiplo_de_M = eh_divisivel_por_numero_N(lista_de_numeros[indice_atual], numero_M)

        if (eh_multiplo_de_N == false && eh_multiplo_de_M == false) {
            lista_filtrada = adicionar_um_elemento_a_uma_lista(lista_filtrada, lista_de_numeros[indice_atual])
        }
    }

    return lista_filtrada
}