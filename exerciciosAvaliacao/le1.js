/*Supondo que a população de um país A seja da ordem de 80000 habitantes com
uma taxa anual de crescimento de 3% e que a população de B seja 200000
habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que
calcule e escreva o número de anos necessários para que a população do país A
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.*/

function ultrapassa() {
  let a = 80000;
  const taxaA = 0.03;
  let b = 200000;
  const taxaB = 1.15;
  let i = 0;

  while (a < b) {
    a += a * taxaA;
    b += b * taxaB;
    i++;
  }
  return `${i} anos`;
}

console.log(ultrapassa());
