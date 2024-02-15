import { mostrar_texto, obter_numero, obter_texto } from "./funcoes_entrada_saida.js"

export function calculaDistancia(consumo_medio_carro_em_litros, capacidade_tanque_de_gasolina_em_litros) {
    return consumo_medio_carro_em_litros * capacidade_tanque_de_gasolina_em_litros
}
export function verificaSeOveiculoChergaraAoDestino(distancia_estimada_que_o_veiculo_ira_conseguir_percorrer, distancia_a_ser_percorrida) {
    if (distancia_estimada_que_o_veiculo_ira_conseguir_percorrer > distancia_a_ser_percorrida) {
        return "SIM"
    } else if (distancia_estimada_que_o_veiculo_ira_conseguir_percorrer == distancia_a_ser_percorrida) {
        return "NO LIMITE"
    } else {
        return "NAO"
    }
}

export function calcularMultiplicaoDiferente(numero_1, numero_2) {
    let soma = 0
    let contador = 1
    while (contador <= numero_1) {
        soma += numero_2
        contador++
    }
    return soma
}

export function calcularQueocionteDiferente(numero_1, numero_2) {
    let subtracao = numero_1
    let contador = 1
    while (subtracao >= 0) {
        if (subtracao - numero_2 >= 0) {
            subtracao -= numero_2
            contador++
        } else {
            contador--
            break
        }
    }
    return contador
}

export function calcularRestoDiferente(numero_1, numero_2, quociente) {
    return numero_1 - (numero_2 * quociente)
}

export function calcularSaldoAnual(investimento, taxa_de_juros_mensal) {
    return Number((investimento * (1 + (taxa_de_juros_mensal / 100)) ** 12).toFixed(2))
}
export function verificaSePodeContinuar(string) {
    if (string.toUpperCase() == "S") {
        return true
    } else if (string.toUpperCase() == "N") {
        return false
    }
}

export function calcularValorDoPagamento(preco_do_produto, quantidade_do_produto) {
    if (quantidade_do_produto <= 10) {
        return preco_do_produto * quantidade_do_produto
    } else if (quantidade_do_produto > 10 && quantidade_do_produto <= 20) {
        return (preco_do_produto * 0.9) * quantidade_do_produto
    } else if (quantidade_do_produto > 20 && quantidade_do_produto <= 50) {
        return (preco_do_produto * 0.8) * quantidade_do_produto
    } else if (quantidade_do_produto > 50) {
        return (preco_do_produto * 0.75) * quantidade_do_produto
    }
}

export function recebePagamento(modo_de_pagamento, valor_total_da_compra) {
    let troco = 0
    let valor_recebido_do_cliente = 0
    let deseja_finalizar = false
    if (modo_de_pagamento == 0) {
        valor_recebido_do_cliente = obter_numero(`Digite o valor dado pelo cliente (R$): `)
        troco = Number(Math.abs(valor_total_da_compra - valor_recebido_do_cliente).toFixed(2))

        if (troco > 0) {
            mostrar_texto(`Troco Total: R$ ${troco}`)
            while (deseja_finalizar == false) {
                let opcao = obter_texto("Deseja finalizar a compra? : (S/N)")
                deseja_finalizar = verificaSePodeFinalizarCompra(opcao)
            }
            mostrar_texto("Compra Finalizada com sucesso!!!")
            mostrar_texto(`Obrigado(a) pela preferencia !!!`)
        } else {
            mostrar_texto(`Troco Total: R$ ${troco}`)
            mostrar_texto("Compra Finalizada com sucesso!!!")
            mostrar_texto(`Obrigado(a) pela preferencia !!!`)
        }
    } else if (modo_de_pagamento == 1) {
        mostrar_texto(`Insira o cartão de credito por favor...`)
        setTimeout(() => {
            mostrar_texto(`Operacao realizada com sucesso!!!`)
            mostrar_texto("Compra Finalizada!!!")
            mostrar_texto(`Obrigado(a) pela preferencia !!!`)
        }, 2000)
    } else if (modo_de_pagamento == 2) {
        mostrar_texto(`Faca o envio do Pix e mostre o comprovante ao Atendente por favor...`)
        setTimeout(() => {
            mostrar_texto(`Operacao realizada com sucesso!!!`)
            mostrar_texto("Compra Finalizada!!!")
            mostrar_texto(`Obrigado(a) pela preferencia !!!`)
        }, 2000)
    }


}

export function verificaSePodeFinalizarCompra(string = '') {
    if (string.toUpperCase() == "S") {
        return true
    } else {
        return false
    }
}

export function classificaCategoriaDesconto(quantidade_do_produto) {
    if (quantidade_do_produto <= 10) {
        return ""
    } else if (quantidade_do_produto > 11 && quantidade_do_produto <= 20) {
        return " 10% OFF"
    } else if (quantidade_do_produto > 20 && quantidade_do_produto <= 50) {
        return " 20% OFF"
    } else if (quantidade_do_produto > 50) {
        return " 25% OFF"
    }

}


export function converterCentenaParaAlgarismosRomanos(centena_decimal) {
    let lista = ["", "C", 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    let centena_em_algarismos_romanos = ''
    if (centena_decimal == 0) {
        centena_em_algarismos_romanos = lista[0]
    } else if (centena_decimal == 1) {
        centena_em_algarismos_romanos = lista[1]
    } else if (centena_decimal == 2) {
        centena_em_algarismos_romanos = lista[2]
    } else if (centena_decimal == 3) {
        centena_em_algarismos_romanos = lista[3]
    } else if (centena_decimal == 4) {
        centena_em_algarismos_romanos = lista[4]
    } else if (centena_decimal == 5) {
        centena_em_algarismos_romanos = lista[5]
    } else if (centena_decimal == 6) {
        centena_em_algarismos_romanos = lista[6]
    } else if (centena_decimal == 7) {
        centena_em_algarismos_romanos = lista[7]
    } else if (centena_decimal == 8) {
        centena_em_algarismos_romanos = lista[8]
    } else if (centena_decimal == 9) {
        centena_em_algarismos_romanos = lista[9]
    }
    return centena_em_algarismos_romanos

}

export function converterDezenaParaAlgarismosRomanos(dezena_decimal) {
    let lista = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    let dezena_em_algarismos_romanos = ''
    if (dezena_decimal == 0) {
        dezena_em_algarismos_romanos = lista[0]
    } else if (dezena_decimal == 1) {
        dezena_em_algarismos_romanos = lista[1]
    } else if (dezena_decimal == 2) {
        dezena_em_algarismos_romanos = lista[2]
    } else if (dezena_decimal == 3) {
        dezena_em_algarismos_romanos = lista[3]
    } else if (dezena_decimal == 4) {
        dezena_em_algarismos_romanos = lista[4]
    } else if (dezena_decimal == 5) {
        dezena_em_algarismos_romanos = lista[5]
    } else if (dezena_decimal == 6) {
        dezena_em_algarismos_romanos = lista[6]
    } else if (dezena_decimal == 7) {
        dezena_em_algarismos_romanos = lista[7]
    } else if (dezena_decimal == 8) {
        dezena_em_algarismos_romanos = lista[8]
    } else if (dezena_decimal == 9) {
        dezena_em_algarismos_romanos = lista[9]
    }
    return dezena_em_algarismos_romanos
}
export function converterUnidadeParaAlgarismosRomanos(unidade_decimal) {
    let lista = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    let unidade_em_algarismos_romanos = ''
    if (unidade_decimal == 0) {
        unidade_em_algarismos_romanos = lista[0]
    } else if (unidade_decimal == 1) {
        unidade_em_algarismos_romanos = lista[1]
    } else if (unidade_decimal == 2) {
        unidade_em_algarismos_romanos = lista[2]
    } else if (unidade_decimal == 3) {
        unidade_em_algarismos_romanos = lista[3]
    } else if (unidade_decimal == 4) {
        unidade_em_algarismos_romanos = lista[4]
    } else if (unidade_decimal == 5) {
        unidade_em_algarismos_romanos = lista[5]
    } else if (unidade_decimal == 6) {
        unidade_em_algarismos_romanos = lista[6]
    } else if (unidade_decimal == 7) {
        unidade_em_algarismos_romanos = lista[7]
    } else if (unidade_decimal == 8) {
        unidade_em_algarismos_romanos = lista[8]
    } else if (unidade_decimal == 9) {
        unidade_em_algarismos_romanos = lista[9]
    }
    return unidade_em_algarismos_romanos
}


export function converterNumeroDecimalParaAlgarismosRomanos(numero_em_decimal) {
    //essa fucao serve para 3 digitos
    let centena = Math.floor(numero_em_decimal / 100)
    let dezena = Math.floor((numero_em_decimal % 100) / 10)
    let unidade = Math.floor((numero_em_decimal % 100) % 10);
    let numero_final_em_algarismos_romanos = ''
        //converte os algarismos de decimal para romanos
    let centena_em_algarismos_romanos = converterCentenaParaAlgarismosRomanos(centena)
    let dezena_em_algarismos_romanos = converterDezenaParaAlgarismosRomanos(dezena)
    let unidade_em_algarismos_romanos = converterUnidadeParaAlgarismosRomanos(unidade)

    numero_final_em_algarismos_romanos = `${centena_em_algarismos_romanos}${dezena_em_algarismos_romanos}${unidade_em_algarismos_romanos}`
    return numero_final_em_algarismos_romanos
}