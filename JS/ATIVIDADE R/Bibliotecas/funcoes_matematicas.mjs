import { existe_na_lista_pelo_menos_1_numero_divisivel_por_numero_N, retonar_maior_numero_da_lista, multiplica_numeros_de_uma_lista_entre_si, contar_tamanho_da_lista, ordenar_numeros_com_quicksort } from "./funcoes_array.mjs"

//------->>>>>>>>>>>>> DIVISORES <<<<<<<<<<<<<<<<---------------
export function divisores(numero) {
    let lista_divisores = []
    let divisor_atual = 1
    while (divisor_atual <= numero) {
        if (numero % divisor_atual == 0) {
            lista_divisores.push(divisor_atual)
            divisor_atual++

        } else {
            divisor_atual++
        }

    }
    return lista_divisores

}
export function eh_divisivel_por_numero_N(numerador, numero_n) {
    if (numerador % numero_n == 0) {
        return true
    } else {
        return false
    }
}
//------->>>>>>>>>>>>> MMC E MDC <<<<<<<<<<<<<<<<---------------
export function mmc(lista = []) {

    let lista_de_numeros = lista
    let lista_de_divisores = [1]
    let divisor_atual = 2
    let maior_numero_da_lista = retonar_maior_numero_da_lista(lista)
    let resultado_mmc

    while (divisor_atual <= maior_numero_da_lista) {
        if (existe_na_lista_pelo_menos_1_numero_divisivel_por_numero_N(lista, divisor_atual)) {
            lista_de_divisores.push(divisor_atual)
            for (const indice in lista_de_numeros) {
                if (eh_divisivel_por_numero_N(lista_de_numeros[indice], divisor_atual)) {
                    lista_de_numeros[indice] /= divisor_atual
                }

            }
        } else {
            divisor_atual++
        }
    }
    resultado_mmc = multiplica_numeros_de_uma_lista_entre_si(lista_de_divisores)
    return resultado_mmc
}

//------->>>>>>>>>>>>> PAR OU IMPAR <<<<<<<<<<<<<<<<---------------
export function ehPar(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}
export function ehImpar(numero) {
    if (numero % 2 != 0) {
        return true
    } else {
        return false
    }
}

//------->>>>>>>>>>>>> RAIZ E QUADRADO PERFEITO <<<<<<<<<<<<<<<<---------------
export function eh_numero_perfeito(numero) {
    let raiz_do_numero = Math.sqrt(numero)
    let verifica_se_eh_inteiro = Math.abs(raiz_do_numero - Math.floor(raiz_do_numero));
    //FAIL FAST
    if (verifica_se_eh_inteiro > 0) {
        return false
    } else {
        return true
    }
}
export function raiz(numero, indice) {
    return numero ** (1 / indice)
}
export function raiz_quadrada(numero) {
    return numero ** (1 / 2)
}
export function raiz_cubica(numero) {
    return numero ** (1 / 3)
}

//------->>>>>>>>>>>>> FATORIAL <<<<<<<<<<<<<<<<---------------
export function fatorial(numero) {
    let resultado_multiplicacao = 1
    let fator_atual = numero - 1

    //FAIL FAST
    if (numero < 0) {
        return -1
    } else if (numero == 0 || numero == 1) {
        return 1
    } else {
        let numero_da_volta = 1
        for (let fator_atual = numero - 1; fator_atual >= 1; fator_atual--) {
            if (numero_da_volta == 1) {
                resultado_multiplicacao *= numero * fator_atual
                numero_da_volta++
            } else {
                resultado_multiplicacao *= fator_atual
            }
        }
        return resultado_multiplicacao
    }
}

//------->>>>>>>>>>>>> MEDIA DE ELEMENTOS DA LISTA <<<<<<<<<<<<<<<<---------------
export function calcular_media_dos_numeros_de_uma_lista(lista_de_numeros = []) {
    let soma_dos_numeros_da_lista = 0
    let quantidade_de_numeros = contar_tamanho_da_lista(lista_de_numeros)
    let media_dos_numeros_de_uma_lista = 0

    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista_de_numeros); indice_atual++) {
        soma_dos_numeros_da_lista += lista_de_numeros[indice_atual]
    }
    media_dos_numeros_de_uma_lista = Number((soma_dos_numeros_da_lista / quantidade_de_numeros).toFixed(2))
    return media_dos_numeros_de_uma_lista

}

//------->>>>>>>>>>>>> MEDIANA DE ELEMENTOS DA LISTA <<<<<<<<<<<<<<<<---------------
export function calcular_mediana_dos_numeros_em_uma_lista(lista_de_numeros = []) {
    let quantidade_de_numeros = contar_tamanho_da_lista(lista_de_numeros)
    let lista_de_numeros_ordenada = ordenar_numeros_com_quicksort(lista_de_numeros)
    let mediana_da_lista = 0
    if (ehPar(quantidade_de_numeros)) {
        mediana_da_lista = Number(((lista_de_numeros_ordenada[(quantidade_de_numeros / 2) - 1] + lista_de_numeros_ordenada[(quantidade_de_numeros / 2)]) / 2).toFixed(2))
    } else {
        mediana_da_lista = lista_de_numeros_ordenada[((quantidade_de_numeros + 1) / 2) - 1]
    }
    return mediana_da_lista
}