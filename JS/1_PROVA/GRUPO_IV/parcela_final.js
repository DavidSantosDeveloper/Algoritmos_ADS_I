import { question } from "readline-sync"

function main() {
    // ENTRADA
    const valor_veiculo = Number(question("Valor do veiculo(R$): "))
    const renda_comprador = Number(question("Renda comprador(R$): "))
    const vinculo_empregaticio = Number(question("Digite 0-Servidor privado 1-Servidor publico: "))
    const entrada = Number(question("Digite a entrada(R$): "))
    const saida = Number(question("Digite a % (0-30%) da saida: "))
    const numero_meses = Number(question("Em quantos meses deseja parcelar o saldo devedor? :"))
    const taxa_juros_financiamento = Number(question("Digite a taxa de juros do financiamento: "))
    const inflacao_mes = Number(question("Qual a inflacao do mes: "))

    // PROCESSAMENTO
    const valida_entrada = verificaEntrada(entrada);
    const valida_saida = verificaSaida(saida);

    // SAIDA
    if (valida_entrada) {
        if (valida_saida) {
            const entrada_porcentagem = calculaPorcentagemEntrada(entrada, valor_veiculo)
            const valor_sem_financiamento_IOF = entrada + saida;
            const valor_que_tera_acrecimo_IOF = calculaValorQueTeraAcrecimoIOF(valor_veiculo, valor_sem_financiamento_IOF)
            const valor_do_IOF = calculaValorTotalIOF(valor_que_tera_acrecimo_IOF, numero_meses);
            const financiamento_com_IOF_incluso = calculaValorFinanciametoComIOF(valor_que_tera_acrecimo_IOF, valor_do_IOF);
            const valor_total_a_pagar = calculaValorTotalPagar(valor_sem_financiamento_IOF, financiamento_com_IOF_incluso);
            const saida_porcentagem = calculaSaidaPorcentagem(saida, valor_veiculo);
            const numero_parcelas = calculaNumeroParcelas(numero_meses);
            const valor_parcelas = calculaValorParcelas(financiamento_com_IOF_incluso, numero_meses);
            const soma_parcelas = calculaSomaParcelas(numero_parcelas, valor_parcelas);
            const renda_minima = verificaRendaMinima(renda_comprador, valor_parcelas, vinculo_empregaticio);
            const valor_renda_Minima = calculaRendaMinima(renda_comprador, valor_parcelas, vinculo_empregaticio)


            console.log(`----------->>>>>>>SIMULACAO DO FINANCIAMMENTO<<<<<-------------------`)
            console.log(`@ valor de entrada (% - R$): R$ ${entrada}, ${entrada_porcentagem} % do total`) -
                console.log(`@ valor a ser financiado sem IOF( % -R$): R$ ${valor_sem_financiamento_IOF}`)
            console.log(`@ valor do IOF( % -R$): ${valor_do_IOF}`)
            console.log(`@ valor a ser financiado com IOF( % -R$): R$ ${financiamento_com_IOF_incluso}`)
            console.log(`@ valor da saída( % -R$): R$ ${saida}, ${saida_porcentagem} % do total`)
            console.log(`@ Parcelamento: ${numero_parcelas} parcelas de R$ ${valor_parcelas}`)
            console.log(`@  Soma das Parcelas: R$ ${soma_parcelas}`)
            console.log(`@ Total a ser pago(Entrada + Parcelamento + Saída) : R$ ${valor_total_a_pagar}`)
            if (renda_minima) {
                console.log(`@ renda minima: SIM (R$ ${valor_renda_Minima})`)
            } else {
                console.log(`@ >>>>>>NAO POSSUI RENDA MINIMA (R$ ${valor_renda_Minima})`)
            }


        } else {
            console.log(`SAIDA INVALIDA!!!\n Saida maxima:R$${calculaSaidaMaxima(valor_veiculo)}`)
        }
    } else {
        console.log(`ENTRADA INVALIDA!!!\n Entrada minima:R$${calculaEntradaMinimma(valor_veiculo)}`)
    }

}

function calculaEntradaMinimma(valor_veiculo) {
    return 0.3 * valor_veiculo
}

function calculaSaidaMaxima(valor_veiculo) {
    return 0.3 * valor_veiculo;
}

function calculaPorcentagemEntrada(entrada, valor_veiculo) {
    return entrada / valor_veiculo;
}

function calculaValorQueTeraAcrecimoIOF(valor_veiculo, valor_sem_financiamento_IOF) {
    return valor_veiculo - valor_sem_financiamento_IOF;
}

function calculaValorTotalIOF(valor_que_tera_acrecimo_IOF, numero_meses) {
    let juros_fixo = valor_que_tera_acrecimo_IOF * 0.0038;
    let meses_dias = numero_meses * 30;
    let juros_dia = valor_que_tera_acrecimo_IOF * 0.0001118 * meses_dias
    let total_iof = juros_fixo + juros_dia;
    return total_iof;
}

function calculaValorFinanciametoComIOF(valor_que_tera_acrecimo_IOF, valor_do_IOF) {
    return valor_que_tera_acrecimo_IOF + valor_do_IOF;
}

function calculaValorTotalPagar(valor_sem_financiamento_IOF, financiamento_com_IOF_incluso) {
    return valor_sem_financiamento_IOF + financiamento_com_IOF_incluso;
}

function calculaSaidaPorcentagem(saida, valor_veiculo) {
    return (saida / valor_veiculo) * 100;
}

function calculaNumeroParcelas(numero_meses) {
    return numero_meses;
}

function calculaValorParcelas(financiamento_com_IOF_incluso, numero_meses) {
    return financiamento_com_IOF_incluso / numero_meses;
}

function calculaSomaParcelas(numero_parcelas, valor_parcelas) {
    return numero_parcelas * valor_parcelas;
}

function verificaRendaMinima(renda_comprador, valor_parcelas, vinculo_empregaticio) {
    if (vinculo_empregaticio == 1) {
        if (renda_comprador <= 0.35 * valor_parcelas) {
            return true;
        } else {
            return false;
        }
    } else {
        if (renda_comprador <= 0.3 * valor_parcelas) {
            return true;
        } else {
            return false;
        }
    }
}

function calculaRendaMinima(renda_comprador, valor_parcelas, vinculo_empregaticio) {
    if (vinculo_empregaticio == 1) {
        return Number((valor_parcelas / 0.35).toFixed(2))
    } else {
        return Number((valor_parcelas / 0.3).toFixed(2))
    }
}

main()