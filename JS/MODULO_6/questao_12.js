import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero } from "./funcoes_entrada_saida.js"
import { calculaMedia } from "./funcoes_matematicas.js"

function main() {
    header("APP CALCULA MEDIA E SOMA DE N NUMEROS")
        // ENTRADA
    let numero_atual = 0;
    let media = 0;
    let soma = 0;
    let quantidade_de_numeros = 0;
    while (numero_atual > -1) {
        numero_atual = obter_numero("Digite um numero: (Exit: -1)")
        soma = soma + numero_atual;
        if (numero_atual <= -1) {
            break
        }
        quantidade_de_numeros++;

    }
    // PROCESSAMENTO
    media = calculaMedia(soma, quantidade_de_numeros);
    // SAIDA
    mostrar_texto(` soma:${soma} quantidade:${quantidade_de_numeros} => media:${media}`)

}
main()