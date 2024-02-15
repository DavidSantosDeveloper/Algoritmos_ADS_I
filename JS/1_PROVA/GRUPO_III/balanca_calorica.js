import { question } from "readline-sync";

function main() {
    cabecalho("APP 'EXERCITAR COM SAUDE' !!!!")
        // ENTRADA
    const nome = question("Digite seu nome: ")
    const sexo = question("Genero: Digite F-feminino M-masculino: ")
    const idade_anos = Number(question("Digite a idade(anos): "))
    const peso_kg = Number(question("Digite o peso (kg): "))
    const altura_m = Number(question("Digite a altura(m): "))
    const perfil = Number(question("Perfil: 0-sedentario 1-pouco ativo 2-ativo 3-muito ativo: "))

    // PROCESSAMENTO
    const nescessidade_caloria_diaria = calcularNescessidadeCaloricaDiaria(sexo, idade_anos, perfil, peso_kg, altura_m);

    // SAIDA
    resultado();
    rodape("------------FIM---------------")
}

function cabecalho(texto) {
    console.log(`----------->>>>>>>>>>>>${texto}<<<<<<<<<<<-------------------\n`)
}

function rodape(texto) {
    console.log(`__________________________>>${texto}<<_____________________________\n`)
}

function calcularNescessidadeCaloricaDiaria(sexo, idade_anos, perfil, peso_kg, altura_m) {
    let formula;
    if (sexo == "F") {
        if (perfil == 0) {
            formula = 354 - (6.91 * idade_anos) + 1 * (9.36 * peso_kg) + (726 * altura_m)
        } else if (perfil == 1) {
            formula = 354 - (6.91 * idade_anos) + 1.12 * (9.36 * peso_kg) + (726 * altura_m)
        } else if (perfil == 2) {
            formula = 354 - (6.91 * idade_anos) + 1.27 * (9.36 * peso_kg) + (726 * altura_m)
        } else if (perfil == 3) {
            formula = 354 - (6.91 * idade_anos) + 1.45 * (9.36 * peso_kg) + (726 * altura_m)
        }
    } else if (sexo == "M") {
        if (perfil == 0) {
            formula = 662 - (9.53 * idade_anos) + 1 * (15.91 * peso_kg) + (539.6 * altura_m)
        } else if (perfil == 1) {
            formula = 662 - (9.53 * idade_anos) + 1.11 * (15.91 * peso_kg) + (539.6 * altura_m)
        } else if (perfil == 2) {
            formula = 662 - (9.53 * idade_anos) + 1.25 * (15.91 * peso_kg) + (539.6 * altura_m);
        } else if (perfil == 3) {
            formula = 662 - (9.53 * idade_anos) + 1.48 * (15.91 * peso_kg) + (539.6 * altura_m)
        }
    }

}

function resultado() {
    let numero_de_semanas;
    let massa_kg;
    let kcal_semana;
    let kg_semana;
    let kcal_diaria;
    const objetivo_dieta = Number(question("Digite: 0-perder peso  1-para ganhar peso"))
    selecionaObjetivoDieta(objetivo_dieta)
    descricaoNutricional(objetivo_dieta);

    function selecionaObjetivoDieta(objetivo_dieta) {

        if (objetivo_dieta == 0) {
            massa_kg = Number(question("Quantos kg deseja perder? : "))
            numero_de_semanas = Number(question("Em quantas semanas? : "))
            kcal_semana = calculaKcalSemanal(massa_kg, numero_de_semanas);
            kg_semana = calculaKgSemanal(massa_kg, numero_de_semanas);
            kcal_diaria = calculaKcalDiaria(massa_kg, numero_de_semanas);

        } else if (objetivo_dieta == 1) {
            massa_kg = Number(question("Quantos kg deseja ganhar? : "))
            numero_de_semanas = q = Number(question("Em quantas semanas? : "))
            kcal_semana = calculaKcalSemanal(massa_kg, numero_de_semanas);
            kg_semana = calculaKgSemanal(massa_kg, numero_de_semanas);
            kcal_diaria = calculaKcalDiaria(massa_kg, numero_de_semanas);
        }
    }

    function descricaoNutricional(objetivo_dieta) {
        const proteina_diaria_kcal = calculaProteinaDiariaKcal(kcal_diaria)
        const carboidratos_diaria_kcal = calculaCarboidratosDiariaKcal(kcal_diaria);
        const gordura_diaria_kcal = calculaGorduraDiariaKcal(kcal_diaria);
        const proteina_diaria_gramas = calculaProteinaDiariaGramas(kcal_diaria)
        const carboidratos_diaria_gramas = calculaCarboidratosDiariaGramas(kcal_diaria);
        const gordura_diaria_gramas = calculaGorduraDiariaGramas(kcal_diaria);
        console.log(`-----------**********DESCRICAO NUTRICIONAL PARA CONSUMO************--------------`)
        if (objetivo_dieta == 0) {
            console.log(`>>>>>KCAL DIARIAS A PERDER (-):<<<<<<`)
            console.log(`@ proteina diaria(kcal): -${proteina_diaria_kcal}`)
            console.log(`@ carboidratos diaria(kcal): -${carboidratos_diaria_kcal}`)
            console.log(`@ gordura diaria(kcal): -${gordura_diaria_kcal}`)
            console.log(`\n \n>>>>>EQUIVALENTE EM GRAMAS DIARIAS A PERDER:<<<<<<`)
            console.log(`@ proteina diaria(gramas): -${proteina_diaria_gramas}`)
            console.log(`@ carboidratos diaria(gramas): -${carboidratos_diaria_gramas}`)
            console.log(`@ gordura diaria(gramas): -${gordura_diaria_gramas}`)
        } else {
            console.log(`>>>>>KCAL DIARIAS A GANHAR(+) :<<<<<<`)
            console.log(`@ proteina diaria(kcal): +${proteina_diaria_kcal}`)
            console.log(`@ carboidratos diaria(kcal): +${carboidratos_diaria_kcal}`)
            console.log(`@ gordura diaria(kcal): +${gordura_diaria_kcal}`)
            console.log(`\n \n>>>>>EQUIVALENTE EM GRAMAS DIARIAS A GANHAR:<<<<<<`)
            console.log(`@ proteina diaria(gramas): +${proteina_diaria_gramas}`)
            console.log(`@ carboidratos diaria(gramas): +${carboidratos_diaria_gramas}`)
            console.log(`@ gordura diaria(gramas): +${gordura_diaria_gramas}`)
        }
    }

}

function calculaKcalSemanal(massa_kg, numero_de_semanas) {
    let kcal_total = massa_kg * 7700;
    return Number((kcal_total / numero_de_semanas).toFixed(2));
}

function calculaKgSemanal(massa_kg, numero_de_semanas) {
    return massa_kg / numero_de_semanas;
}

function calculaKcalDiaria(massa_kg, numero_de_semanas) {
    let semana_em_dias = numero_de_semanas * 7;
    let kcal_total = massa_kg * 7700;
    return kcal_total / semana_em_dias;
}

function calculaProteinaDiariaKcal(kcal_diaria) {
    return 0.4 * kcal_diaria
}

function calculaCarboidratosDiariaKcal(kcal_diaria) {
    return 0.4 * kcal_diaria;
}

function calculaGorduraDiariaKcal(kcal_diaria) {
    return 0.2 * kcal_diaria;
}

function calculaProteinaDiariaGramas(kcal_diaria) {
    let kcal_proteina = 0.4 * kcal_diaria;
    let kcal_em_cal = kcal_proteina * 1000;
    let kcal_em_grama = Number((kcal_em_cal / 4).toFixed(2));
    return kcal_em_grama;
}

function calculaCarboidratosDiariaGramas(kcal_diaria) {
    let kcal_proteina = 0.4 * kcal_diaria;
    let kcal_em_cal = kcal_proteina * 1000;
    let kcal_em_grama = Number((kcal_em_cal / 4).toFixed(2));
    return kcal_em_grama;
}

function calculaGorduraDiariaGramas(kcal_diaria) {
    let kcal_proteina = 0.2 * kcal_diaria;
    let kcal_em_cal = kcal_proteina * 1000;
    let kcal_em_grama = Number((kcal_em_cal / 9).toFixed(2));
    return kcal_em_grama;
}

main()