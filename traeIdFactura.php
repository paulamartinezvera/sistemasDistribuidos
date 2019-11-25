<?php
    $referencia = $_POST['referencia'];
    $vendedor = $_POST['vendedor'];
    $fecha = $_POST['fecha'];
    echo "Form";
    echo $referencia;
    echo $vendedor;
    echo $fecha;
    $user = "root";
    $pass = "";
    $server = "localhost";
    $con = new mysqli(
        $server,
        $user,
        $pass
    );
    $usarBD="USE sistemasDistribuidos;";
    if($con->query($usarBD)===true){
        // echo "La base de datos todolistDB se usa correctamente"."<br>";
    }else{
        // die("Error al usar la base de datos todolistDB: ".$con->error."<br>");
    }
    $insertar="SELECT * FROM Maestro WHERE Referencia='$referencia' AND Vendedor='$vendedor' AND Fecha='$fecha'";
    $result=$con->query($insertar);

    if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
       echo "numero factura:".$row["FactNum"];
       //echo $row["usuario"];    

    }
}else{
    echo "El usuario no se encuentra en la base de datos";
}
    ?>