import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto } from "./funcoes_entrada_saida.js"
import { comparaComOPesoDoBoiMaisGordo, comparaComOPesoDoBoiMaisMagro } from "./funcoes_matematicas.js"

function main() {
    header("APP CADRASTRO BOVINO");
    // ENTRADA
    let nome_boi;
    let peso_boi_em_kg;
    let peso_do_boi_mais_magro = +Infinity;
    let peso_do_boi_mais_gordo = -Infinity;
    let id_boi_mais_magro;
    let id_boi_mais_gordo;
    let controle;
    let id_atual = 1
    while (controle != 0) {
        nome_boi = obter_texto("Digite o nome do boi: ")
        peso_boi_em_kg = obter_numero("Digite o peso do boi (em kg): ")
        if (comparaComOPesoDoBoiMaisMagro(peso_boi_em_kg, peso_do_boi_mais_magro)) {
            peso_do_boi_mais_magro = peso_boi_em_kg;
            id_boi_mais_magro = id_atual;
        }
        if (comparaComOPesoDoBoiMaisGordo(peso_boi_em_kg, peso_do_boi_mais_gordo)) {
            peso_do_boi_mais_gordo = peso_boi_em_kg
            id_boi_mais_gordo = id_atual;
        }
        controle = obter_numero("Deseja continuar: (0-NAO 1-SIM)")
        id_atual++
    }
    // PROCESSAMENTO 
    // SAIDA
    mostrar_texto(`BOI MAIS MAGRO: ID =>${id_boi_mais_magro} PESO: ${peso_do_boi_mais_magro} KG `)
    mostrar_texto(`BOI MAIS GORDO: ID =>${id_boi_mais_gordo} PESO: ${peso_do_boi_mais_gordo} KG `)

}
main()