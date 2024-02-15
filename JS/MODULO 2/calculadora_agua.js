import { calculaAgua, obterNumero, obterTexto, print } from "./funcoes.mjs";

function main() {
    // ENTRADA
    const peso = obterNumero("Digite o peso");
    const intensidade_atividade = obterTexto("Intensidade da atividade (0-moderada,1-intensa): ") * 10;
    // PROCESSAMENTO
    const agua_nescesaria = calculaAgua(peso, intensidade_atividade);
    // SAIDA
    print('A QUANTIDADE DE AGUA NSCESSARIA EH: ' + agua_nescesaria + " L");


}

main()