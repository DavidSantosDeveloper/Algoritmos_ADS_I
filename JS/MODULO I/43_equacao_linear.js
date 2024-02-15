import { question } from "readline-sync";

/*
    39. Leia três números inteiros 
    e positivos (A, B, C) 
    e calcule a seguinte expressão: 
*/

// ENTRADA
console.log(`{ a.x + b.y = c \n{ d.x + e.y = f`)
const coeficienteA = Number(question("Digite o coeficiente A: "));
const coeficienteB = Number(question("Digite o coeficiente B: "));
const coeficienteC = Number(question("Digite o coeficiente C: "));
const coeficienteD = Number(question("Digite o coeficiente D: "));
const coeficienteE = Number(question("Digite o coeficiente E: "));
const coeficienteF = Number(question("Digite o coeficiente F: "));
// PROCESSAMENTO
const x = (coeficienteC * coeficienteE - coeficienteB * coeficienteF) / (coeficienteA * coeficienteE - coeficienteB * coeficienteD);
const y = (coeficienteA * coeficienteF - coeficienteC * coeficienteD) / (coeficienteA * coeficienteE - coeficienteB * coeficienteD);

// SAIDA
console.log(`
_____________________________________________________________________________\n
Resposta: \n 
_____________________________________________________________________________\n
             |x =(C.E-B.F)/(A.E-B.D)| \n
              x =(${coeficienteC}.${coeficienteE}-${coeficienteB}.${coeficienteF}) /(${coeficienteA}.${coeficienteE}-${coeficienteB}.${coeficienteD})\n
              x =(${coeficienteC*coeficienteE}-${coeficienteB*coeficienteF}) /(${coeficienteA*coeficienteE}-${coeficienteB*coeficienteD})\n
              x =(${coeficienteC*coeficienteE-coeficienteB*coeficienteF}) /(${coeficienteA*coeficienteE-coeficienteB*coeficienteD})\n
              x =${x}\n\n
            
             |y =(A.F-C.D)/(A.E-B.D)| \n
              y =(${coeficienteA}.${coeficienteF}-${coeficienteC}.${coeficienteD}) /(${coeficienteA}.${coeficienteE}-${coeficienteB}.${coeficienteD})\n
              y =(${coeficienteA*coeficienteF}-${coeficienteC*coeficienteD}) /(${coeficienteA*coeficienteE}-${coeficienteB*coeficienteD})\n
              y =(${coeficienteA*coeficienteF-coeficienteC*coeficienteD}) /(${coeficienteA*coeficienteE-coeficienteB*coeficienteD})\n
              y =${y}\n\n
            
             _________
             |S={x,y} |\n\
             
             =>|S=(${x},${y})
              `);