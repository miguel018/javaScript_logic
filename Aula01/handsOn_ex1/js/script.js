let dolar = parseFloat(prompt("Digite o valor da doação em dolar:")); //O valor em dolar do usuario
let valorDolar = parseFloat(prompt("Digite o valor da cotação do dolar:"));
//Vai pegar o valor em dolar do usuario e multiplicar pelo valor do real,com 2 casas decimais
alert(`Isso são ${(dolar * valorDolar).toFixed(2)} R$`);
