import { obter_numero } from "./funcoes.mjs";

/*
15. Leia a quantidade de horas aula dadas por dois professores
 e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior.
*/

function verificaMaiorSalario(salario_1, horas_1, salario_2, horas_2) {
    const prof_1 = salario_1 * horas_1;
    const prof_2 = salario_2 * horas_2;
    if (prof_1 > prof_2) {
        return prof_1;
    } else if (prof_2 > prof_1) {
        return prof_2;
    }
}


function main() {
    // ENTRADA
    const salario_1 = obter_numero("Digite o valor (hora/aula): ")
    const horas_1 = obter_numero("Quantas horas:")
    const salario_2 = obter_numero("Digite o valor (hora/aula) : ")
    const horas_2 = obter_numero("Quantas horas:")
        // PROCESSAMENTO
    const maior = verificaMaiorSalario(salario_1, horas_1, salario_2, horas_2);

    // SAIDA
    print(`o professor ${maior} tem o maior salario `)
}