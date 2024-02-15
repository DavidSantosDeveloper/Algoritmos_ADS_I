import { obter_numero, print } from "./funcoes.mjs";

/*
7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3
(três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se
formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou
escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).

*/

function verificaTriangulo(lado1, lado2, lado3) {
    if (((lado1 + lado2) >= lado3 || (lado2 + lado3) >= lado1) && (lado1 > 0 && lado2 > 0 && lado3 > 0)) {
        return true;
    } else {
        return false;
    }
}

function verificaTrianguloEquilatero(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return true;
    } else {
        return false;
    }
}

function verificaTrianguloEscaleno(lado1, lado2, lado3) {
    if (lado1 != lado2 && lado1 != lado3) {
        return true;
    } else {
        return false;
    }
}

function verificaTrianguloIsoceles(lado1, lado2, lado3) {
    if ((lado1 === lado2 && lado2 !== lado3) || (lado2 === lado3 && lado2 !== lado1)) {
        return true;
    } else {
        return false;
    }
}

function main() {
    // ENTRADA
    const ladoA = obter_numero("Digite o lado a:");
    const ladoB = obter_numero("Digite o lado b:");
    const ladoC = obter_numero("digite o lado c:");

    // PROCESSAMENTO
    const triangulo = verificaTriangulo(ladoA, ladoB, ladoC);
    const triangulo_equilatero = verificaTrianguloEquilatero(ladoA, ladoB, ladoC)
    const triangulo_escaleno = verificaTrianguloEscaleno(ladoA, ladoB, ladoC)
    const triangulo_isoceles = verificaTrianguloIsoceles(ladoA, ladoB, ladoC);


    // SAIDA
    if (triangulo) {
        if (triangulo_equilatero) {
            print("triangulo equilatero!!")
        } else if (triangulo_escaleno) {
            print("triangulo escaleno!!!")
        } else if (triangulo_isoceles) {
            print(" triangulo isoceles!!!")
        }
    } else {
        print("nao eh um trianngulo valido!!!!")
    }

}

main()