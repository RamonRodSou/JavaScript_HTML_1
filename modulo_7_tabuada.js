
    function pularLinha() {
        document.write("<br>");
    }

    function imprimir(mensagem) {
        document.write(mensagem);
        pularLinha();
    }

    var numeroEscolhido = parseInt(prompt("Qual tabuada você quer saber?"));
//  var multiplicador = 1

//  while(multiplicador <= 10 ){
//
//      var calcularTabuada = numeroEscolhido * multiplicador;
//      imprimir(multiplicador + " x " + numeroEscolhido + " = " + calcularTabuada);
//      multiplicador ++;
//  }
    
    for(var multiplicador = 1; multiplicador <= 10; multiplicador ++){

        var calcularTabuada = numeroEscolhido * multiplicador;
        imprimir(multiplicador + " x " + numeroEscolhido + " = " + calcularTabuada);
    }
    
