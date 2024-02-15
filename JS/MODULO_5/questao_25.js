import {obter_numero,print} from "./funcoes.mjs";

/*
25. Verifique a validade de uma senha fornecida pelo usuário. 
A senha é 1234. O algoritmo deve escrever
uma mensagem de permissão de acesso ou não.

*/ 

function verificaValidadeSenha(senha){
    if(senha=="1234"){
        return true;
    }
    else{
        return false;
    }
}

function main() {
    //ENTRADA
    const senha=obter_numero("Digite a senha: ")
    // PROCESSAMENTO
    const validade=verificaValidadeSenha(senha);
    // SAIDA
    if(validade){
        print("logado!!!")
    }
    else{
        print("Acesso negado!!!")
    }
}

main()