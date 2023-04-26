const validator = {
  // ...
};

function ocultarCartao(cartao) {
  const escondeNum = [];
  for( let i = 0; i < cartao.length; i++){
    if(i < cartao.length-4){
      escondeNum.push("#");
    }else{
      escondeNum.push(cartao[i]);

    }

  }
  return escondeNum.join("");
}
 
export default validator;

