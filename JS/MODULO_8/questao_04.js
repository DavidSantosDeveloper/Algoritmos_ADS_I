import { obter_numero, mostrar_texto } from "./funcoes_entrada_saida.js";
import { header } from "./funcoes_decoracao.js"
import { divideUmNumeroPor2AteQueEleSejaMenorQue1 } from "./funcoes_matematicas.js"

function main() {
    header("APP DIVIDE NUMERO POR 2 ATE QUE SEJA MENOR QUE 1");
    // ENTRADA
    const numero = obter_numero("Digite um numero:");
    // PROCESSAMENTO
    const resultado = divideUmNumeroPor2AteQueEleSejaMenorQue1(numero)

    // SAIDA
    mostrar_texto(`>>Resultado: ${resultado}`)


}
main()