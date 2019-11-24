<?php
 $usuario = $_GET['usuario'];
 if(empty($usuario)){
    echo "El campo esta vacio";
 }else{
 $user = "root";
 $pass = "";
 $server = "localhost";
 $bd="todolistDB";
 $con = new mysqli(
    $server,
    $user,
    $pass,
    $bd
);
$consultaUsuario="SELECT * FROM Usuarios WHERE usuario='$usuario'";
$result=$con->query($consultaUsuario);

    if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
       echo "id: ".$row["id"]." -usuario: ".$row["usuario"]." -contraseña: ".$row["contrasena"]."<br>";
       //echo $row["usuario"];    

    }
}else{
    echo "El usuario no se encuentra en la base de datos";
}
}
?>

