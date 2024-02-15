import {obter_numero,print} from "./funcoes.mjs";

/*
24. Leia os coeficientes (A, B e C) 
de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero).

*/ 

function calcularX1(a,b,c,delta) {
    x1=(-(b)+(Math.sqrt(delta)))/(2*a)
    return x1;
}
function calcularX2(a,b,c,delta) {
    x2=(-(b)-(Math.sqrt(delta)))/(2*a)
    return x2;
}

function main() {
    // ENTRADA
    const a=obter_numero("Coeficiente A:")
    const b=obter_numero("Coeficiente B:")
    const c=obter_numero("Coeficiente C:")
    // PROCESSAMENTO
    let x1,x2;
    let delta=((b)**2-(4*a*c));
    if(a>0 && delta>=0){
        x1=calcularX1(a,b,c,delta)
        x2=calcularX2(a,b,c,delta)
    }

    // SAIDA
    if(x1!==underfined && x2!==underfined){
        print(`x1: ${x1}`)
        print(`x2: ${x2}`)
    }
}
main()