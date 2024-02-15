import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto } from "./funcoes_entrada_saida.js"
import { maiorQuadradoPerfeitoMenorQueN } from "./funcoes_matematicas.js"

function main() {
    header("APP MAIOR QUADRADO PERFEITO ATE N")
        // ENTRADA
    let numero_atual = obter_texto("Digite o numero 'N' desejado: ");
    // PROCESSAMENTO
    let resultado = maiorQuadradoPerfeitoMenorQueN(numero_atual);
    // SAIDA
    mostrar_texto(`Resultado: ${resultado} => ${Math.sqrt(resultado)}**2 = ${resultado}`)
}
main()