import { header } from './funcoes_decoracao.js'
import { obter_numero, mostrar_texto } from './funcoes_entrada_saida.js'
import { calcularMediaPonderadaDe3Numeros } from './funcoes_matematicas.js'

function main() {
    header("APP MEDIA NOTAS");
    //ENTRADA

    //>>>>>>WHILE 1- variaveis usadas
    let matricula;
    let nota1;
    let nota2
    let nota3
    let media
    let total_alunos = 0
    let total_alunos_aprovados = 0
    let total_alunos_reprovados = 0
        // PROCESSAMENTO
    while (matricula != 0) {
        matricula = obter_numero("Digite a matricula (flag-0): ")
        if (matricula == 0) {
            continue
        }
        nota1 = obter_numero("Digite a nota 1: ")
        nota2 = obter_numero("Digite a nota 2: ")
        nota3 = obter_numero("Digite a nota 3: ")
        media = calcularMediaPonderadaDe3Numeros(nota1, nota2, nota3)
        if (media >= 7) {
            console.log("aprovado(a)!!!!")
            total_alunos++
            total_alunos_aprovados++
        } else {
            console.log("Reprovado(a)!!!!")
            total_alunos++
            total_alunos_reprovados++
        }
    }
    // SAIDA
    console.log("-----RESULTADO-------")
    console.log(`alunos da turma ${total_alunos}`)
    console.log(`total aprovado=> ${total_alunos_aprovados}`)
    console.log(`total reprovado=> ${total_alunos_reprovados}`)
}
main()