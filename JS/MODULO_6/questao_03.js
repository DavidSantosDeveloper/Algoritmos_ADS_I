import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js";
import { header } from "./funcoes_decoracao.js"

function main() {
    header(`APP PROGRESSAO ARITIMETICA (PA)`)
        // ENTRADA
    const termo_inicial = obter_numero("Digite o Termo inicial (A0)")
    const razao = obter_numero("Digite a razao: ") //2
    const limite = obter_numero("Digite o limite da sequencia (indice):") //5

    // PROCESSAMENTO
    let termo_atual_pg = termo_inicial; //0
    let contador = 1
    while (contador <= limite) {
        if (contador == 1) {
            mostrar_texto(termo_atual_pg)
        } else if (contador > 1) {
            termo_atual_pg = termo_atual_pg + razao;
            mostrar_texto(termo_atual_pg)
        }
        contador++
    }

    // SAIDA
}


main()