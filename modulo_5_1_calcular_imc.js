
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

	var nome = prompt("Informe o seu nome:");
	var altura =prompt("Olá " + nome + " informe a sua altura:");
	var peso = prompt("Olá " + nome + " informe a sua peso:");
    var somaDosImcs = calculoImc(peso,altura);

	imprimir ("<big> " + nome + " o seu Imc é " + Math.round(somaDosImcs) + "</big>");
