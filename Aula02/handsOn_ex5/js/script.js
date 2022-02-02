let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let aulasAssistidas = parseInt(
  prompt("Digite a quantidade de aulas assistidas")
);
let aulasDadas = parseInt(prompt("Digite a quantidade de aulas dadas"));

let media = (nota1 + nota2) / 2;

let aulas = (aulasAssistidas / aulasDadas) * 100;

if (media >= 7 && aulas >= 75) {
  alert(
    `Você foi aprovado com média de ${media.toFixed(
      0
    )} e frequencia de ${aulas.toFixed(0)}%`
  );
} else {
  alert(
    `Você foi reprovado com média de ${media.toFixed(
      0
    )} e frequencia de ${aulas.toFixed(2)}%`
  );
}
