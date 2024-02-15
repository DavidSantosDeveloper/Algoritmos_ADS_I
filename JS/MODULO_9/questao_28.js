import { header } from "./funcoes_decoracao.js"
import { mostrar_texto, obter_numero, obter_texto, obter_numero_positivo } from "./funcoes_entrada_saida.js"
import { calcularMultiplicaoDiferente } from "./funcoes_matematicas.js"

function main() {
    let numero_aleatorio = Number((Math.random() * 100).toFixed(0))
    mostrar_texto(`>>>${numero_aleatorio}`)
    let numero_de_tentativas_do_usuario = 0
    header("APP adivinha numero")

    //ENTRADA
    let numero_sugerido_pelo_usuario
    while (numero_sugerido_pelo_usuario != numero_aleatorio) {
        numero_sugerido_pelo_usuario = obter_numero("Digite um numero(0-99): ")
            //PROCESSAMENTO
        if (numero_sugerido_pelo_usuario == numero_aleatorio) {
            //SAIDA
            mostrar_texto(`VC ACERTOU!!! eh mesmo ${numero_aleatorio}`)
            numero_de_tentativas_do_usuario++
            mostrar_texto(`foram precisas ${numero_de_tentativas_do_usuario} tentativas`)
        } else {
            if (numero_sugerido_pelo_usuario > numero_aleatorio) {
                if (numero_sugerido_pelo_usuario >= numero_aleatorio + 30) {
                    mostrar_texto("eh menor que isso!")
                    numero_de_tentativas_do_usuario++
                } else if (numero_sugerido_pelo_usuario >= numero_aleatorio + 20 && numero_sugerido_pelo_usuario < numero_aleatorio + 30) {
                    mostrar_texto("quete-eh menor que isso!")
                    numero_de_tentativas_do_usuario++
                } else if (numero_sugerido_pelo_usuario >= numero_aleatorio + 10 && numero_sugerido_pelo_usuario < numero_aleatorio + 20) {
                    mostrar_texto("muito quete-eh menor que isso!")
                    numero_de_tentativas_do_usuario++
                } else if (numero_sugerido_pelo_usuario <= numero_aleatorio + 10) {
                    mostrar_texto("quetissimo-eh menor que isso!")
                    numero_de_tentativas_do_usuario++
                }

            } else if (numero_sugerido_pelo_usuario < numero_aleatorio) {

                if (numero_sugerido_pelo_usuario >= numero_aleatorio - 10) {
                    mostrar_texto("quetissimo-eh maior que isso!")
                    numero_de_tentativas_do_usuario++
                } else if (numero_sugerido_pelo_usuario >= numero_aleatorio - 20) {
                    mostrar_texto("quete-eh maior que isso!")
                    numero_de_tentativas_do_usuario++
                } else if (numero_sugerido_pelo_usuario < numero_aleatorio - 20) {
                    mostrar_texto("eh maior que isso!")
                    numero_de_tentativas_do_usuario++
                }
            }
        }
    }




}
main()