
//Nosso objetivo é calcular a média das idades de nossos familiares, 
//e utilizaremos nomes e idades fictícios, os quais serão inseridos na forma de variáveis:

    function pularLinha() {
        document.write("<br>");
    }

    function imprimir(mensagem) {
        document.write(mensagem);
        pularLinha();
    }

    var totalFamiliares = parseInt(prompt("Quantidade de familiares?"));
    var totalIdades = 0;
    var numero = 1;
         while(numero <= totalFamiliares) {

                var idade = parseInt(prompt("Informe idade do familiar"));
                totalIdades = totalIdades + idade;
                 numero++;
}
    var mediaDasIdades = totalIdades/totalFamiliares
        imprimir("A média das idades dos familiares é " + mediaDasIdades);
        imprimir("FIM");
