
//Roberta quer uma dificuldade um pouco maior em seu programa. Agora ela p
//recisa imprimir todos os números entre 30 e 40 (inclusive 30 e 40), 
//porém os números 33 e 37 não devem ser impressos! No final,
//o trecho de código precisa ter a palavra "FIM". Use o while para essa tarefa.

    function pularLinha(){

        document.write("<br>");
    }

    function imprimir (mensagem){

        document.write(mensagem);
        pularLinha();
    }

    var contador = 30;

    while(contador <= 40) {

        if( contador == 33 ) {
        contador = contador + 1;
        }
        else if(contador == 37) {    
            contador = contador + 1;
        }
        else {
        mostra(contador);
        contador = contador + 1; 
        }
      }
    imprimir("fim");
