
    function pularLinha(){
        document.write("<br");
    }

    function imprimir(mensagem){
        document.write (mensagem);
        pularLinha();
    }

    var numeroPensado = Math.round(Math.random() * 10);
    console.log(numeroPensado);    
    var numeroEscolhido = parseInt(prompt("Escolha um numero: "));

    if(numeroEscolhido == numeroPensado){

        imprimir("<big> Você acertou!! </big>");
    } 

    else{

        imprimir("<big> Você errou, tente novamente </big>");
    }
