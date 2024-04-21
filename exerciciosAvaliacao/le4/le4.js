/*Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se
que:
a. Esse funcionário foi contratado em 1995, com salário inicial de R$
1.000,00;
b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem
ao dobro do percentual do ano anterior. Faça um programa que determine
o salário atual desse funcionário. Após concluir isto, altere o programa
permitindo que o usuário digite o salário inicial do funcionário.
 */
const form = document.querySelector(".form");
const salarioInput = document.querySelector("#salario-input");
const anoInput = document.querySelector("#ano-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const salario = Number(salarioInput.value);
  const ano = Number(anoInput.value);
  calcSalario(salario, ano);
});

const salario1 = 1000;
const ano1 = 1995;

function anosTrabalhados(ano) {
  const hoje = new Date();
  const anoAtual = hoje.getFullYear(); //2024
  return anoAtual - ano;
}
function calcSalario(salario, ano) {
  const tempo = anosTrabalhados(ano);
  let aumento = 0.015;
  salario += salario * aumento;
  ano++;
  console.log(
    `${ano}, porcentagem: ${aumento * 100}%, salário final: R$${salario}`
  );
  for (let i = 2; i <= tempo; i++) {
    ano++;
    aumento = aumento * 2;
    salario += salario * aumento;
    console.log(
      `${ano}, porcentagem: ${aumento * 100}%, salário final: R$${salario}`
    );
  }
}
calcSalario(salario1, ano1);
