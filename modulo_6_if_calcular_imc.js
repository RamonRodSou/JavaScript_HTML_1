
	function pularLinha() {

		document.write("<br><hr><br>");
	}
	function imprimir(mensagem){

		document.write(mensagem);
		pularLinha()
	}

	function calculoImc (peso,altura){

		return peso / (altura * altura);
	}

	var nome = prompt("Informe o seu nome:");
	var altura =prompt("Olá " + nome + " informe a sua altura:");
	var peso = prompt("Olá " + nome + " informe a sua peso:");
    var imc = calculoImc(peso,altura);

    imprimir ("<big> " + nome + " o seu Imc é " + Math.round(somaDosImcs) + "</big>");

    if(imc > 35){
        imprimir("<big> Você está acima do peso. </big>" );
    }

    if(imc < 18.5){
        imprimir("<big> Você está abaixo do peso. </big> ");

    }
    
    if(imc <= 30 && imc >= 18.5) {
    //    if (imc >= 18.5) {
        imprimir("<big> Você está com peso ideal.") 
    //    }
    }

