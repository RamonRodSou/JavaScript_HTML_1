
    function pularLinha(){

        document.write("<br>");
    }

    function imprimir (mensagem){

        document.write(mensagem);
        pularLinha();
    }

    var anoDoUsuario = parseInt(prompt("Digite o ano que você nasceu: "));
    var anoPresente = parseInt(prompt("Digite o Ano Presente: "));

    while(anoDoUsuario <= anoPresente){

        imprimir(anoDoUsuario);
        anoDoUsuario = anoDoUsuario + 1

    }

    imprimir("fim");
