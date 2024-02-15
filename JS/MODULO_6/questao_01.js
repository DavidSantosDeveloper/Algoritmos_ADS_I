import { obter_numero, mostrar_texto } from "./funcoes_entrada_saida.js";

function main() {
    //ENTRADA
    const numero_maximo = obter_numero()
    let inicio = 1

    //PROCESSMENTO
    while (inicio <= numero_maximo) {
        mostrar_texto(inicio)
        inicio++
    }

    //SAIDA
}
main()