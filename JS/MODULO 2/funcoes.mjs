import { question } from "readline-sync";
export function teste() {
    console.log("testando export")
}
export function code2() {
    console.log("funcao code 2 funcionando")
}

export function obterTexto(descricao_campo) {
    const entrada_dado = question(descricao_campo);
    return entrada_dado;
}
export function obterNumero(descricao_campo) {
    const entrada_dado = Number(question(descricao_campo));
    return entrada_dado;
}
export function print(mensagem_saida) {
    const meensagem = console.log(mensagem_saida);
    return mensagem_saida;
}
export function calculaAgua(peso, intensidade) {
    const agua_total = peso * (35 + intensidade) / 1000;
    return agua_total;
}
export default { teste, code2 }