import {obter_numero,print} from "./funcoes.mjs";

/*
16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”.


*/ 

function main(){
    // ENTRADA
    const nota1=obter_numero("Digite a 1 nota: ")
    const nota2=obter_numero("Digite a 2 nota: ")
    // PROCESSAMENTO
    const media=calculaMedia(nota1,nota2);
    let prova_final;
    // SAIDA
    if(media>=7.0){
        print(`vc esta aprovado(a)`)
    }
    else if(media>=4.0 && media<7.0){
        print("vc esta de prova final\n")
        prova_final=obter_numero("Digite a nota da prova final: ")
        if(prova_final>=5.0){
            print("aprovado")
        }
        else{
            print("reprovado!!!")
        }
    }

}
main()