import { question } from "readline-sync"
import { adicionar_um_elemento_a_uma_lista, contar_tamanho_da_lista, inverter_elementos_de_uma_lista } from "./funcoes_array.mjs"
import { mostrar_texto } from "./funcoes_entrada_saida.mjs"
import { contar_tamanho_do_texto, verifica_se_o_texto_usa_apenas_os_caracteres } from "./funcoes_string.mjs"
export function calcular_expressaoV1(lista_de_elementos) {
    let resultado_expressao = 0
    let indice_da_esquerda = 1
    let indice_da_direita = 20

    for (indice_da_esquerda; indice_da_esquerda <= 10; indice_da_esquerda++) {
        resultado_expressao += (lista_de_elementos[indice_da_esquerda] - lista_de_elementos[indice_da_direita]) ** 2
        console.log(`${indice_da_esquerda} - ${indice_da_direita}`)
        indice_da_direita--
    }
    return resultado_expressao
}

export function obter_numero_binario(texto) {
    let numero = question(texto)
    while (isNaN(Number(numero)) || numero == '') {
        mostrar_texto('Dados invalidos!!!')
        numero = question(texto)
    }
    while (verifica_se_o_texto_usa_apenas_os_caracteres(numero, '01') == false) {
        mostrar_texto('Dados invalidos!!!')
        numero = question(texto)
    }
    return Number(numero)
}

export function converter_numero_binario_em_decimal(numero_em_binario = '') {
    let numero_em_decimal = 0

    let expoente_do_numero_atual = contar_tamanho_do_texto(numero_em_binario) - 1

    for (let indice_atual = 0; indice_atual < contar_tamanho_do_texto(numero_em_binario); indice_atual++) {
        numero_em_decimal += Number((numero_em_binario[indice_atual])) * (2 ** expoente_do_numero_atual)
        expoente_do_numero_atual--

    }
    return numero_em_decimal
}

export function converter_lista_binaria_para_lista_decimal(lista_binaria) {
    let lista_em_decimal = []

    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista_binaria); indice_atual++) {
        lista_em_decimal = adicionar_um_elemento_a_uma_lista(lista_em_decimal, converter_numero_binario_em_decimal(lista_binaria[indice_atual]))
        console.log(`# idice ${indice_atual}`)
        console.log(lista_binaria[indice_atual])
        console.log(converter_numero_binario_em_decimal(lista_binaria[indice_atual]))
        console.log(lista_em_decimal)
        console.log(`-------------------------`)

    }

    return lista_em_decimal
}

export function converter_caractere_decimal_para_hexadecimal(caractere_em_decimal) {
    let caractere_em_hexadecimal = ''
    switch (caractere_em_decimal) {
        case '1':
            caractere_em_hexadecimal += '1'
            break;
        case '2':
            caractere_em_hexadecimal += '2'
            break;
        case '3':
            caractere_em_hexadecimal += '3'
            break;
        case '4':
            caractere_em_hexadecimal += '4'
            break;
        case '5':
            caractere_em_hexadecimal += '5'
            break;
        case '6':
            caractere_em_hexadecimal += '6'
            break;
        case '7':
            caractere_em_hexadecimal += '7'
            break;
        case '8':
            caractere_em_hexadecimal += '8'
            break;
        case '9':
            caractere_em_hexadecimal += '9'
            break;
        case '10':
            caractere_em_hexadecimal += 'A'
            break;
        case '11':
            caractere_em_hexadecimal += 'B'
            break;
        case '12':
            caractere_em_hexadecimal += 'C'
            break;
        case '13':
            caractere_em_hexadecimal += 'D'
            break;
        case '14':
            caractere_em_hexadecimal += 'E'
            break;
        case '15':
            caractere_em_hexadecimal += 'F'
            break;


        default:
            break;
    }
    return caractere_em_hexadecimal
}

export function converter_lista_binaria_para_lista_hexadecimal(lista_binaria) {
    let lista_em_decimal = converter_lista_binaria_para_lista_decimal(lista_binaria)
    let lista_em_hexadecimal = []

    for (let indice_atual = 0; indice_atual < contar_tamanho_da_lista(lista_em_decimal); indice_atual++) {
        let partes_do_numero_atual_em_hexadecimal = []
        let numero_atual_em_hexadecimal = ''

        while (Number(lista_em_decimal[indice_atual]) % 16 > 0) {
            numero_atual_em_hexadecimal = adicionar_um_elemento_a_uma_lista(partes_do_numero_atual_em_hexadecimal, Number(lista_em_decimal % 16))
            lista_em_decimal[indice_atual] = (Number(lista_em_decimal[indice_atual]) - Number(Number(lista_em_decimal[indice_atual]) % 16)) / 16
        }
        partes_do_numero_atual_em_hexadecimal = adicionar_um_elemento_a_uma_lista(partes_do_numero_atual_em_hexadecimal, Number(lista_em_decimal[indice_atual]))
        partes_do_numero_atual_em_hexadecimal = inverter_elementos_de_uma_lista(partes_do_numero_atual_em_hexadecimal)

        for (const parte_atual_do_numero_em_hexadecimal of partes_do_numero_atual_em_hexadecimal) {
            numero_atual_em_hexadecimal += converter_caractere_decimal_para_hexadecimal(parte_atual_do_numero_em_hexadecimal)
        }
        lista_em_hexadecimal = adicionar_um_elemento_a_uma_lista(lista_em_hexadecimal, numero_atual_em_hexadecimal)

    }
    return lista_em_hexadecimal
}