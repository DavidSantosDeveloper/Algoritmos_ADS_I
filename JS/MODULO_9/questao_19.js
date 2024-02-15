import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import {} from "./funcoes_matematicas.js"

function main() {
    header("APP BOI");
    // ENTRADA
    let id_atual
    let peso_atual
    let id_boi_mais_magro
    let id_boi_mais_gordo
    let peso_boi_mais_gordo = -Infinity
    let peso_boi_mais_magro = +Infinity;

    // PROCESSAMENTO
    while (id_atual != 0) {
        id_atual = obter_numero("Digite o id atual: ")
        if (id_atual == 0) {
            continue
        }
        peso_atual = obter_numero("Digite o peso:")
        if (peso_atual > peso_boi_mais_gordo) {
            id_boi_mais_gordo = id_atual
            peso_boi_mais_gordo = peso_atual
        } else if (peso_atual < peso_boi_mais_magro) {
            id_boi_mais_magro = id_atual
            peso_boi_mais_magro = peso_atual
        }
    }

    // SAIDA
    mostrar_texto("---------RESULTADO----------")
    mostrar_texto(` Boi  mais magro: id ${id_boi_mais_magro} peso=>${peso_boi_mais_magro}kg`)
    mostrar_texto(` Boi  mais gordo: id ${id_boi_mais_gordo} peso=>${peso_boi_mais_gordo}kg`)
}
main()