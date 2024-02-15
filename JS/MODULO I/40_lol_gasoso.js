import { question } from "readline-sync";

/*
  40. Calcule a quantidade de dinheiro gasta por um fumante. 
  Dados de entrada: o número de anos que ele fuma, o nº de cigarros fumados por dia 
  e o preço de uma carteira (1 carteira tem 20 cigarros).  
*/

// ENTRADA
const anos = Number(question("Numero de anos: "));
const cigarros = Number(question("Numero de cigarros por dia: "));
const preco_carteira = Number(question("Preco da carteira: "));

// PROCESSAMENTO
const resultado = (cigarros / 20) * preco_carteira * (anos * 365);

// SAIDA
console.log(`${resultado} real(ais) gasto(s) com cigarro!`);