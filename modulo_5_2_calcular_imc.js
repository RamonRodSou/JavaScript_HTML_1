
    // comando aprenseta esse resultado:  @Flavio (Almeida)@ 

    function pulaLinha() {

        document.write("<br>");
    }

    function imprimir(mensagem) {
        document.write(mensagem);
        pulaLinha();
    }

    function a(texto) {

        return "(" + texto + ")";
    }

    function b(texto) {

        return "@" + texto + "@";
    }

    function c(nome, sobrenome) {

        return b(nome + " " + a(sobrenome));

    }

    var nome = prompt("Digite seu primeiro nome.");
    var sobrenome = prompt("Digite seu sobrenome.")
    var resultado = ("<big>" + c(nome, sobrenome) + "</big>");

    imprimir(resultado);

