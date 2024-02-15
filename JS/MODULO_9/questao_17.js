import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import {} from "./funcoes_matematicas.js"

function main() {
    header("APP CARTAO DE DESFILE DE BELEZA")
        // ENTRADA
    let nome_atual = ""
    let altura_atual
    let peso_atual
    let nome_candidata_mais_magra
    let nome_candidata_mais_gorda
    let nome_candidata_mais_alta
    let nome_candidata_mais_baixa
    let peso_candidata_mais_magra = +Infinity
    let peso_candidata_mais_gorda = -Infinity
    let altura_candidata_mais_alta = -Infinity
    let altura_candidata_mais_baixa = +Infinity
    while (nome_atual.toUpperCase() != "FIM") {
        nome_atual = obter_texto("Digite o nome da candidata:")
        if (nome_atual.toUpperCase() == "FIM") {
            continue
        }
        altura_atual = obter_numero("Digite a altura (m):")
        peso_atual = obter_numero("Digite o peso da candidata(kg): ")
        if (altura_atual > altura_candidata_mais_alta) {
            nome_candidata_mais_alta = nome_atual
            altura_candidata_mais_alta = altura_atual
        } else if (altura_atual < altura_candidata_mais_baixa) {
            nome_candidata_mais_baixa = nome_atual
            altura_candidata_mais_baixa = altura_atual
        }
        if (peso_atual > peso_candidata_mais_gorda) {
            nome_candidata_mais_gorda = nome_atual
            peso_candidata_mais_gorda = peso_atual
        } else if (peso_atual < peso_candidata_mais_magra) {
            nome_candidata_mais_magra = nome_atual
            peso_candidata_mais_magra = peso_atual
        }

    }
    // PROCESSAMENTO

    // SAIDA
    mostrar_texto("-----------RESULTADOS------------------")
    mostrar_texto(`nome da candidata mais magra:${nome_candidata_mais_magra} - ${peso_candidata_mais_magra}kg`)
    mostrar_texto(`nome da candidata mais gorda:${nome_candidata_mais_gorda} - ${peso_candidata_mais_gorda}kg`)
    mostrar_texto(`nome da candidata mais alta:${nome_candidata_mais_alta} - ${altura_candidata_mais_alta}m`)
    mostrar_texto(`nome da candidata mais baixa:${nome_candidata_mais_baixa} - ${altura_candidata_mais_baixa}m`)
}
main()