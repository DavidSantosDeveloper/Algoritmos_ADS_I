import { questionNewPassword } from 'readline-sync'
import { mostrar_texto } from './Bibliotecas/funcoes_entrada_saida.mjs'
import { verifica_se_o_texto_usa_apenas_os_caracteres, verifica_se_caractere_esta_no_texto } from './Bibliotecas/funcoes_string.mjs'

mostrar_texto(verifica_se_o_texto_usa_apenas_os_caracteres('2', '01'))