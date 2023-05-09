import validator from "./validator.js";

const botaoEnviar = document.getElementById("enviar");
//tanto o isValid quanto o Maskify serão ativados a partir do click do botão.

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

  //nesta função consigo fazer o input só aceitar números
  const input = document.querySelector("#numeroCartao");
  input.addEventListener("keypress", function (e) {
    // evento de "escutar" o teclado
    if (!checkChar(e)) {
      e.preventDefault(); // prevenindo um evento padrão, neste caso o caracter não aceito não aparecerá no input
    }
  });
  function checkChar(e) {
    // o 'e' é o evento, e a função é de checar o caracter
    const char = String.fromCharCode(e.keyCode);

    //console.log(char);
    const pattern = "[0-9]";
    if (char.match(pattern)) {
      return true;
    }
  }
}
