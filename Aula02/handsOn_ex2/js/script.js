let saldo = parseFloat(prompt("Qual foi seu saldo médio:"));

if (saldo <= 200) {
  alert("nenhum crédito");
} else if (saldo >= 201 && saldo <= 400) {
  alert(`O seu crédito são: ${saldo * 0.2} R$`);
} else if (saldo >= 401 && saldo <= 600) {
  alert(`O seu crédito são: ${saldo * 0.3} R$`);
} else {
  alert(`O seu crédito são: ${saldo * 0.4} R$`);
}
