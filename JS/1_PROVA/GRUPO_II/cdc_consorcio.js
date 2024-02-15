import { question } from "readline-sync";

function main() {
    // ENTRADA
    const tabela_fipe_referencia = 89.000;
    const valor_modelo_desejado = 185.000;

    const percentual_fipe = Number(question("Percentual da fipe: "))
    const quantidade_meses = Number(question("Parcela em meses (numero): "))
    const taxa_administracao_cdc = Number(question("Taxa da administracao cdc(%): "))
    const taxa_administracao_consorcio = Number(question("Taxa consorcio: "))
        // PROCESSAMENTO
    const valor_bem_cdc = calculaValorBemCdc(percentual_fipe, tabela_fipe_referencia, valor_modelo_desejado);
    const juro_total_cdc = calculaJuroTotalCdc(valor_bem_cdc, taxa_administracao_cdc);
    const numero_parcelas_cdc = calculaNumeroParcelaCdc(quantidade_meses);
    const total_pagar_cdc = calculaTotalPagarCdc(valor_bem_cdc, juro_total_cdc);
    const valor_parcelado_cdc = calculaValorParceladoCdc(total_pagar_cdc, quantidade_meses);

    const valor_bem_consorcio = calculaValorBemConsorcio(percentual_fipe, tabela_fipe_referencia, valor_modelo_desejado);
    const juro_total_consorcio = calculaJuroTotalConsorcio(valor_bem_consorcio, taxa_administracao_consorcio);
    const numero_parcelas_cosorcio = calculaNumeroParcelaConsorcio(quantidade_meses);
    const total_pagar_consorcio = calculaTotalPagarConsorcio(valor_bem_consorcio, juro_total_consorcio);
    const valor_parcelado_consorcio = calculaValorParceladoConsorcio(total_pagar_consorcio, quantidade_meses);

    // SAIDA
    console.log(`------------------>>>>>CDC<<<<<<<<-----------------------`)
    console.log(` Valor a ser Parcelado: R$ ${valor_parcelado_cdc}`)
    console.log(`Juros Totais: R$ ${juro_total_cdc}`)
    console.log(`Parcelamento: ${numero_parcelas_cdc} prestações de R$ ${valor_parcelado_cdc}`)
    console.log(`Total a pagar (Entrada+Prestações): R$ ${total_pagar_cdc}`)
    console.log("____________________________________________________________\n")

    console.log(`------------------>>>>>CONSORCIO<<<<<<<<-----------------------`)
    console.log(` Valor a ser Parcelado: R$ ${valor_parcelado_consorcio}`)
    console.log(`Juros Totais: R$ ${juro_total_consorcio}`)
    console.log(`Parcelamento: ${numero_parcelas_cosorcio} prestações de R$ ${valor_parcelado_consorcio}`)
    console.log(`Total a pagar (Entrada+Prestações): R$ ${total_pagar_consorcio}`)
    console.log("____________________________________________________________\n")

    console.log("---------->>>>>>>>>>>>SUGESTAO DE ESCOLHA<<<<<<<<-----------------------");

    if (comparaCdc_consorcio(total_pagar_cdc, total_pagar_consorcio) == "CDC") {
        console.log(`a melhor opcao e o CDC com relacao ao valor final!`)
    } else if (comparaCdc_consorcio(total_pagar_cdc, total_pagar_consorcio) == "CONSORCIO") {
        console.log(`a melhor opcao e o CONSORCIO com relacao ao valor final!`)
    } else {
        console.log("AS OPCOES SAO EQUIVALENTES EM RELACAO AO PRECO FINAL")
    }

}

function comparaCdc_consorcio(total_pagar_cdc, total_pagar_consorcio) {
    if (total_pagar_cdc > total_pagar_consorcio) {
        return "CDC";
    } else if (total_pagar_consorcio > total_pagar_cdc) {
        return "CONSORCIO"
    } else {
        return "iguais"
    }
}

function calculaValorBemCdc(percentual_fipe, tabela_fipe_referencia, valor_modelo_desejado) {
    const auxiliar = valor_modelo_desejado - ((percentual_fipe / 100) * tabela_fipe_referencia)
    const resultado = auxiliar > 0 ? auxiliar : auxiliar * (-1);
    return resultado;
}

function calculaValorParceladoCdc(total_pagar_cdc, quantidade_meses) {
    return total_pagar_cdc / quantidade_meses;

}

function calculaJuroTotalCdc(valor_bem_cdc, taxa_administracao_cdc) {
    return valor_bem_cdc * (taxa_administracao_cdc / 100)
}

function calculaNumeroParcelaCdc(quantidade_meses) {
    return quantidade_meses;
}

function calculaTotalPagarCdc(valor_bem_cdc, juro_total_cdc) {
    return valor_bem_cdc * (juro_total_cdc / 100);
}


function calculaValorBemConsorcio(valor_modelo_desejado, juro_total_consorcio) {
    return valor_modelo_desejado * (juro_total_consorcio / 100);
}

function calculaJuroTotalConsorcio(valor_bem_consorcio, taxa_administracao_consorcio) {
    return valor_bem_consorcio * (taxa_administracao_consorcio / 100);
}

function calculaNumeroParcelaConsorcio(quantidade_meses) {
    return quantidade_meses;
}

function calculaTotalPagarConsorcio(valor_bem_consorcio, juro_total_consorcio) {
    return valor_bem_consorcio * (juro_total_consorcio / 100)
}

function calculaValorParceladoConsorcio(total_pagar_consorcio, quantidade_meses) {
    return total_pagar_consorcio / quantidade_meses;
}




main()