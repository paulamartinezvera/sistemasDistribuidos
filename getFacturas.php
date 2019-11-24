<?php
$user = "root";
$pass = "";
$server = "localhost";
$con = new mysqli(
    $server,
    $user,
    $pass
);
if($con->connect_error){
    // die("Conexion fallida ".$con->connect_error);
}
$sql="USE nuevaDB";
if($con->query($sql)===true){
    // echo "base de  datos creada correctamente"."<br>";
}else{
    // die("Error al crear base de datos ".$con->error."<br>");
}
$consultaUsuario="SELECT * FROM Maestro JOIN Detalle;";
$result=$con->query($consultaUsuario);

    if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
       echo $row["Vendedor"]."|";
    //    echo "id: ".$row["Vendedor"];
       //echo $row["usuario"];    

    }
}else{
    // echo "El usuario no se encuentra en la base de datos";
}
?>