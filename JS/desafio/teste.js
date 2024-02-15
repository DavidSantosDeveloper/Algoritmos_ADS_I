function obter_numero(numero_recebido_de_main) {
    const numero_convertido = Number(numero_recebido_de_main)
    return numero_convertido;
}

function main() {
    const retorno_da_funcao = obter_numero("2")

    console.log(retorno_da_funcao);
}

main()