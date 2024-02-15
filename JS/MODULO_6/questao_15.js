import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { mostrarTermosDaPaAteN } from "./funcoes_matematicas.js"

function main() {
    header("APP P.A (An=n.(n+1)/2) ");
    // ENTRADA
    const quantidade_termos = obter_numero("Digite quantos termos vc quer:");
    // PROCESSAMENTO

    //SAIDA
    mostrarTermosDaPaAteN(quantidade_termos);
}

main()