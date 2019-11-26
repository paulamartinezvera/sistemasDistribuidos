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
        let dataStrin = 'referencia=' + referencia + '&vendedor=' + vendedor + '&fecha=' + fecha;
        var producto = $("#producto").val();
        var cantidad = $("#cantidad").val();
        var precio = $("#precio").val();
        var total = $("#total").val();

        if (referencia == '' || vendedor == '' || fecha == '') {
            $("#display").html("Por favor llene todos los campos");
        } else {
            console.log("CAMBIA ES "+cambia);
            if(contador==1){
                console.log("contador es igual a 1");
                $.ajax({
                    type: "POST",
                    url: 'procesar.php',
                    data: dataStrin,
                    cache: false,
                    success: function (result) {
                        console.log("RESULT " + result);
                    }
                });
                
                // contador++
            }else if(contador>1){
                console.log("contador es mayor que 1");
                console.log("contador es mayor que 1"+dataString);
                $.ajax({
                    type: "POST",
                    url: 'traeIdFactura.php',
                    data: dataStrin,
                    cache: false,
                    success: function (result) {
    
                        console.log("RESULT DATA STRINBG" + result);
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
        var referencia = $("#referencia").val();
        var vendedor = $("#vendedor").val();
        var fecha = $("#fecha").val();
        let dataStrin = 'referencia=' + referencia + '&vendedor=' + vendedor + '&fecha=' + fecha;

        if(producto == '' || cantidad == '' || precio == '' || total == ''){
            $("#display").html("Por favor llene todos los campos");
        }else{
            setTimeout($.ajax({
                type: "POST",
                url: 'traeIdFactura.php',
                data: dataStrin,
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
            }), 10000);
            
            // $.get("procesar.php", function(data){
            //     console.log("GET PROCESAR.PHP"+data);
            // });
        
            $("#producto").val('');
            $("#cantidad").val('');
            $("#precio").val('');
            $("#total").val('');
        }
     
    });
    $("#referencia").change(() => {
        var nuevoValor = $("#referencia").val();
        if (nuevoValor != referencia) {
            console.log("referencia cambio");
          cambia++;
        }
    });
    $("#limpiarFactura").click(()=>{
        $("#referencia").val('');
        $("#vendedor").val('');
        $("#fecha").val('');
        console.log("CONTADOR DESDE LIMPIAR" +contador);
        contador=0;
    });
    function cualquiera(){
      
    }
});
