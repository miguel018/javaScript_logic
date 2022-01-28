let kmInicial = parseFloat(prompt("Quantos quilometros no inico da viagem:")); //Quantos quilometros estava no inicio
let kmFinal = parseFloat(
  prompt("Quantos quilometors mostra na chegada no posto:")
); //Quantos quilometros quando chegou no posto
let litros = parseFloat(prompt("Quantos litros foram reabastecidos:")); //Quanto de gasolina colocou

let kmRodados = kmFinal - kmInicial; //subtrai os quilometros do fim com os quilometros do inicio para saber quantos quilometros andou
let autonomia = kmRodados / litros; //divide os quilometros pela gasolina para saber quantos km/l

alert(`A média de quilometors por litro é: ${autonomia.toFixed(2)}`); //mostra os km/l arredondado a 2 casas
