
	function pularLinha() {

		document.write("<br>");
	}
	function imprimir(mensagem){

		document.write(mensagem);
		pularLinha()
	}

	var ano = 2020;
	var pai = "Ramon";
	var mae = "Samara";
	var filho = "Antônio";
	var filha = "Eloísa";

	imprimir("<h1>Família Rodrigues</h1>")
	imprimir("Em " + ano + " "+ pai + " tinha " + (ano - 1993) + " anos.");

	ano = 2022;
	imprimir("Agora em " + ano + " " + pai + " tem " + (ano - 1993) + " anos.");

	imprimir(mae + " tem " + (ano - 1992) + " anos.");

	imprimir(filho + " tem " + (ano - 2020) + " anos.");

	imprimir(filha + " tem " + (ano - 2022) + " anos.");

	var idadeRamon = 29;
	var idadeSamara = 30;
	var idadeAntonio = 2;
	var idadeEloisa = 0;
	var mediaIdades = (idadeRamon + idadeSamara + idadeAntonio + idadeEloisa)/4;

	imprimir("<br>A média das idades é " + Math.round(mediaIdades));
