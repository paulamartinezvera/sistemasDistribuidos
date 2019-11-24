$(document).ready(function () {
    $("#mostrar").click(()=>{
        $.get("getFacturas.php", function(data){
            console.log("DATA "+data);
            console.log(typeof data);
            var vendedores = [];
            var n=data.indexOf("|");
            var primer=data.substring(0, n);
            vendedores.push(primer); 
            var nuevoData=data.substring(n+1,data.length-(n+1));
            console.log("LENGTH NUEVO DATA "+nuevoData.length);
            console.log("PRIMER "+primer); 
//repitis
n=data.indexOf("|");
primer=data.substring(0, n);
                vendedores.push(primer); 
                nuevoData=data.substring(n+1,data.length-(n+1));
                console.log("LENGTH NUEVO DATA "+nuevoData.length);
                console.log("PRIMER "+primer);
//repitis
n=data.indexOf("|");
primer=data.substring(0, n);
                vendedores.push(primer); 
                nuevoData=data.substring(n+1,data.length-(n+1));
                console.log("LENGTH NUEVO DATA "+nuevoData.length);
                console.log("PRIMER "+primer);
            // while(nuevoData.length>0){
            //     console.log("entra a while");
            //     n=data.indexOf("|");
            //     primer=data.substring(0, n);
            //     vendedores.push(primer); 
            //     nuevoData=data.substring(n+1,data.length);
            // }
            // console.log("VENDEDORES"+vendedores.length);
            // console.log("PRIMER "+primer);
            // console.log("PRIMER "+nuevoData.length);
         });
    });
   
});