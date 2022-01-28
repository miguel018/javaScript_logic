let ac = parseFloat(prompt("Digite o valor da sua ac:"));
let ag = parseFloat(prompt("Digite o valor da sua avaliação geral:"));
let at = parseFloat(prompt("Digite o valor da sua avaliação trimestral:"));

let media = (ac * 0.2 + ag * 0.1 + at * 0.7) / 1;

alert(`A sua média é ${media.toFixed(1)}`);
