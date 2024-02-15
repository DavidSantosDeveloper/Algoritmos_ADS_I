// lista 03-while- questoes 1-16
export function calculaFatorial(numero) { //5
    let fatorial_numero;
    let guardar_mulplicaoes_anteriores;
    let contador = numero - 1; //4

    while (contador >= 1) {
        // aqui reprenta a primeira multiplicacao
        if (contador == numero - 1) {
            guardar_mulplicaoes_anteriores = numero * contador;
        }
        // usa o resultado anterior para as proximas multiplicacoes
        else {
            guardar_mulplicaoes_anteriores = guardar_mulplicaoes_anteriores * contador
        }
        contador--
    }

    fatorial_numero = guardar_mulplicaoes_anteriores;
    return fatorial_numero;

}

export function mostraTabuadaPositiva(fator_base, limite_numero) {
    let contador = 0
    let multiplicacao;
    while (contador <= limite_numero) {
        multiplicacao = fator_base * contador
        console.log(`${fator_base} X ${contador} = ${multiplicacao}`)
        contador++
    }
}

export function somaDeNumerosAteN(numero_n) {
    let soma = 0;
    let contador = 0
    while (contador < numero_n) {
        console.log(`${soma}+${contador} = ${soma+contador}`)
        soma = soma + contador
        contador++
    }
    return soma;

}

export function ehMultiplo(numero_n, multiplo_de_que_numero) {
    if (numero_n % multiplo_de_que_numero == 0) {
        return true;
    } else {
        return false;
    }
}
export function mostraMultiplosEntreInvervaloDeN(numero_n, limite_inferior, limite_superior) {
    let contador = limite_inferior + 1;
    while (contador < limite_superior) {
        if (ehMultiplo(contador, numero_n)) {
            console.log(contador)
        }
        contador++
    }

}

export function mostrarNumerosParesEmUmIntervalo(limite_inferior, limite_superior) {
    let contador = limite_inferior + 1;
    while (contador < limite_superior) {
        if (contador % 2 == 0) {
            console.log(contador)
        }
        contador++
    }
}
export function mostrarNumerosImparesEmUmIntervalo(limite_inferior, limite_superior) {
    let contador = limite_inferior + 1;
    while (contador < limite_superior) {
        if (contador % 2 != 0) {
            console.log(contador)
        }
        contador++
    }
}

export function ehPrimo(numero_n) {
    if (numero_n > 1) {
        if (numero_n == 2 || numero_n == 3 || numero_n == 5 || numero_n == 7) {
            return true;
        } else {
            if (numero_n % 2 === 0 || numero_n % 3 === 0 || numero_n % 5 === 0 || numero_n % 7 === 0) {
                return false;
            } else {
                return true;
            }
        }
    } else {
        return false;
    }
}
export function mostrarNumerospPrimosEmUmIntervalo(limite_inferior, limite_superior) {
    let contador = limite_inferior + 1;
    while (contador < limite_superior) {
        if (ehPrimo(contador)) {
            console.log(contador)
        }
        contador++
    }
}

export function calculaMedia(soma, quantidade) {
    return (soma / quantidade);
}

export function maiorQuadradoPerfeitoMenorQueN(numero_n) {
    let contador = 0;
    while (contador ** 2 < numero_n) {
        if ((contador + 1) ** 2 > numero_n) {
            break;
        }
        contador++
    }
    return contador ** 2

}

export function mostrarTermosDaPaAteN(quantidade_termos) {
    //qtd termos => 4
    let contador = 0;
    let soma_contadores = 0;
    let termo_atual;
    while (contador <= quantidade_termos) {
        termo_atual = soma_contadores + contador
        console.log(`termo atual: A${contador} => ${termo_atual}`)
        soma_contadores = soma_contadores + contador;
        contador++
    }


}

export function calcularProximoTermoDaSequenciaDeFibonacci(termo_pre_anterior, termo_anterior) {
    return termo_pre_anterior + termo_anterior;
}
export function calcularTermoPreAnteriorDaSequenciaDeFibonacci(termo_atual, termo_pre_anterior) {
    return termo_atual - termo_pre_anterior;
}
export function calcularTermoAnteriorDaSequenciaDeFibonacci(termo_atual) {
    return termo_atual;
}
export function mostrarSequenciaFibonacciAteN(quantidade_termos) {
    let contador = 1;
    let termo_atual = 0;
    let termo_anterior = 0;
    let termo_pre_anterior = 0;
    while (contador <= quantidade_termos) {
        if (contador == 1) {
            termo_atual = 0;
            termo_pre_anterior = termo_atual;
            console.log(`T1: => ${termo_atual}`);
        } else if (contador == 2) {
            termo_atual = 1;
            termo_anterior = termo_atual;
            console.log(`T2: => ${termo_atual}`);
        } else if (contador == 3) {
            termo_atual = termo_pre_anterior + termo_anterior;
            console.log(`T3: => ${termo_atual}`);
            termo_anterior = termo_atual;
            termo_pre_anterior = 1;
        } else {
            // termo_atual = termo_pre_anterior + termo_anterior;
            // termo_pre_anterior = termo_atual - termo_pre_anterior;
            // termo_anterior = termo_atual;
            // console.log(`T${contador}: => ${termo_atual}`);
            termo_atual = calcularProximoTermoDaSequenciaDeFibonacci(termo_pre_anterior, termo_anterior)
            termo_pre_anterior = calcularTermoPreAnteriorDaSequenciaDeFibonacci(termo_atual, termo_pre_anterior);
            termo_anterior = calcularTermoAnteriorDaSequenciaDeFibonacci(termo_atual);
            console.log(`T${contador}: => ${termo_atual}`)


        }
        contador++
    }
}

// lista 03- while- questoes 17-25
export function calculaValordaFormulaS(numero_n, tipo_da_formula) {
    let contador = 1
    let soma = 0;
    let auxiliar = 1
    if (tipo_da_formula == 1) {
        while (contador <= numero_n) {
            soma = soma + (1 / contador)
            contador++
        }
    } else if (tipo_da_formula == 2) {
        soma = (1 / numero_n) + (2 / numero_n - 1) + (3 / numero_n - 2)
        while (contador <= numero_n) {
            soma = soma + (contador / 1)
            contador++
        }
    } else if (tipo_da_formula == 3) {
        soma = (1 / numero_n) - ((numero_n - 1) / 2) - (3 / (numero_n - 2))
        while (contador <= numero_n) {
            soma = soma + (contador / 1)
            contador++
        }
    } else if (tipo_da_formula == 4) {
        soma = (1 / 1) - (1 / 2) + (1 / 3);
        while (contador <= numero_n) {
            soma = soma + (1 / contador)
            contador++
        }
    } else if (tipo_da_formula == 5) {
        while (contador <= numero_n) {
            if (contador == 1) {
                soma = soma + (1 / 1)
            } else {
                soma = soma + ((contador + (contador - 1)) / contador)
            }
            contador++
        }
    }
    return soma;
}

export function comparaComOPesoDoBoiMaisMagro(peso_boi_em_kg, peso_do_boi_mais_magro) {
    if (peso_boi_em_kg < peso_do_boi_mais_magro) {
        return true
    } else {
        return false;
    }
}
export function comparaComOPesoDoBoiMaisGordo(peso_boi_em_kg, peso_do_boi_mais_gordo) {
    if (peso_boi_em_kg > peso_do_boi_mais_gordo) {
        return true
    } else {
        return false;
    }
}

export function calculaSalarioBruto(horas_trabalhadas, numero_de_dependentes_do_funcionario) {
    return horas_trabalhadas * 12 + numero_de_dependentes_do_funcionario * 40;
}

export function calculaValorDoInss(salario_bruto_funcionario, porcentagem) {
    return salario_bruto_funcionario * (porcentagem / 100);
}
export function calculaImpostoDeRenda(salario_bruto_funcionario, porcentagem) {
    return salario_bruto_funcionario * (porcentagem / 100);
}
export function calculaSalarioLiquido(salario_bruto_funcionario, valor_inss, valor_imposto_renda) {
    return salario_bruto_funcionario - (valor_inss + valor_imposto_renda);
}

export function calculaMediaDeFilhos(soma_filhos, quantidade_pessoas) {
    return soma_filhos / quantidade_pessoas;
}
export function calculaMediaSalarial(soma_salarial, quantidade_pessoas) {
    return soma_salarial / quantidade_pessoas;
}

export function calculaPorcentagemDoTotal(numero_de_pessoas_com_salario_ate_1000, quantidade_pessoas) {
    return (numero_de_pessoas_com_salario_ate_1000 / quantidade_pessoas) * 100;
}

export function descobrirCampeao(numero_votos_candidantos_1, numero_votos_candidantos_2, numero_votos_candidantos_3) {
    let resultado = "Empate"
    if (numero_votos_candidantos_1 > numero_votos_candidantos_2 && numero_votos_candidantos_1 > numero_votos_candidantos_3) {
        return "1"
    } else if (numero_votos_candidantos_2 > numero_votos_candidantos_1 && numero_votos_candidantos_2 > numero_votos_candidantos_3) {
        return "2"
    } else if (numero_votos_candidantos_3 > numero_votos_candidantos_2 && numero_votos_candidantos_3 > numero_votos_candidantos_1) {
        return "3"
    }
}