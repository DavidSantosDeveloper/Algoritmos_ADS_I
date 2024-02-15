import { obter_numero, print } from "./funcoes.mjs"
/*
8. Leia data atual (dia, mês e ano) 
e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva
sua idade exata (em anos).
*/
function calculaIdade(dia_nascimento, mes_nascimento, ano_nascimento, dia_atual, mes_atual, ano_atual) {
    let idade_anos, idade_mes, idade_dias;
    if (ano_atual >= ano_nascimento) {
        if (dia_atual >= dia_nascimento && mes_atual >= mes_nascimento) {
            idade_anos = ano_atual - ano_nascimento;
            idade_mes = (12 - mes_nascimento) + mes_atual;
            idade_dias = (dia_atual - dia_nascimento) >= 0 ? (dia_atual - dia_nascimento) : (dia_atual);
        } else if (dia_atual < dia_nascimento || mes_atual < mes_nascimento) {
            idade_anos = ano_atual - ano_nascimento - 1;
            idade_mes = (12 - mes_nascimento) + mes_atual;
            idade_dias = (dia_atual - dia_nascimento) >= 0 ? (dia_atual - dia_nascimento) : (dia_atual)
        }
        return [idade_anos, idade_mes, idade_dias];

    }
}


function main() {
    // ENTRADA
    const dia_nascimento = obter_numero("Que  dia vc nasceu:");
    const mes_nascimento = obter_numero("Qual mes:")
    const ano_nascimento = obter_numero("qual o ano:")
    const dia_atual = obter_numero("Que dia eh hj(nesse instante):");
    const mes_atual = obter_numero("Em que mes estamos(1-12):")
    const ano_atual = obter_numero("Em que ano estamos(aaaa):")

    // PROCESSAMENTO
    const idade = calculaIdade(dia_nascimento, mes_nascimento, ano_nascimento, dia_atual, mes_atual, ano_atual);


    // SAIDA
    print(`idade: ${idade[0]} ano(s) ${idade[1]} mes(es) ${idade[2]} dia(s)`)
}
main()