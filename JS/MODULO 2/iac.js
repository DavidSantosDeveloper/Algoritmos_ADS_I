import { obterNumero,print } from "./funcoes.mjs";

/*
O IAC, Índice de Adiposidade Corporal 
é um novo método de medição corporal criado por pesquisadores 
da Universidade do Sul da Califórnia nos EUA que avalia 
a adiposidade em adultos.

*/ 
function calcula_Iac(iac,altura){
    function calcularMedidaQuadrilMinima(){
        const medida_quadril=`${Math.sqrt(altura**3) +(9+18)}`
        return medida_quadril;
    }
    function calcularMedidaQuadrilMaxima(){
        const medida_quadril=`${Math.sqrt(altura**3) +(20+18)}`
        return medida_quadril;
    }

    if (iac>=0 && iac<=8.9) {
        print(` voce esta Magro(a)`);
        print(`\n------------->>>>>>>>>>>>>><<<<<<<<<<<<<------------------
                            quadril ideal (iac-normal)
                \n---------------------------------------------
                ##### minima:${calcularMedidaQuadrilMinima()} cm
                #### maxima: ${calcularMedidaQuadrilMaxima()} cm
                \n ___________>>>>>>>>>>>>><<<<<<<<<<<<<<------`)
    }
    else if(iac>=9 && iac<=20){
        print(`voce esta normal`);
    }
    else if(iac>=21 && iac<=25.9){
        print(`voce esta com sobrepeso`);
    }
    else if(iac>=26 && iac<=29.9){
        print(`voce esta com obesidade nivel 1`);

    }  
}

function main(){
    // ENTRADA
        const altura=obterNumero("Digite sua altura (cm): ");
        const quadril=obterNumero("Digite o tamanho do quadril(cm): ");

    // PROCESSAMENTO
    const iac=(((quadril)/(altura*(altura**(1/2))))-18);
    console.log(iac)
    // SAIDA
}

main()