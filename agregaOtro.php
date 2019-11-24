<?php

include("Factura.php");
echo "Otro";
$factura = new Factura();
$numeroFactura=$factura->get_FactNum();
echo "NUMERO FACTURA DESDE ORA PAGINA".$factura->FactNum;
?>