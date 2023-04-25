import validator from './validator.js';

console.log(validator);

function ocultarCartao(cartao) {
	let escondeNum = [];
		for(i = 0; i < cartao.length; i++){
			if(i < cartao.length-4){
				escondeNum.push("*");
		}else{
			escondeNum.push(cartao[i]);

		}

	}
	return escondeNum.join("");
}