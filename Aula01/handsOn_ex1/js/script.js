let dolar = parseFloat(prompt("Digite o valor da doação em dolar:")); //O valor em dolar do usuario

//Vai pegar o valor em dolar do usuario e multiplicar pelo valor do real,com 2 casas decimais
alert(`Isso são ${(dolar * 5.40136).toFixed(2)} R$`);
