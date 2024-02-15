import { obter_numero, print } from "./funcoes.mjs";

/*
11. Leia quatro números (opção, num 1, num2, num3) 
e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2;
 e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.

*/

function verificaOpcao(opcao, numero1, numero2, numero3) {
    if (opcao === 1) {
        return numero1;
    } else if (opcao === 2) {
        return numero2;
    } else if (opcao === 3) {
        return numero3;
    }
}

function main() {
    // ENTRADA
    const numero1 = obter_numero("Digite o 1 numero: ");
    const numero2 = obter_numero("Digite o 2 numero: ");
    const numero3 = obter_numero("Digite o 3 numero: ");
    const opcao = obter_numero("Digite o a opcao(1-3): ");

    // PROCESSAMENTO
    const resultado = verificaOpcao(opcao, numero1, numero2, numero3);
    // SAIDA
    print(`de acordo com a opcao ${opcao} o valor da variavel eh:${resultado}`)

}
main()