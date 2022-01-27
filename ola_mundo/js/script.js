let nome = prompt("Digite o seu nome:"); //let variable with global, local and block scope
alert(`Olá ${nome}, seja bem vindo a imersão de Front End`);

document.getElementById(
  "saida"
).innerHTML = `Olá ${nome}, seja bem vindo a imersão de Front End`; //${nome} interpolação
