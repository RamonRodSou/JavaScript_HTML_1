
	function pularLinha() {

		document.write("<br><hr><br>");
	}
	function imprimir(mensagem){

		document.write(mensagem);
		pularLinha()
	}

	function calculoImc (peso,altura){

	//	var imc = peso / (altura * altura);
	//	return imc;

		return peso / (altura * altura);

	}

	var imcRamon = calculoImc(102, 1.83);
	var imcSamara = calculoImc(65, 1.65);
//	var somaDosImcs = calculoImc(102, 1.83) + calculoImc(65, 1.65);
    var somaDosImcs = imcRamon + imcSamara;

	if( imcRamon >= 30){
		imprimir("<big>Ramon precisa fazer uma dieta.");
	}
	imprimir ("<big> O Imc do Ramon é </big><big>" + Math.round(imcRamon) + "</big>");
	imprimir ("<big> O Imc da Samara é </big><big>" + Math.round(imcSamara) + "</big>");
	imprimir ("<big> A Soma dos Imc's é </big><big>" + Math.round(somaDosImcs) + "</big>");
