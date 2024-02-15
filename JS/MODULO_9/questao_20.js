import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calculaDistancia, verificaSeOveiculoChergaraAoDestino } from "./funcoes_matematicas.js"

function main() {
    header("APP 'VER SE O COMBUSTIVEL DÁ'")
        // ENTRADA
    let consumo_medio_carro_em_litros
    let distancia_a_ser_percorrida
    let capacidade_tanque_de_gasolina_em_litros
    let distancia_estimada_que_o_veiculo_ira_conseguir_percorrer
    let veiculo_ira_chegar_ao_destino
    while (consumo_medio_carro_em_litros != 0) {
        consumo_medio_carro_em_litros = obter_numero("Digite o consumo médio (Km/l): ")
        if (consumo_medio_carro_em_litros == 0) {
            continue
        }
        distancia_a_ser_percorrida = obter_numero("Digite a distancia a ser percorrida(Km): ")
        capacidade_tanque_de_gasolina_em_litros = obter_numero("Digite a capacidade do tanque do veiculo(l): ")
            // PROCESSAMENTO
        distancia_estimada_que_o_veiculo_ira_conseguir_percorrer = calculaDistancia(consumo_medio_carro_em_litros, capacidade_tanque_de_gasolina_em_litros)
        veiculo_ira_chegar_ao_destino = verificaSeOveiculoChergaraAoDestino(distancia_estimada_que_o_veiculo_ira_conseguir_percorrer, distancia_a_ser_percorrida)
            // SAIDA
        mostrar_texto("---------Resultados------------")
        mostrar_texto(`distancia estimada que o veiculo ira conseguir se deslocar: ${distancia_estimada_que_o_veiculo_ira_conseguir_percorrer} km`)
        mostrar_texto(`veiculo ira chegar ao destino: ${veiculo_ira_chegar_ao_destino}`)

    }



}
main()