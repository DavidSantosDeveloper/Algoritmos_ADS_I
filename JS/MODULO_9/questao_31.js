import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_decimal_ate_3_digitos } from "./funcoes_entrada_saida.js"
import { converterNumeroDecimalParaAlgarismosRomanos } from "./funcoes_matematicas.js"

function main() {
    header('APP CONVERSOR DE DECIMAL PARA ROMANO (3 DIGITOS) ');
    // ENTRADA
    let numero_em_decimal = 1
    let numero_decimal_em_algarismos_romanos
    while (numero_em_decimal > 0) {
        numero_em_decimal = obter_decimal_ate_3_digitos("Digite um numero em decimal(3 digitos): ")
        if (numero_em_decimal < 0) {
            continue
        }
        // PROCESSAMENTO
        numero_decimal_em_algarismos_romanos = converterNumeroDecimalParaAlgarismosRomanos(numero_em_decimal);
        // SAIDA
        mostrar_texto(numero_decimal_em_algarismos_romanos)

    }



}
main()