$(document).ready(function () {
    $("#mostrar").click(()=>{
        $.get("getFacturas.php", function(data){
            console.log("DATA "+data);
            var vendedores = [];
            console.log( "DATA length"+data.length);
            var n=data.indexOf("|");
            var primer=data.substring(0, n);
            vendedores.push(primer); 
            var nuevoData=data.substring(n+1,data.length-(n+1));
            console.log("LENGTH NUEVO DATA "+nuevoData.length);
            console.log(" PRIMER"+primer);
            console.log(" NUEVO DATA "+nuevoData);
            //hasta aca se ingresa bien el primer dato
            n=data.indexOf("|");
            primer=data.substring(0, n);
            vendedores.push(primer); 
            nuevoData=data.substring(n+1,data.length-(n+1));
            console.log("SEGUNDO N "+n);
            console.log("SEGUNDO LENGTH NUEVO DATA "+nuevoData.length);
            console.log(" SEGUNDO PRIMER"+primer);
            console.log(" SEGUNDO NUEVO DATA "+nuevoData);
            //hasta aca se ingrsesa bien el segundo dato
            n=data.indexOf("|");
            primer=data.substring(0, n);
            vendedores.push(primer); 
            nuevoData=data.substring(n+1,data.length);
            console.log("TERCER N "+n);
            console.log("TERCER LENGTH NUEVO DATA "+nuevoData.length);
            console.log(" TERCER PRIMER"+primer);
            console.log(" TERCER NUEVO DATA "+nuevoData);




            // while(nuevoData.length>0){
            //     console.log("ENTRA A WHILE");
            //     n=nuevoData.indexOf("|");
            //     primer=nuevoData.substring(0, n);
            //     vendedores.push(primer); 
            //     nuevoData=data.substring(n+1,data.length-(n+1));
            // }



                // console.log("PRIMER "+primer); 

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