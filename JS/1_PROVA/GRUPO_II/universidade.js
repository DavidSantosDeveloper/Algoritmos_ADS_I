import { question } from "readline-sync";

function main() {
    // ENTRADA
    const hora_aula = Number(question("Valor-hora base: "))
    const nome_professor = Number(question("ome do professor: "))
    const horas_semanais = Number(question("Hora por semana:"))
    const qualificacao = question("Qualificacao(E-M-D): ")
    const filhos_menores = Number(question("Numero de filhos menores de 6 anos: "))
    const experiencia = Number(question("Experiencia (anos): "))
    const plano_saude = Number(question("Gastocom plano de saude(R$): "))

    // PROCESSAMENTO
    const valor_hora = calculaValoHora(hora_aula, qualificacao, experiencia);
    const salario_semanal = calculaSalarioSemanal(hora_aula, horas_semanais);
    const auxilio_creche = calculaValorCreche(filhos_menores);
    const resssarcimento_saude = resSaude(plano_saude);
    const auxilio_combustivel = calculaAuxilioComustivel(horas_semanais);
    const salario_bruto = calculaSalarioBruto(salario_semanal);
    const previdencia = calculaPrevidencia(salario_bruto);
    const imposto_renda = calculaImpostoRenda(salario_bruto - previdencia);
    const desconto_total = calculaDescontoTotal(previdencia, imposto_renda);
    const salario_liquido = calculaSalarioLiquido(salario_bruto, desconto_total);


    // SAIDA
    console.log(`--------->>>>>>>>>>CONTRACHEQUE<<<<<<<<<<-------------------\n`)
    console.log(`professor(a): ${nome_professor}`)
    console.log(`valor hora: R$ ${valor_hora}`)
    console.log(` salario semanal: R$ ${salario_semanal}`)
    console.log(`\n ######## GANHOS:   \n`)
    console.log(`salario base mensal: R$ ${salario_bruto}`)
    console.log(`auxilio creche: R$ ${auxilio_creche}`)
    console.log(`ressarcimento saude: R$ ${resssarcimento_saude}`)
    console.log(`auxilio combustivel: R$ ${auxilio_combustivel}`)
    console.log(`salario bruto: R$ ${salario_bruto}`)
    console.log(`\n ######## DESCONTOS:   \n`)
    console.log(`previdencia: R$ ${previdencia}`)
    console.log(`imposto de renda: R$ ${imposto_renda}`)
    console.log(`total de descontos: R$ ${desconto_total}`)
    console.log(`########## SALARIO LIQUIDO `)
    console.log(`Salario liquido: R$ ${salario_liquido}`)


}


function calculaValoHora(hora_aula, qualificacao, experiencia) {
    if (qualificacao.toUpperCase() === "E") {
        hora_aula *= 1.2;
    } else if (qualificacao.toUpperCase() === "M") {
        hora_aula *= 1.3;
    } else if (qualificacao.toUpperCase() === "D") {
        hora_aula *= 1.5;
    }

    if (experiencia - Math.floor(experiencia) >= 0.5) {
        experiencia = Math.ceil(experiencia);
        hora_aula += experiencia * (0.05 * hora_aula);
    } else {
        hora_aula += experiencia * (0.05 * hora_aula);

    }
    return hora_aula;
}

function calculaSalarioSemanal(hora_aula, horas_semanais) {
    const salario_semanal = hora_aula * horas_semanais;
    return salario_semanal;
}

function calculaValorCreche(filhos_menores) {
    return filhos_menores * 700;
}

function resSaude(plano_saude) {
    if (plano_saude * 0.5 <= 500) {
        return plano_saude * 0.5
    } else {
        return 500;
    }
}

function calculaAuxilioComustivel(horas_semanais) {
    const combustivel = (horas_semanais / 8) * 30;
    return combustivel;
}

function calculaSalarioBruto(salario_semanal) {
    return 4.5 * salario_semanal;
}

function calculaPrevidencia(salario_bruto) {
    if (salario_bruto <= 1302) {
        return 0.075 * salario_bruto;
    } else if (salario_bruto > 1302 && salario_bruto <= 2500) {
        return 0.09 * salario_bruto;
    } else if (salario_bruto > 2500 && salario_bruto <= 3900) {
        return 0.12 * salario_bruto;
    } else if (salario_bruto > 3900 && salario_bruto <= 7500) {
        return 0.14 * salario_bruto;
    } else if (salario_bruto > 7500) {
        return 0.16 * salario_bruto;
    }
}

function calculaImpostoRenda(salario_bruto) {
    let imposto = 0;
    const execede_5000 = salario_bruto - 5000;
    if (execede_5000 >= 0) {
        imposto += execede_5000 * 0.275;
    }
    return imposto;
}

function calculaDescontoTotal(previdencia, imposto) {
    return previdencia + imposto;
}

function calculaSalarioLiquido(salario, desconto) {
    return salario - desconto;
}

main()