import { header } from './funcoes_decoracao.js'
import { obter_numero, mostrar_texto, obter_texto } from './funcoes_entrada_saida.js'
import { calcularPontoDeNadador, mostrarVencendor } from './funcoes_matematicas.js'

function main() {
    header("APP CLUBE DE NADADORES");
    // ENTRADA
    let numero_da_prova = -1;
    let quantidade_de_nadadores = -1;
    let somatorio_pontos_clube_a = 0
    let somatorio_pontos_clube_b = 0
    while (numero_da_prova != 0 && quantidade_de_nadadores != 0) {
        numero_da_prova = obter_numero("Digite o numero da prova: ")
        quantidade_de_nadadores = obter_numero("Quantidade de nadadores: ")
        let contador = 1;
        mostrar_texto("--------DADOS DO NADADOR(A): -------------")
        while (contador <= quantidade_de_nadadores) {
            let nome = obter_texto("nome do nadador(a): ")
            let classificacao = obter_numero("Digite a classificacao: ")
            let tempo = obter_texto("Tempo: ")
            let clube = obter_texto("Digite o clube (a/b):");
            // PROCESSAMENTO
            if (clube.toUpperCase() == "A") {
                somatorio_pontos_clube_a += calcularPontoDeNadador(classificacao)
            } else if (clube.toUpperCase() == "B") {
                somatorio_pontos_clube_b += calcularPontoDeNadador(classificacao)
            }
            contador++

        }
    }


    // SAIDA
    mostrarVencendor(somatorio_pontos_clube_a, somatorio_pontos_clube_b)
}
main()