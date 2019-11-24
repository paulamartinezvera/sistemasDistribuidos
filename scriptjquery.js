$(document).ready(function(){
    $("#enviarForm").click(function(){
        alert("boton presionado");
        var cualquiera=$('[name="referencia"]').val();
        alert(cualquiera);
        $.ajax({
            type:'GET',
            url:'procesar.php',
            data:'referencia='+$('[name="referencia"]').val(),
            success:function(msg){
                console.log("mensaje "+msg);
            }
        });
    });
});