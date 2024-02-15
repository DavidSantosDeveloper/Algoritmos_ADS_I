import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js";

function main() {
    // ENTRADA
    const numero_maximo = obter_numero()
    let inicio = 1

    // PROCESSAMENTO
    while (inicio <= numero_maximo) {
        if (inicio % 2 == 0) {
            mostrar_texto(inicio)
        }
        inicio++
    }
    // SAIDA

}
main()