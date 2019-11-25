<?php
    $producto = $_POST['producto'];
    $cantidad = $_POST['cantidad'];
    $precio = $_POST['precio'];
    $total = $_POST['total'];
    $idFactura=$_POST['idFactura'];
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
    $sql="USE sistemasDistribuidos";
    if($con->query($sql)===true){
        echo "base de  datos creada correctamente"."<br>";
    }else{
        die("Error al crear base de datos ".$con->error."<br>");
    }
    $insertar="INSERT INTO Detalle (Producto,Cantidad,Preciou,Total,FactNum) VALUES ('$producto','$cantidad','$precio','$total','$idFactura')";
    if($con->query($insertar)===true){
        echo "Se inserto el registro correctamente"."<br>";
    }
    mysqli_close($con);                                             
?>
