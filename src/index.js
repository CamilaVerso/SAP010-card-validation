import validator from "./validator.js";

const botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener("click", verificar);
function verificar() {
  const numCartao = document.getElementById("numeroCartao").value;

  const resultado = validator.isValid(numCartao);
  const maskifyCartao = validator.maskify(numCartao);

  if (numCartao === "") {
    alert("Favor inserir o número do cartão.");
  } else if (resultado === true) {
    alert(maskifyCartao + " é válido!");
  } else {
    alert(maskifyCartao + " é inválido!");
  }
}
