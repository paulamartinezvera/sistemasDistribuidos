$(document).ready(function() {
    $('#submit').click(function() {
        var referencia=$("#referencia").val();
        var vendedor=$("#vendedor").val();
        var fecha=$("#fecha").val();
        var dataString='referencia='+referencia+'&vendedor='+vendedor+'&fecha='+fecha;
        if(referencia==''|| vendedor=='' || fecha==''){
            $("#display").html("Por favor llene todos los campos");
        }else{
                $.ajax({
            type: "POST",
            url: 'procesar.php',
            data: dataString,
            cache:false,
            success:function(result){
                console.log("RESULT "+result);
            }

       });
        }
    return false;
     });
});