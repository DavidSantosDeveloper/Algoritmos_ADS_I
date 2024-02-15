import { header } from './funcoes_decoracao.js'
import { obter_numero, mostrar_texto } from './funcoes_entrada_saida.js'
import { calcularMediaPonderadaDe3Numeros } from './funcoes_matematicas.js'

function main() {
    //ENTRADA
    let pontos_jogador1 = 0
    let pontos_jogador2 = 0
    let diferenca_de_pontos_entre_jogadores = 0
    let pergunta

    while (pontos_jogador1 < 5 && pontos_jogador2 < 5 || diferenca_de_pontos_entre_jogadores < 2) {
        pergunta = obter_numero("Digite o jogador que marcou=>")
        if (pergunta == 1) {
            pontos_jogador1++
            diferenca_de_pontos_entre_jogadores = Math.abs(pontos_jogador1 - pontos_jogador2)
        } else {
            pontos_jogador2++
            diferenca_de_pontos_entre_jogadores = Math.abs(pontos_jogador2 - pontos_jogador1)
        }
    }
    if (pontos_jogador1 > pontos_jogador2) {
        mostrar_texto("jogado 1 venceu!!!!!!")
    } else if (pontos_jogador2 > pontos_jogador1) {
        mostrar_texto("jogado 2 venceu!!!!!!")
    }

}
//PROCESSAMENTO

//SAIDA

main()