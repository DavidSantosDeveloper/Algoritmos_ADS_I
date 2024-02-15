import { question } from "readline-sync";
import { converterTextoMinusculoEmMaiusculo, converterTextoMaiusculoEmMinusculo } from "./funcoes_string.mjs";

// FUNCOES DE ENTRADA DE DADOS

//------->>>>>>>>>>>>> ENTRADA DE TEXTO <<<<<<<<<<<<<<<<---------------
export function obter_texto(texto = 'Digite um texto') {
    return question(texto)
}
export function obter_texto_tam_minimo(texto = '', tamanho_minimo) {
    let texto_tamanho_minimo = obter_texto(texto)
    while (texto_tamanho_minimo.length < tamanho_minimo) {
        mostrar_texto("Dado invalido!!!")
        texto_tamanho_minimo = obter_texto(texto)
    }
    return texto_tamanho_minimo
}
export function obter_texto_tam_maximo(texto = '', tamanho_maximo) {
    let texto_tamanho_maximo = obter_texto(texto)
    while (texto_tamanho_maximo.length > tamanho_maximo) {
        mostrar_texto("Dado invalido!!!")
        texto_tamanho_maximo = obter_texto(texto)
    }
    return texto_tamanho_maximo
}
export function obter_texto_min_max(texto = '', tamanho_minimo, tamanho_maximo) {
    let texto_com_tamanho_entre_minimo_e_maximo = obter_texto(texto)

    while (texto_com_tamanho_entre_minimo_e_maximo.length < tamanho_minimo || texto_com_tamanho_entre_minimo_e_maximo.length > tamanho_maximo) {
        mostrar_texto("Dados invalidos!!!")
        texto_com_tamanho_entre_minimo_e_maximo = obter_texto(texto)
    }
    return texto_com_tamanho_entre_minimo_e_maximo
}
export function obter_opcoes(texto = '', opcoes = '') {
    return Number(obter_texto(`\n\n>>>>>>>>${texto}<<<<<<<< \n (${opcoes}) :`))
}


//------->>>>>>>>>>>>> ENTRADA DE NUMERO <<<<<<<<<<<<<<<<---------------
export function obter_numero(texto) {
    let numero = obter_texto(texto)
    while (isNaN(Number(numero) || numero == '')) {
        numero = obter_texto(texto)
    }
    return Number(numero)
}

export function obter_numero_positivo(texto) {
    let numero = obter_texto(texto)
    let booleano_numero_eh_texto = (isNaN(Number(numero)) || numero == '')

    while (booleano_numero_eh_texto == true && numero < 0) {
        mostrar_texto("Entrada Invalida !!!")
        numero = obter_texto(texto)
    }
    return numero
}
export function obter_numero_negativo(texto) {
    let numero = obter_texto(texto)
    let booleano_numero_eh_texto = (isNaN(Number(numero)) || numero == '')

    while (booleano_numero_eh_texto == true && numero >= 0) {
        mostrar_texto("Entrada Invalida !!!")
        numero = obter_texto(texto)
    }
    return numero
}
export function obter_numero_minimo(texto, numero_minimo) {
    let numero = obter_texto(texto)
    let booleano_numero_eh_texto = (isNaN(Number(numero)) || numero == '')

    while (booleano_numero_eh_texto == true && numero >= numero_minimo) {
        mostrar_texto("Entrada Invalida !!!")
        numero = obter_texto(texto)
    }
    return numero
}
export function obter_numero_maximo(texto, numero_maximo) {
    let numero = obter_texto(texto)
    let booleano_numero_eh_texto = (isNaN(Number(numero)) || numero == '')
    while (booleano_numero_eh_texto == true && numero > numero_maximo) {
        mostrar_texto("Entrada invalida!!!")
        numero = obter_texto(texto)
    }
    return numero
}
export function obter_numero_faixa(texto, numero_minimo, numero_maximo) {
    let numero = obter_texto(texto)
    let booleano_numero_eh_texto = (isNaN(Number(numero)) || numero == '')
    while ((isNaN(Number(numero)) || numero == '') || (numero < numero_minimo || numero > numero_maximo)) {
        mostrar_texto("Dados invalidos!!!")
        numero = obter_texto(texto)

    }

    return numero

}




// FUNCOES DE SAIDA DE DADOS
export function mostrar_texto(conteudo) {
    console.log(conteudo)
}

export function mostrar_texto_inline(conteudo) {
    process.stdout.write(conteudo)
}
export function mostrar_texto_caixa_alta(texto) {
    let texto_em_maisculo = converterTextoMinusculoEmMaiusculo(texto)
    console.log(texto_em_maisculo)
}

export function mostrar_texto_caixa_baixa(texto) {
    let texto_em_minusculo = converterTextoMaiusculoEmMinusculo(texto)
    console.log(texto_em_minusculo)
}