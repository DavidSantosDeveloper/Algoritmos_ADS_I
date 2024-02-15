import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { mostrarDivisores } from "./funcoes_matematicas.js"

function main() {
    header("APP DIVISORES DE UM NUMERO");
    let numero_atual = -1
        //ENTRADA
    while (numero_atual != 0) {
        numero_atual = obter_numero("Digite um numero: ")
        mostrar_texto(`numero digitado => ${numero_atual}`)
        mostrarDivisores(numero_atual)
    }

    //PROCESSAMENTO 

    //SAIDA
}
main()