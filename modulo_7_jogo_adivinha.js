
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

    while(tentativas <= 3){

          var chanceUsuario =  parseInt(prompt("Adivinhe o numero!"));

        if (chanceUsuario == numeroEscolhido){

            imprimir("ACERTOU! ");
            imprimir("Fim");
            break;
         }

            else {
 
            imprimir("ERROU!");

             }

         tentativas++;

    
    }
