
    function pularLinha(){
        document.write("<br>");

    }

    function imprimir(mensagem){
        document.write(mensagem);
        pularLinha();
    }

    function sorteia (n){
        return Math.round(Math.random() * n);
    }
 
    var numeroAleatorio = sorteia(10);

    console.log(numeroAleatorio);

    var numeroUsuario = parseInt(prompt("Qual o valor escolhido de 0 a 10:"));

    if (numeroAleatorio == numeroUsuario){

        imprimir("<big> Ual você acertou!!!! Parabéns!!!!</big>");
    }

    if (numeroAleatorio > numeroUsuario){
            imprimir("<big> Infelizmente não foi dessa vez o numero escolhido era " + numeroAleatorio +" <br>" + numeroAleatorio + 
                " é maior que  "+ numeroUsuario + " </big><br>")
                
    }
    if (numeroAleatorio < numeroUsuario){
            imprimir("<big> Infelizmente não foi dessa vez: o numero escolhido era " + numeroAleatorio +" <br>" + numeroAleatorio + 
                " é menor que  "+ numeroUsuario + " </big><br>")
            }
