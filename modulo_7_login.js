 function pularLinha() {
        document.write("<br>");
    }

    function imprimir(mensagem) {
        document.write(mensagem);
        pularLinha();
    }

    var loginCadastrado = "ramon";
    var senhaCadastrada = "321";

   // var maximoTentativas = 3;
    //var tentativaAtual = 1;

      for(var tentativaAtual = 1; tentativaAtual <= 3; tentativaAtual++ ){

//   while(tentativaAtual <= maximoTentativas) {

        var loginInformado = prompt("Informe seu login");
        
        var senhaInformada = prompt("Informe sua senha");

        if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

            alert("Bem-vindo ao sistema, " + loginInformado);

            tentativaAtual = 3; // acertou, então faço o gasto de todas as tentativas para sair do loop. Lá embaixo vai incrementar + 1! 

        } else {

            if (tentativaAtual == 3) {
                alert("Número permitido de tentativas ultrapassado!");
            } else {
                alert("Login inválido. Tente novamente");
            }
        }

       // vai para a próxima tentativa
    //    tentativaAtual = tentativaAtual +1  
    }

