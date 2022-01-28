let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

//verifica se usuario tem media para passar ou não
if (media >= 7) {
  alert("Aprovado");
} else if (media < 7 && media >= 4) {
  alert("em prova final");
} else {
  alert("reprovado");
}
