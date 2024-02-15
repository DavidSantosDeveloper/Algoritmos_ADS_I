import { obter_numero, print } from "./funcoes.mjs";

/*
Leia 3 (três) números (cada número corresponde 
a um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo (a soma dos ângulos internos 
é igual a 180o). Se formam,
verifique se formam um triângulo acutângulo (3 ângulos < 90o),
 retângulo (1 ângulo = 90o) ou
obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau).



*/

function verificaTriangulo(angulo1, angulo2, angulo3) {
    const soma = angulo1 + angulo2 + angulo3;
    if (soma === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
        return true
    } else {
        return false
    }
}

function vereficaTrianguloAcutangulo(angulo1, angulo2, angulo3) {
    if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90) {
        return true;
    } else {
        return false;
    }
}

function verificaTrianguloObtusangulo(angulo1, angulo2, angulo3) {
    if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90) {
        return true;
    } else {
        return false;
    }
}

function vereficaTrianguloRetangulo(angulo1, angulo2, angulo3) {
    if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90) {
        return true;
    } else {
        return false;
    }
}

function main() {
    // ENTRADA
    const angulo1 = obter_numero("Digite o 1 angulo: ");
    const angulo2 = obter_numero("Digite o 2 angulo: ");
    const angulo3 = obter_numero("Digite o 3 angulo: ");
    // PROCESSAMENTO
    const triangulo = verificaTriangulo(angulo1, angulo2, angulo3);
    const triangulo_acutangulo = vereficaTrianguloAcutangulo(angulo1, angulo2, angulo3);
    const triangulo_obtusagulo = verificaTrianguloObtusangulo(angulo1, angulo2, angulo3);
    const triangulo_retangulo = vereficaTrianguloRetangulo(angulo1, angulo2, angulo3);


    // SAIDA
    if (triangulo) {
        if (triangulo_acutangulo) {
            print("eh um triangulo acutangulo!");
        } else if (triangulo_obtusagulo) {
            print("eh um triangulo obsutangulo!");
        } else if (triangulo_retangulo) {
            print("triangulo retangulo!!!")
        }
    } else {
        print("nao eh um triangulo valido!!!")
    }


}

main()