import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { descobrirCampeao } from "./funcoes_matematicas.js"

function main() {
    header("APP ELEICAO");
    // ENTRADA
    let voto_atual = 0
    let numero_votos_candidantos_1 = 0
    let numero_votos_candidantos_2 = 0
    let numero_votos_candidantos_3 = 0;
    let numero_de_votos_brancos = 0
    let campeao;
    let numero_de_votos_nulos = 0;

    while (voto_atual >= 0) {
        voto_atual = obter_numero("Digite o voto atual:")
        if (voto_atual == 1) {
            numero_votos_candidantos_1++
        } else if (voto_atual == 2) {
            numero_votos_candidantos_2++
        } else if (voto_atual == 3) {
            numero_votos_candidantos_3++
        } else if (voto_atual == 0) {
            numero_de_votos_brancos++
        } else if (voto_atual == 9) {
            numero_de_votos_nulos++
        }



    }
    // PROCESSAMENTO
    campeao = descobrirCampeao(numero_votos_candidantos_1, numero_votos_candidantos_2, numero_votos_candidantos_3)
        // SAIDA
    mostrar_texto("--------------RESULTADO---------------")
    mostrar_texto(`Campeao: ${campeao}`)
    mostrar_texto(`canditado 1: ${numero_votos_candidantos_1} voto(s)`)
    mostrar_texto(`canditado 2: ${numero_votos_candidantos_2} voto(s)`)
    mostrar_texto(`canditado 3: ${numero_votos_candidantos_3} voto(s)`)
    mostrar_texto(`votos brancos: ${numero_de_votos_brancos} voto(s)`)
    mostrar_texto(`votos nulos: ${numero_de_votos_nulos} voto(s)`)

}
main()