import { question } from "readline-sync"

export function print(mensagem){
    console.log(mensagem)
}
export function obter_numero(numero){
    return Number(question(numero));
}
