import {obter_numero,print} from "./funcoes.mjs";

/*
26. Leia os 3 (três) lados de um triângulo 
e identifique sua hipotenusa e seus catetos.

*/ 
function verificaLadoTriangulo(lado_a,lado_b,lado_c){
    let hipotenusa,cateto_a,cateto_b;
    if((lado_a**2)==(lado_b**2+lado_c**2)){
        hipotenusa=lado_a;
        cateto_a=lado_b
        cateto_b=lado_c
    }
    else if((lado_b**2)==(lado_a**2+lado_c**2)){
        hipotenusa=lado_b;
        cateto_a=lado_a
        cateto_b=lado_c
    }
    if((lado_c**2)==(lado_a**2+lado_c**2)){
        hipotenusa=lado_c;
        cateto_a=lado_a
        cateto_b=lado_c
    }
    return [hipotenusa,cateto_a,cateto_b];
    
}

function main(){
    // ENTRADA
    const lado_a=obter_numero("Lado a: ")
    const lado_b=obter_numero("Lado b: ")
    const lado_c=obter_numero("Lado c: ")
    // PROCESSAMENTO
    const lado=verificaLadoTriangulo(lado_a,lado_b,lado_c)
    // SAIDA
    print(`hipotenusa: ${lado[0]} cateto a:${lado[1]} cateto b:${lado[2]}`)

}
main()