import { header } from './funcoes_decoracao.js'
import { obter_numero, mostrar_texto, obter_texto } from './funcoes_entrada_saida.js'
import { calcularVolumeTotalDaBagagemDosPassageiros, calcularPesoDosPassageiros, calcularPesoDaCarga, calcularCombustivelDoAviao, verificaSePodeDecolar } from './funcoes_matematicas.js'

function main() {
    // ENTRADA

    //WHILE 1- variaveis usadas
    let numero_de_containeres = obter_numero("Digite o numero de container(s): ")
    let container_atual = 0;
    let somatorio_do_peso_containers = 0;

    //WHILE 2- variaveis usadas
    let numero_do_bilhete;
    let quantidade_de_bagagens = 0
    let quantidade_de_passageiros = 0;


    while (container_atual <= numero_de_containeres) {
        const peso_container = obter_numero("Digite o peso do container (Kg):")
        somatorio_do_peso_containers += peso_container
        container_atual++
    }
    mostrar_texto(`---DADOS DOS PASAGEIROS----`)
    while (numero_do_bilhete != 0) {
        numero_do_bilhete = obter_numero("Digite o numero do bilhete: ")
        quantidade_de_bagagens += obter_numero("quantidade de bagagens: ")
        quantidade_de_passageiros++
    }


    // PROCESSAMENTO
    const volume_total_da_bagagem_dos_passageiros = calcularVolumeTotalDaBagagemDosPassageiros(quantidade_de_bagagens)
    const peso_passageiros = calcularPesoDosPassageiros(volume_total_da_bagagem_dos_passageiros, quantidade_de_passageiros)
    const peso_carga = calcularPesoDaCarga(somatorio_do_peso_containers)
    const peso_decolagem_fixo_kg = 500000
    const combustivel = calcularCombustivelDoAviao(peso_decolagem_fixo_kg, peso_carga, peso_passageiros)
    const permissao_pra_decolar = verificaSePodeDecolar(combustivel)
        // SAIDA
    mostrar_texto("-------------RESULTADOS OBTIDOS---------------- ")
    mostrar_texto(`Quantidade de Passageiros: ${quantidade_de_passageiros}`)
    mostrar_texto(`Quantidade total do volume da bagagem: ${volume_total_da_bagagem_dos_passageiros} kg`)
    mostrar_texto(`Peso dos Passageiros: ${peso_passageiros} kg`)
    mostrar_texto(`Peso da carga: ${peso_carga} kg `)
    mostrar_texto(`Quantidade Possivel de combustivel: ${combustivel} l`)
    mostrar_texto(`Permitido decolar: ${permissao_pra_decolar}`)




}
main()