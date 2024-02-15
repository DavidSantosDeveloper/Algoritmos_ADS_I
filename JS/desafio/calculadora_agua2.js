import { question } from "readline-sync";

// funcao que ira exibir o cabecalho na tela
function cabecalho() {
    console.log("----Saiba sua ingestão de agua ideal----");
    console.log("##############");
}

// funcao que ira exibir o rodape na tela
function rodape() {
    console.log("----Beba agua, não fique desidratado")
}

/*
-----------obter_numero-----------------

obs:
a funcao obter_numero  quando chamada/invocada(que eh quando se usa nome_da_funcao() ) 
precisa entao receber um valor que representa 
a mensagem que ficaria entre "" dentro da question()

obs2:

a funcao tbm esta convertendo a resposta do usuario para o
tipo Number (que representa numeros reais) e entao ela
retorna (return)  esse numero para onde ela foi chamada
, no caso para dentro funcao main.
-----------------------------------------
*/

function obter_numero(mensagem) {
    // poderia retornar diretamente tbm;
    // assim:    return Number(question(mensagem));
    const numero = Number(question(mensagem));
    return numero;

}

// -----------FUNCAO MAIN----------------------
// obs: so pode haver uma funcao com o mesmo nome,
// no caso ,havia duas funcao main sendo criadas
// -------------------------------------------------
function main() {

    // chamar a funcao cabecalho 
    cabecalho()


    //Entrada
    const peso = obter_numero("Qual o seu peso?");
    const ativ_fisica = question("Qual é o seu nivel de atividade fisica? (moderada ou intensa)")

    //Processamento
    const ativ_moderada = (peso * 35) / 1000
    const ativ_intenso = (peso * 45) / 1000

    //Saida
    console.log(`A ingestao em atividade moderada é ${ativ_moderada.toFixed(2)} L `)
    console.log(`A ingestao em atividade intensa é ${ativ_intenso.toFixed(2)} L`)

    //chamar a funcao rodape 
    rodape()
}



// -------chamando a funcao main-=-------- 
/*

### obs1 : eh importante sempre chamar a funcao main  no final do codico
### obs2  : Para que o que esta dentro de uma funcao seja executado,
           eh preciso chamar-la . No caso da funcao main
           , que está responsavel por fazer  entrada,
           processamento e saida do programa, se ela nao for chamada
           ele simplesmente nao executara.

---------------------------------------------------------
*/
main()