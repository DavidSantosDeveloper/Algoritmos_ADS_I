//QUESTAO 01-15 -LISTA 04- WHILE

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

export function ehDevisivelPorUmNumeroN(numero_numerador, numero_denominador) {
    if (numero_numerador % numero_denominador == 0) {
        return true;
    } else {
        return false;
    }
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
            numero_primo_atual = 8
            while (true) {
                for (let index = 0; index < lista.length; index++) {
                    if (ehDevisivelPorUmNumeroN(lista[index], numero_primo_atual)) {
                        lista_de_fatores_primos_entre_os_numeros.push(numero_primo_atual)
                        lista[index] = lista[index] / numero_primo_atual

                    }
                }
                let quantidade_de_elementos_iguais_a_1 = 0;
                for (let index = 0; index < lista.length; index++) {
                    if (lista[index] == 1) {
                        quantidade_de_elementos_iguais_a_1++
                    }

                }

                console.log(`quantidade da lista=> ${lista.length}`)
                console.log(`qtd_igual_1=> ${quantidade_de_elementos_iguais_a_1}`)
                console.log(`primo atual=> ${numero_primo_atual}`)
                if (quantidade_de_elementos_iguais_a_1 == lista.length) {
                    controle = false
                    break
                }
                console.log(quantidade_de_elementos_iguais_a_1 == lista.length)

                numero_primo_atual++

            }
        }

    }
    for (let index = 0; index < lista_de_fatores_primos_entre_os_numeros.length; index++) {
        resultado_mmc *= lista_de_fatores_primos_entre_os_numeros[index]

    }
    console.log(`lista primos=> ${lista_de_fatores_primos_entre_os_numeros}`)
    return resultado_mmc
}