import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularValorDoPagamento, classificaCategoriaDesconto, recebePagamento } from "./funcoes_matematicas.js"

function main() {
    mostrar_texto(``)
    header("APP CAIXA ELETRONICO");
    // ENTRADA
    let nome_do_produto = ''
    let preco_do_produto
    let quantidade_do_produto
    let total_a_ser_pago
    let categoria_de_desconto
    let numero_do_produto_atual = 1
    let valor_total_da_compra = 0
    let modo_de_pagamento

    while (condicao_de_continuidade(nome_do_produto)) {
        nome_do_produto = obter_texto("Digite o nome do produto: ")
        if (condicao_de_continuidade(nome_do_produto) == false) {
            continue
        }
        preco_do_produto = obter_numero("Digite o preco do produto(R$): ")
        quantidade_do_produto = obter_numero("Digite a quantidade do produto (unidades): ")
        total_a_ser_pago = calcularValorDoPagamento(preco_do_produto, quantidade_do_produto)
        categoria_de_desconto = classificaCategoriaDesconto(quantidade_do_produto)
        valor_total_da_compra += total_a_ser_pago
        mostrar_texto(`---------------------------- ITEM ${numero_do_produto_atual}-----------------------`)
        mostrar_texto(`   ${quantidade_do_produto} unidade(s) de ${nome_do_produto} custa(m) R$ ${total_a_ser_pago}   ${categoria_de_desconto}`)
        mostrar_texto(`----------------------------------------------------------`)
        mostrar_texto("")


    }
    mostrar_texto("\n_______________>>>>PAGAMENTO<<<<<<<___________________")
    mostrar_texto(`Valor total da compra: R$ ${valor_total_da_compra} `)
    modo_de_pagamento = obter_numero(`>>MODO DE PAGAMENTO (0-DINHEIRO 1-CARTAO 2-PIX):  `)
    recebePagamento(modo_de_pagamento, valor_total_da_compra)
        // PROCESSAMENTO

    // SAIDA

}

function condicao_de_continuidade(nome_do_produto = '') {
    if (nome_do_produto.toUpperCase() == "FIM") {
        return false
    } else {
        return true
    }
}
main()