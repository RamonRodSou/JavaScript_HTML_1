
	function pularLinha() {
		document.write("<br><hr><br>");
	}

	function imprimir(mensagem) {
		document.write("<big>"+ mensagem + "</big>");
		pularLinha();
	}
	imprimir("<h1> Mostrar Idades </h1>");
	var ano = 2022;
	var idadeRamon = ano - 1993;
	var idadeSamara = ano - 1992;

	imprimir("Ramon tem " + idadeRamon + " anos.");
	imprimir ("Samara tem " + idadeSamara + " anos.");
