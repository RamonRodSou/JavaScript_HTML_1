
	var ano = 2020;
	var pai = "Ramon";
	var mae = "Samara";
	var filho = "Antônio";
	var filha = "Eloísa";

	document.write("<h1>Família Rodrigues</h1>")
	document.write("Em " + ano + " "+ pai + " tinha " + (ano - 1993) + " anos. <br>");

	ano = 2022;
	document.write("Agora em " + ano + " " + pai + " tem " + (ano - 1993) + " anos. <br>");
	document.write(mae + " tem " + (ano - 1992) + " anos. <br>");
	document.write(filho + " tem " + (ano - 2020) + " anos. <br>");
	document.write(filha + " tem " + (ano - 2022) + " anos. <br>");

	var idadeRamon = 29;
	var idadeSamara = 30;
	var idadeAntonio = 2;
	var idadeEloisa = 0;
	var mediaIdades = (idadeRamon + idadeSamara + idadeAntonio + idadeEloisa)/4;

	document.write("<br>A média das idades é " + Math.round(mediaIdades) + "<br>");

