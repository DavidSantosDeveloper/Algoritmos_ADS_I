import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calculaMmc } from "./funcoes_matematicas.js"


function main() {
    //ENTRADA
    let controle = 1
    let numero_1
    let numero_2
    let mmc
    while (controle != 0) {
        numero_1 = obter_numero_positivo("Digite o 1 numero ")
        numero_2 = obter_numero_positivo("Digite 0 2 numero ")
        mmc = calculaMmc(numero_1, numero_2)
        mostrar_texto(`MMC => ${mmc}`)
        controle = obter_numero("Deseja continuar(0-NAO 1-SIM)")


    }
    //PROCESSAMENTO

    //SAIDA
}
main()