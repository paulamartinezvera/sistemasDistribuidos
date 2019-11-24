<?php
include("Factura.php");
    $referencia = $_GET['referencia'];
    $vendedor = $_GET['vendedor'];
    $fecha = $_GET['fecha'];
    $id = $_GET['id'];
    $producto = $_GET['producto'];
    $cantidad = $_GET['cantidad'];
    $precio = $_GET['precio'];
    $total = $_GET['total'];
    
    if(empty($referencia)||empty($vendedor)||empty($fecha)){
        echo "Alguno de los campos esta vacio";
    }
    else{
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
    $sql="CREATE DATABASE IF NOT EXISTS todolistDB";
    if($con->query($sql)===true){
        echo "base de  datos creada correctamente"."<br>";
    }else{
        die("Error al crear base de datos ".$con->error."<br>");
    }
    $creaTabla="CREATE TABLE IF NOT EXISTS Maestro(
        FactNum int(11) not null auto_increment,
        Referencia varchar(50) not null,
        Vendedor varchar(50) not null,
        Fecha DATETIME not null,
        primary key(FactNum)
    );";
    $creaTabla2 ="CREATE TABLE IF NOT EXISTS Detalle(
        Id int(11) not null,
        Producto varchar(50) not null,
        Cantidad int(11) not null,
        Preciou decimal not null,
        Total DECIMAL not null,
        FactNum  int(11) NOT NULL,
        FOREIGN KEY (FactNum) REFERENCES Maestro (FactNum)         
    );";
    $usarBD="USE todolistDB;";
    if($con->query($usarBD)===true){
        echo "La base de datos todolistDB se usa correctamente"."<br>";
    }else{
        die("Error al usar la base de datos todolistDB: ".$con->error."<br>");
    }
    if($con->query($creaTabla)===true){
        echo "La tabla se creo correctamente"."<br>";
    }else{
        die("Error al crear tabla: ".$con->error."<br>");
    }
    if($con->query($creaTabla2)===true){
        echo "La tabla 2 se creo correctamente"."<br>";
    }else{
        die("Error al crear tabla: ".$con->error."<br>");
    }

    $insertar="INSERT INTO Maestro (Referencia,Vendedor,Fecha) VALUES ('$referencia','$vendedor','$fecha')";
    if($con->query($insertar)===true){
        echo "Se inserto el registro correctamente"."<br>";
        $consultaUsuario="SELECT * FROM Maestro WHERE Referencia='$referencia' AND Vendedor='$vendedor' AND Fecha='$fecha'";
$result=$con->query($consultaUsuario);
if($result->num_rows>0){
    $fila = $result->fetch_array(MYSQLI_ASSOC);
    $factura = new Factura();
    $factura->FactNum=$fila["FactNum"];
    $factura->Referencia=$fila["Referencia"];
    $factura->Vendedor=$fila["Vendedor"];
    $factura->Fecha=$fila["Fecha"];
    echo "resultado".$fila["FactNum"];
}
    }else{
        die("Error al insertar el registro"."<br>");
    }
    
   // $insertar2="INSERT INTO Detalle (Id,Producto,Cantidad,Preciou,Total,FactNum) VALUES ('$id','$producto','$cantidad','$precio','$total')";
    //$result=$con->query($selectDeUsuario);
    // if($result->num_rows>0){
    //     echo "Digite un registro que no este repetido por favor";
    // }else{
    // if($con->query($insertar)===true){
    //     echo "Se inserto el registro correctamente"."<br>";
    // }else{
    //     die("Error al insertar el registro"."<br>");
    // }
    mysqli_close($con);
}

?>