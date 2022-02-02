let x = parseFloat(prompt("Comprimento de X:"));
let y = parseFloat(prompt("Comprimento de Y:"));
let z = parseFloat(prompt("Comprimento de Z:"));

if (x + y > z && x + z > y && y + z > x) {
  if (x == y && x == z && z == y) {
    alert("triângulo equilátero");
  } else if (x != y && x != z && z != y) {
    alert("triângulo escaleno");
  } else {
    alert("triângulo isósceles");
  }
} else {
  alert("não é um triângulo");
}
