import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { header } from "./funcoes_decoracao.js"

function main() {
    header("APP PROGRESSAO GEOMETRICA (PGA)")
        // ENTRADA
    const termo_inicial = obter_numero("Digite o termo inicial (A1)")
    const razao = obter_numero("Digite a razao: ")
    const limite = obter_numero("Digite o limite(quantidade de numeros): ")
        // PROCESSAMENTO
    let termo_atual_pg = termo_inicial;
    let contador = 1;

    while (contador <= limite) {
        if (contador == 1) {
            mostrar_texto(termo_atual_pg)
        } else if (contador > 1) {
            termo_atual_pg = termo_atual_pg * razao
            mostrar_texto(termo_atual_pg)
        }
        contador++
    }

    // SAIDA
}
main()