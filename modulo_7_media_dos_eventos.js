
    function pularLinha() {
        document.write("<br>");
    }

    function imprimir(mensagem) {
        document.write(mensagem);
        pularLinha();
    }

    var totalDeEventos = parseInt(prompt("Informe o total de eventos"));

    var contador = 1;

    var totalGastoComEventos = 0;

    while(contador <= totalDeEventos) {

        var gasto = parseFloat(prompt("Informe total gasto com evento"));

        totalGastoComEventos = totalGastoComEventos + gasto;

        contador++;
    }

    var media = totalGastoComEventos / totalDeEventos;

    imprimir("A média de gastos é " + media);
