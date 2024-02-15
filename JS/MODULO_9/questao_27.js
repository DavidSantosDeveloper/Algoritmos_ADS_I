import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularMultiplicaoDiferente } from "./funcoes_matematicas.js"

function main() {
    // ENTRADA
    let lista_homens_idade = []
    let lista_homens_estado_civil = []
    let lista_mulheres_idade = []
    let lista_mulheres_estado_civil = []
    let genero_atual = ""
    let idade_atual
    let estado_civil_atual
    let pessoa_atual = 1
    while (pessoa_atual <= 3) {
        genero_atual = obter_texto("Digite o genero da pessoa(M-masculino F-feminino): ")
        idade_atual = obter_numero("Digite a idade atual: ")
        estado_civil_atual = obter_numero("Digite o estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo): ")
            // PROCESSAMENTO
        if (genero_atual.toUpperCase() == "M") {
            lista_homens_idade.push(idade_atual)
            lista_homens_estado_civil.push(estado_civil_atual)
        } else if (genero_atual.toUpperCase() == "F") {
            lista_mulheres_idade.push(idade_atual)
            lista_mulheres_estado_civil.push(estado_civil_atual)
        }


        pessoa_atual++
    }
    let exemplo = [lista_homens_idade, lista_homens_estado_civil, "------", lista_mulheres_idade, lista_mulheres_estado_civil]
    mostrar_texto(`lista : ${exemplo}`)


    // SAIDA
}
main()