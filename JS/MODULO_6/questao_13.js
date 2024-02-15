import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto } from "./funcoes_entrada_saida.js"
import {} from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    let numero_atual = 0;
    let contador = 0;
    let maior = 0;
    while (numero_atual > -1) {
        numero_atual = obter_numero("Digite o numero (flag -1): ")
        if (numero_atual > maior) {
            maior = numero_atual
        }
    }


    // PROCESSAMENTO

    // SAIDA
    mostrar_texto(maior)
}
main()