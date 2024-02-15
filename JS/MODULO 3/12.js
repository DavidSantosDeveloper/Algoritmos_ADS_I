import {question} from "readline-sync";
import {obter_numero} from "./funcoes.mjs"
/*
12. Leia o salário de um trabalhador 
e escreva seu novo salário com um aumento de 25%.

*/ 
function salario_percentual(salario){
    const salario=Number(salario*1.25);
    return salario;
}
function main(){
    // ENTRADA
    const salario_base=obter_numero("digite o salario: ")
    // PROCESSAMENTO
    const novo_salario=salario_percentual(salario_base);
    // SAIDA
    console.log(` R$ ${salario_base}  corresponde a R$ ${novo_salario}`)
}

main()