
    function pularLinha(){

        document.write("<br>");
    }

    function imprimir (mensagem){

        document.write(mensagem);
        pularLinha();
    }

    var contador = 2;
    while(contador <= 100) {
        imprimir(contador);
        contador = contador + 2;
    }

    imprimir("fim");
