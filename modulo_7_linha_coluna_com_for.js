
    function pularLinha() {
        document.write("<br>");
    }

    function imprimir(mensagem) {
        document.write(mensagem);
        pularLinha();
    }

   var numeroEscolhido = Math.round(Math.random()*10);
   console.log(numeroEscolhido);
   

    var tentativas = 1;

    for(var linha = 1; linha <= 3; linha++) {

            for(var coluna = 1; coluna <= 10; coluna++) {
             document.write("*");
             
                }

        pularLinha();

}
