//QUESTAO 01-15 -LISTA 04- WHILE

import { obter_numero } from "./funcoes_entrada_saida.js"

export function mostrarDivisores(numero_atual) {
    console.log(`divisores `)
    let divisor = 1
    let contador = 0
    while (divisor <= numero_atual) {
        if (numero_atual % divisor == 0) {
            contador++
            console.log(`divisor(${contador}) => ${divisor}`)
        }
        divisor++
    }
}

export function ehDivisivelPor2(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}
export function ehDivisivelPor3(numero) {
    if (numero % 3 == 0) {
        return true
    } else {
        return false
    }
}
export function ehDivisivelPor5(numero) {
    if (numero % 5 == 0) {
        return true
    } else {
        return false
    }
}
export function ehDivisivelPor7(numero) {
    if (numero % 7 == 0) {
        return true
    } else {
        return false
    }
}
export function ehDivisivelDeleMesmo(numero) {
    return true
}
export function EhHoraDeDividirPeloProprioNumero(sim_ou_nao) {
    return sim_ou_nao;
}

export function verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(numero_primo_atual, lista_de_numeros) {
    let contador = 0
    let existe_pelo_menos_um = false
    while (contador < lista_de_numeros.length) {
        if (numero_primo_atual == 2) {
            if (ehDivisivelPor2(lista_de_numeros[contador])) {
                existe_pelo_menos_um = true
                contador++
            } else {
                contador++
            }
        } else if (numero_primo_atual == 3) {
            if (ehDivisivelPor3(lista_de_numeros[contador])) {
                existe_pelo_menos_um = true
                contador++
            } else {
                contador++
            }
        } else if (numero_primo_atual == 5) {
            if (ehDivisivelPor5(lista_de_numeros[contador])) {
                existe_pelo_menos_um = true
                contador++
            } else {
                contador++
            }
        } else if (numero_primo_atual == 7) {
            if (ehDivisivelPor7(lista_de_numeros[contador])) {
                existe_pelo_menos_um = true
                contador++
            } else {
                contador++
            }
        } else {
            contador++

        }
        return existe_pelo_menos_um

    }

}

export function calculaMmc(numero_1, numero_2) {
    let indice_da_lista = 0
    let numero_primo_atual = 2
    let lista_de_numeros = [numero_1, numero_2]
    let lista_de_fatores_primos_entre_os_numeros = []
    let resultado_mmc = 1
    let verifica_se_eh_hora_de_dividir_pelo_proprio_numero = EhHoraDeDividirPeloProprioNumero(false)
    let contador_while_interno = 0
    let controle_while_externo = true
    while (controle_while_externo) {
        if (numero_primo_atual == 2) {
            while (contador_while_interno < lista_de_numeros.length) {
                if (verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(numero_primo_atual, lista_de_numeros)) {
                    if (ehDivisivelPor2(lista_de_numeros[contador_while_interno])) {
                        lista_de_numeros[contador_while_interno] = lista_de_numeros[contador_while_interno] / 2
                        contador_while_interno++
                    }
                    lista_de_fatores_primos_entre_os_numeros.push(2)
                } else {
                    contador_while_interno = 0
                    numero_primo_atual = 3
                    break
                }
            }

        } else if (numero_primo_atual == 3) {
            while (contador_while_interno < lista_de_numeros.length) {
                if (verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(numero_primo_atual, lista_de_numeros)) {
                    if (ehDivisivelPor3(lista_de_numeros[contador_while_interno])) {
                        lista_de_numeros[contador_while_interno] = lista_de_numeros[contador_while_interno] / 3
                        contador_while_interno++
                    }
                    lista_de_fatores_primos_entre_os_numeros.push(3)
                } else {
                    numero_primo_atual = 5
                    contador_while_interno = 0
                    break
                }

            }

        } else if (numero_primo_atual == 5) {
            while (contador_while_interno < lista_de_numeros.length) {
                if (verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(numero_primo_atual, lista_de_numeros)) {
                    if (ehDivisivelPor5(lista_de_numeros[contador_while_interno])) {
                        lista_de_numeros[contador_while_interno] = lista_de_numeros[contador_while_interno] / 5
                        contador_while_interno++
                    }
                    lista_de_fatores_primos_entre_os_numeros.push(5)
                } else {
                    numero_primo_atual = 7
                    contador_while_interno = 0
                    break
                }

            }
            contador_while_interno = 0
        } else if (numero_primo_atual == 7) {
            while (contador_while_interno < lista_de_numeros.length) {
                if (verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(numero_primo_atual, lista_de_numeros)) {
                    if (ehDivisivelPor7(lista_de_numeros[contador_while_interno])) {
                        lista_de_numeros[contador_while_interno] = lista_de_numeros[contador_while_interno] / 7
                        contador_while_interno++
                    }
                    lista_de_fatores_primos_entre_os_numeros.push(7)
                } else {
                    verifica_se_eh_hora_de_dividir_pelo_proprio_numero = EhHoraDeDividirPeloProprioNumero(true)
                    contador_while_interno = 0
                    numero_primo_atual = 0
                    break
                }

            }

        } else if (verifica_se_eh_hora_de_dividir_pelo_proprio_numero == true) {
            for (let index = 0; index < lista_de_numeros.length; index++) {
                lista_de_fatores_primos_entre_os_numeros.push(lista_de_numeros[index])
                lista_de_numeros[contador_while_interno] = lista_de_numeros[index] / lista_de_numeros[index]
                controle_while_externo = false


            }
            console.log(`lista dividir pelo proprio umero 1FOR ${lista_de_numeros}`)
            console.log(`lista de  fatores primos=>${lista_de_fatores_primos_entre_os_numeros}`)
            console.log("-------------")
            verifica_se_eh_hora_de_dividir_pelo_proprio_numero = EhHoraDeDividirPeloProprioNumero(true)
        }
    }
    for (let index = 0; index < lista_de_fatores_primos_entre_os_numeros.length; index++) {
        resultado_mmc *= lista_de_fatores_primos_entre_os_numeros[index]
    }
    console.log(`lista dividir pelo proprio umero 2FOR ${lista_de_numeros}`)
    console.log(`lista de  fatores primos=>${lista_de_fatores_primos_entre_os_numeros}`)
    console.log("-------------")
    return resultado_mmc



}
export function calculaMmcDeDoisNumeros(numero_1, numero_2) {
    let controle = true
    let lista = [numero_1, numero_2]
    let lista_de_fatores_primos_entre_os_numeros = []
    let resultado_mmc = 1
    let numero_primo_atual = 2
    while (controle) {

        if (verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(2, lista)) {

            lista_de_fatores_primos_entre_os_numeros.push(2)
            if (ehDivisivelPor2(lista[0]) && ehDivisivelPor2(lista[1])) {
                lista[0] = lista[0] / 2
                lista[1] = lista[1] / 2

            } else if (ehDivisivelPor2(lista[0])) {
                lista[0] = lista[0] / 2
            } else if (ehDivisivelPor2(lista[1])) {
                lista[1] = lista[1] / 2

            }
            continue

        } else {
            numero_primo_atual = 3
        }
        if (verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(3, lista)) {
            lista_de_fatores_primos_entre_os_numeros.push(3)
            if (ehDivisivelPor3(lista[0]) && ehDivisivelPor3(lista[1])) {
                lista[0] = lista[0] / 3
                lista[1] = lista[1] / 3
            } else if (ehDivisivelPor3(lista[0])) {
                lista[0] = lista[0] / 3

            } else if (ehDivisivelPor3(lista[1])) {
                lista[1] = lista[1] / 3

            }
            continue

        } else {
            numero_primo_atual = 5
        }
        if (verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(5, lista)) {
            lista_de_fatores_primos_entre_os_numeros.push(5)
            if (ehDivisivelPor5(lista[0]) && ehDivisivelPor5(lista[1])) {
                lista[0] = lista[0] / 5
                lista[1] = lista[1] / 5
            } else if (ehDivisivelPor5(lista[0])) {
                lista[0] = lista[0] / 5
            } else if (ehDivisivelPor5(lista[1])) {
                lista[1] = lista[1] / 5
            }
            continue

        } else {
            numero_primo_atual = 7
        }
        if (verificaSeExistePeloMenosUmNumeroDivisivilPeloNumeroPrimo(7, lista)) {
            lista_de_fatores_primos_entre_os_numeros.push(7)
            if (ehDivisivelPor7(lista[0]) && ehDivisivelPor7(lista[1])) {
                lista[0] = lista[0] / 7
                lista[1] = lista[1] / 7
            } else if (ehDivisivelPor7(lista[0])) {
                lista[0] = lista[0] / 7
            } else if (ehDivisivelPor7(lista[1])) {
                lista[1] = lista[1] / 7
            }
            continue
        } else {
            numero_primo_atual++
        }
        if (numero_primo_atual > 7) {
            lista_de_fatores_primos_entre_os_numeros.push(lista[0])
            lista_de_fatores_primos_entre_os_numeros.push(lista[1])
            lista[0] = lista[0] / lista[0]
            lista[1] = lista[1] / lista[1]

        }
        if (lista[0] == 1 && lista[1] == 1) {

            controle = false

        }
    }
    for (let index = 0; index < lista_de_fatores_primos_entre_os_numeros.length; index++) {
        resultado_mmc *= lista_de_fatores_primos_entre_os_numeros[index]

    }
    console.log(`lista primos=> ${lista_de_fatores_primos_entre_os_numeros}`)
    return resultado_mmc
}

export function divideUmNumeroPor2AteQueEleSejaMenorQue1(numero) {
    let contador = numero;
    while (contador >= 1) {
        if (contador == 1) {
            return contador / 2
        } else {
            contador = contador / 2
        }
    }
}

export function divisaodeXPorN(numero_x, numero_n) {
    console.log(`x=>${numero_x} n=>${numero_n}`)
    while (numero_n > 2) {
        console.log(`${numero_x}/${numero_n} => ${numero_x/numero_n}`)
        numero_x = numero_x / numero_n;
        numero_n--
    }
}

export function verificaSeEhNumero(string) {
    let contar_digitos_numericos = 0
    let lista_de_caracteres_numericos_validos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for (let i = 0; i < string.length; i++) {
        for (const indice of lista_de_caracteres_numericos_validos) {
            if (string[i] == indice) {
                contar_digitos_numericos++
                break
            }
        }
    }
    if (contar_digitos_numericos == string.length) {
        return true
    } else {
        return false;
    }
}

export function calcularNumeroDeDigitos(numero_n) {
    return numero_n.toString().length
}

export function pedirNumerosAteAcharUmIgualAoNumeroN(numero_n) {
    let novo_numero;
    while (novo_numero != numero_n) {
        novo_numero = obter_numero("Digite um numero: ")
    }
}

export function mostrarNumerosConsecutivosCujaSomaSejaAteUmNumeroX(numero_x) {
    let valor_atual = 0
    while ((valor_atual - 1) + valor_atual <= numero_x) {
        console.log(valor_atual)
        valor_atual++

    }
}

export function calcularPontoDeNadador(classificacao) {
    if (classificacao == 1) {
        return 9
    } else if (classificacao == 2) {
        return 6
    } else if (classificacao == 3) {
        return 4
    } else {
        return 3
    }
}

export function mostrarVencendor(somatorio_pontos_clube_a, somatorio_pontos_clube_b) {
    if (somatorio_pontos_clube_a > somatorio_pontos_clube_b) {
        console.log("CLUBE VENCEDOR: A ")
        console.log(`Pontos clube A: ${somatorio_pontos_clube_a} pts`)
        console.log(`Pontos clube B: ${somatorio_pontos_clube_b} pts`)
    } else if (somatorio_pontos_clube_b > somatorio_pontos_clube_a) {
        console.log("CLUBE VENCEDOR: B ")
        console.log(`Pontos clube A: ${somatorio_pontos_clube_a} pts`)
        console.log(`Pontos clube B: ${somatorio_pontos_clube_b} pts`)
    } else {
        console.log("EMPATE!!!!!!! ")
        console.log(`Pontos clube A: ${somatorio_pontos_clube_a} pts`)
        console.log(`Pontos clube B: ${somatorio_pontos_clube_b} pts`)
    }
}

export function calcularVolumeTotalDaBagagemDosPassageiros(quantidade_de_bagagens) {
    return quantidade_de_bagagens * 10
}
export function calcularPesoDosPassageiros(volume_total_da_bagagem_dos_passageiros, quantidade_de_passageiros) {
    return volume_total_da_bagagem_dos_passageiros + quantidade_de_passageiros * 70
}
export function calcularPesoDaCarga(somatorio_do_peso_containers) {
    return somatorio_do_peso_containers
}
export function calcularCombustivelDoAviao(peso_decolagem_fixo_kg, peso_carga, peso_passageiros) {
    return (peso_decolagem_fixo_kg - peso_carga - peso_passageiros) / 1.5
}
export function verificaSePodeDecolar(combustivel) {
    if (combustivel >= 10000) {
        return true
    } else {
        return false
    }
}
export function calcularMediaPonderadaDe3Numeros(nota1, nota2, nota3) {
    return (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
}

export function calcularSalarioReajustado(salario_atual) {
    if (salario_atual < 3000) {
        return salario_atual * 1.25
    } else if (salario_atual >= 3000 && salario_atual < 6000) {
        return salario_atual * 1.20
    } else if (salario_atual >= 6000 && salario_atual < 10000) {
        return salario_atual * 1.15
    } else if (salario_atual >= 10000) {
        return salario_atual * 1.10
    }
}

export function calcularDiferenca(somatorio_salario_atual, somatorio_salario_reajustado) {
    return Math.abs(somatorio_salario_reajustado - somatorio_salario_atual)
}

export function calcularTotalDeVotos(total_de_entrevistados) {
    return total_de_entrevistados
}
export function calcularPorcentagem(votos_do_canditado, total_de_votos) {
    return (votos_do_canditado / total_de_votos) * 100
}

export function converterNumeroDecimalParaBinario(numero_em_decimal) {
    //10

    let lista = []
    while (numero_em_decimal >= 2) {
        if (numero_em_decimal % 2 == 0) {
            lista.push(numero_em_decimal % 2)
            numero_em_decimal /= 2
        } else if (numero_em_decimal % 2 == 1) {
            lista.push(numero_em_decimal % 2)
            numero_em_decimal = (numero_em_decimal - 1) / 2
        }

    }
    if (numero_em_decimal < 2) {
        lista.push(1)
    }
    lista.reverse()
    return lista
}
export function converterNumeroDecimalParaHexadecimal(numero_em_decimal) {

    let lista = []
    let lista_de_caracteres_exclusivos_do_hexadecimal = ['A', 'B', 'C', 'D', 'E', 'F']
    while (numero_em_decimal >= 16) {
        if (numero_em_decimal % 16 == 0) {
            lista.push(numero_em_decimal % 16)
            numero_em_decimal /= 16
        } else {
            lista.push(numero_em_decimal % 16)
            numero_em_decimal = (numero_em_decimal - (numero_em_decimal % 16)) / 16
        }
    }
    if (numero_em_decimal < 16) {
        lista.push(numero_em_decimal)
    }
    lista.reverse()
    for (let index = 0; index < lista.length; index++) {
        if (lista[index] == 10) {
            lista[index] = lista_de_caracteres_exclusivos_do_hexadecimal[0]
        } else if (lista[index] == 11) {
            lista[index] = lista_de_caracteres_exclusivos_do_hexadecimal[1]
        } else if (lista[index] == 12) {
            lista[index] = lista_de_caracteres_exclusivos_do_hexadecimal[2]
        } else if (lista[index] == 13) {
            lista[index] = lista_de_caracteres_exclusivos_do_hexadecimal[3]
        } else if (lista[index] == 14) {
            lista[index] = lista_de_caracteres_exclusivos_do_hexadecimal[4]
        } else if (lista[index] == 15) {
            lista[index] = lista_de_caracteres_exclusivos_do_hexadecimal[5]
        }

    }

    return lista
}
export function calcular_porcentagem(valor, percentual) {
    return valor * (percentual / 100)
}