$(document).ready(function () {
    var cambia=0;
    var contador=0;
    $('#insertar').click(function () {
        $('#detalle').css('background', 'pink');
    });
    $('#submit').click(function () {
        contador++;
        var referencia = $("#referencia").val();
        var vendedor = $("#vendedor").val();
        var fecha = $("#fecha").val();
        var dataString = 'referencia=' + referencia + '&vendedor=' + vendedor + '&fecha=' + fecha;
        var producto = $("#producto").val();
        var cantidad = $("#cantidad").val();
        var precio = $("#precio").val();
        var total = $("#total").val();

        if (referencia == '' || vendedor == '' || fecha == '' || producto == '' || cantidad == '' || precio == '' || total == '') {
            $("#display").html("Por favor llene todos los campos");
        } else {
            console.log("CAMBIA ES "+cambia);
            if(contador==1){
                console.log("contador es igual a 1");
                $.ajax({
                    type: "POST",
                    url: 'procesar.php',
                    data: dataString,
                    cache: false,
                    success: function (result) {
                        console.log("RESULT " + result);
                    }
                });
                setTimeout($.ajax({
                    type: "POST",
                    url: 'traeIdFactura.php',
                    data: dataString,
                    cache: false,
                    success: function (result) {
    
                        console.log("RESULT " + result);
                        var indice = result.indexOf(":");
                        var idFactura = result.substring(indice + 1, result.length);
                        console.log("indice" + indice);
                        console.log("numeroFactura" + idFactura);
                        var dataString2 = 'producto=' + producto + '&cantidad=' + cantidad + '&precio=' + precio + '&total=' + total + '&idFactura=' + idFactura;
                        $.ajax({
                            type: "POST",
                            url: 'agregaDetalle.php',
                            data: dataString2,
                            cache: false,
                            success: function (result) {
                                console.log("RESULT " + result);
                            }
                        });
                    }
                }), 6000);
                
                // $.get("procesar.php", function(data){
                //     console.log("GET PROCESAR.PHP"+data);
                // });
    
                $("#producto").val('');
                $("#cantidad").val('');
                $("#precio").val('');
                $("#total").val('');
                // contador++
            }else if(contador>1){
                console.log("contador es mayor que 1");
                $.ajax({
                    type: "POST",
                    url: 'traeIdFactura.php',
                    data: dataString,
                    cache: false,
                    success: function (result) {
    
                        console.log("RESULT " + result);
                        var indice = result.indexOf(":");
                        var idFactura = result.substring(indice + 1, result.length);
                        console.log("indice" + indice);
                        console.log("numeroFactura" + idFactura);
                        var dataString2 = 'producto=' + producto + '&cantidad=' + cantidad + '&precio=' + precio + '&total=' + total + '&idFactura=' + idFactura;
                        $.ajax({
                            type: "POST",
                            url: 'agregaDetalle.php',
                            data: dataString2,
                            cache: false,
                            success: function (result) {
                                console.log("RESULT " + result);
                            }
                        });
                    }
                });
                // $.get("procesar.php", function(data){
                //     console.log("GET PROCESAR.PHP"+data);
                // });
    
                $("#producto").val('');
                $("#cantidad").val('');
                $("#precio").val('');
                $("#total").val('');
                // $("#referencia").val('');
                // $("#vendedor").val('');
                // $("#fecha").val('');
            }
            
            
        }
        return false;
    });
    // $('#submitDetalle').click(function () {

    //     if (id == '' || producto == '' || cantidad == '' || precio == '' || total == '') {
    //         $("#display").html("Por favor llene todos los campos");
    //     } else {

    //     }
    //     return false;
    // });

    $("#agregarDetalleButton").click(() => {
        $("#detalle").css('visibility', 'visible');
    });
    $("#referencia").change(() => {
        var nuevoValor = $("#referencia").val();
        if (nuevoValor != referencia) {
            console.log("referencia cambio");
          cambia++;
        }
    });
    $("#limpiarFactura").click(()=>{

    });
});