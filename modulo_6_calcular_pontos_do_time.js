
	function pularLinha(){

		document.write ("<br>");
	}

	function imprimir(mensagem){

		document.write(mensagem);
		pularLinha();
	}

	function calculoDosPontos(vitorias, empates){

		return (vitorias * 3) + empates;

	}

	var time = prompt("Qual é o seu time?");
	var pontosAnoPassado = parseInt (prompt("Quantos pontos " + time + " fez ano passado?"));
	var vitorias = parseInt (prompt(time + " teve quantas vitórias esse ano?"));
	var empates = parseInt (prompt(time + " teve quantos empátes esse ano?"));
	var pontos = calculoDosPontos(vitorias, empates);

	imprimir("<big>"+ time + " somou " + pontos + " no campeonato.</big>");

	if(pontos>pontosAnoPassado){
		imprimir("<big>"+ time + " tá melhor que ano passado.</big>");
	}

	if(pontos<pontosAnoPassado){
		imprimir("<big>"+ time + " tá pior que ano passado.</big>");
	}

	if(pontos==pontosAnoPassado){
		imprimir("<big>"+ time + " tá igual ao ano passado.</big>");
	}

