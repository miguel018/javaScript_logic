let idade = parseInt(prompt("Digite a sua idade")); //Saber idade do jogador

if (idade < 12) {
  //Se idade for menor que 12 não pode jogar
  alert("Sua idade não permite que você jogue!");
} else if (idade == 12) {
  //Se idade for 12 só com permissão
  alert("Você pode jogar com a permissão dos pais!");
} else {
  //maior que 12 pode jogar
  alert("Você pode jogar");
}
