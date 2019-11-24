<?php

    $id = $_POST['id'];
    $producto = $_POST['producto'];
    $cantidad = $_POST['cantidad'];
    $precio = $_POST['precio'];
    $total = $_POST['total'];
    $user = "root";
    $pass = "";
    $server = "localhost";
    $con = new mysqli(
        $server,
        $user,
        $pass
    );
        
    if($con->connect_error){
        die("Conexion fallida ".$con->connect_error);
    }
    $sql="USE nuevaDB";
    if($con->query($sql)===true){
        echo "base de  datos creada correctamente"."<br>";
    }else{
        die("Error al crear base de datos ".$con->error."<br>");
    }
    $insertar="INSERT INTO Detalle (Id,Producto,Cantidad,Preciou,Total,FactNum) VALUES ('$id','$producto','$cantidad','$precio','$total',1)";
    if($con->query($insertar)===true){
        echo "Se inserto el registro correctamente"."<br>";
    }
    mysqli_close($con);
?>
