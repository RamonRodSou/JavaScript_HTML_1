
    function pularLinha(){
        document.write("<br>");

    }

    function imprimir(mensagem){
        document.write(mensagem);
        pularLinha();
    }

    var numeroAleatorio = Math.round(Math.random() * 100);
    console.log(numeroAleatorio);
    
    var numeroUsuario = parseInt(prompt("Qual o valor escolhido de 0 a 100:"));

    if (numeroAleatorio == numeroUsuario){

        imprimir("<big> UAL VOCÊ ACERTOU!!!! O NUMERO ERA: " + numeroAleatorio + "</big>");
    }

    else {

        imprimir("<big> NÂO FOI DESSA VEZ, O NUMERO ERA: " + numeroAleatorio +"</big>")
    }
