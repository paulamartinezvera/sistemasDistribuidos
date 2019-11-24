$(document).ready(function () {
    $('#submit').click(function () {
        var referencia = $("#referencia").val();
        var vendedor = $("#vendedor").val();
        var fecha = $("#fecha").val();
        var dataString = 'referencia=' + referencia + '&vendedor=' + vendedor + '&fecha=' + fecha;
        if (referencia == '' || vendedor == '' || fecha == '') {
            $("#display").html("Por favor llene todos los campos");
        } else {
            $.ajax({
                type: "POST",
                url: 'procesar.php',
                data: dataString,
                cache: false,
                success: function (result) {
                    console.log("RESULT " + result);
                }

            });
            $("#referencia").val('');
            $("#vendedor").val('');
            $("#fecha").val('');
        }
        return false;
    });
    $('#submitDetalle').click(function () {
        var id = $("#id").val();
        var producto = $("#producto").val();
        var cantidad = $("#cantidad").val();
        var precio = $("#precio").val();
        var total = $("#total").val();
        var dataString = 'id=' + id + '&producto=' + producto + '&cantidad=' + cantidad + '&precio=' + precio + '&total=' + total;
        if (id == '' || producto == '' || cantidad == '' || precio == '' || total == '') {
            $("#display").html("Por favor llene todos los campos");
        } else {
            $.ajax({
                type: "POST",
                url: 'agregaDetalle.php',
                data: dataString,
                cache: false,
                success: function (result) {
                    console.log("RESULT " + result);
                }

            });
            $("#id").val('');
            $("#producto").val('');
            $("#cantidad").val('');
            $("#precio").val('');
            $("#total").val('');
        }
        return false;
    });


});