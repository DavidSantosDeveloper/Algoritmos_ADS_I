import {obter_numero,print} from "./funcoes.mjs";

/*
22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras:
hora e minuto). 
Calcule e escreva a duração do jogo (horas e minutos),
 sabendo-se que o tempo
máximo de duração do jogo é de 24 horas e 
que ele pode iniciar-se em um dia e terminar no dia
seguinte.

*/ 

function calculaDuracao(inicio_hora,inicio_minuto,final_hora,final_minuto){
    let duracao;
    if(duracao){

    }
}

function main() {
    //ENTRADA
    const inicio_hora=obter_numero("Digite a hora inicial")
    const inicio_minuto=obter_numero("Digite o minuto inicial")
    const final_hora=obter_numero("Digite a hora final")
    const final_minuto=obter_numero("Digite o minuto final")
    // PROCESSAMENTO
    const duracao=calculaDuracao(inicio_hora,inicio_minuto,final_hora,final_minuto)

    // SAIDA
    print(duracao)
}
main()