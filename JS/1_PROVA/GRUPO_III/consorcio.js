import { question } from "readline-sync";

function main() {
    // ENTRADA
    const preco_iphone = Number(question("Preco iphone(R$) :"))
    const numero_parcelas = Number(question("Parcelas 1-12:"))
    console.log("------modo de pagamento-------")
    const modo_pagamento = Number(question("0-PIX 1-CARTAO DE CREDITO 2-ENTRADA+CARTAO DE CREDITO:  "))

    // PROCESSAMENTO
    if (!valor_pix) {
        const valor_pagar_pix = calculaValorPagar(modo_pagamento, preco_iphone, numero_parcelas);
    } else if (!cartao_credito) {
        const valor_pagar_cartao = calculaValorPagar(modo_pagamento, preco_iphone, numero_parcelas);
    } else if (!entrada_cartao) {
        const valor_pagar_entrada_cartao = calculaValorPagar(modo_pagamento, preco_iphone, numero_parcelas);

    }
    // SAIDA
    exibeSaida(modo_pagamento, valor_pagar, preco_iphone, valor_pix, cartao_credito, entrada_cartao)
}

function respostaAoModoPagamento(modo_pagamento) {
    if (modo_pagamento == 0) {
        const valor_pix = Number(question("Valor em Pix:"))
    } else if (modo_pagamento == 1) {
        const cartao_credito = Number(question("Cartao de credito: "))
    } else if (modo_pagamento == 2) {
        const entrada_cartao = Number(question("Entrada (R$): "))
        const restante = preco_iphone - entrada_cartao;
    }
}

function calculaValorPagar(modo_pagamento, preco_iphone, numero_parcelas) {
    if (modo_pagamento == 0) {
        return preco_iphone * 0.85;
    } else if (modo_pagamento == 1) {
        return preco_iphone * 0.9;
    } else {
        const juros = preco_iphone * 0.04 + numero_parcelas * (restante / numero_parcelas)
        return preco_iphone * 1.04 + numero_parcelas * (restante / numero_parcelas)
    }

}

function exibeSaida() {
    console.log(`---------->>>>>>>>MODO DE PAGAMENTO<<<<<<<------------`)
    if (modo_pagamento == 0) {
        console.log(`------ 0 =>PIX--------`)
        console.log(`>>>>Valor a pagar: R$ ${valor_pagar_pix}`)
        console.log(`>>>>economia: R$ ${preco_iphone*0.15}`)
    } else if (modo_pagamento == 1) {
        console.log(`____________ 1 => CARTAO DE CREDITO___________`)
        console.log(`Valor a pagar: R$ ${valor_pagar_cartao}`)
        console.log(`>>>>economia: R$ ${preco_iphone*0.1}`)
    } else if (modo_pagamento == 2) {
        console.log(`____________ 2 => ENTRADA + CARTAO DE CREDITO___________`)
        console.log(`Valor a pagar: R$ ${valor_pagar_entrada_cartao}`)
        console.log(`Entrada: R$ ${entrada_cartao} \n Restante:R$ ${restante} \n juros: R$ ${juros}`)
    }
}
main()