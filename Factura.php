<?php
class Factura 
{
    public   $FactNum;
    public    $Referencia;
    public    $Vendedor;
    public    $Fecha;
    
    // public function __construct($FactNum, $Referencia, $Vendedor,$Fecha) {
    //     $this->FactNum = $FactNum;
    //     $this->Referencia = $Referencia;
    //     $this->Vendedor = $Vendedor;
    //     $this->Fecha=$Fecha;
    //  } 

     public function get_FactNum(){
        return $this->FactNum;
     }
     public function get_Referencia(){
        return $this->Referencia;
     }
     public function get_Vendedor(){
        return $this->Vendedor;
     }
     public function Fecha(){
        return $this->Fecha;
     }
}
?>