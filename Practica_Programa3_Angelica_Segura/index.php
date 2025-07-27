<?php
// Arreglo global de transacciones
$transacciones = [];


function registrarTransaccion($id, $descripcion, $monto)
{
    global $transacciones;
    $nuevaTransaccion = [
        "id" => $id,
        "descripcion" => $descripcion,
        "monto" => $monto
    ];
    array_push($transacciones, $nuevaTransaccion);
}


function generarEstadoDeCuenta()
{
    global $transacciones;

    $totalTransacciones = 0;

    foreach ($transacciones as $transaccion) {
        $totalTransacciones += $transaccion['monto'];
    }

    
    $interes = $totalTransacciones * 0.026; 
    $totalInteres = $totalTransacciones + $interes;
    $cashback = $totalTransacciones * 0.001; 
    $montoFinal = $totalInteres - $cashback;

    
    echo "<h2>Tarea 3 Registrar Transacciones</h2>";
    echo "<table border='1' cellpadding='5'>";
    echo "<tr>
            <th>Id</th>
            <th>Descripción</th>
            <th>Monto</th>
        </tr>";
    foreach ($transacciones as $transaccion) {
        echo "<tr>";
        echo "<td>{$transaccion['id']}</td>";
        echo "<td>{$transaccion['descripcion']}</td>";
        echo "<td>₡" . number_format($transaccion['monto'], 2) . "</td>";
        echo "</tr>";
    }
    echo "</table><br>";
    echo "Monto total de contado: ₡" . $totalTransacciones. "<br>";
    echo "Monto con intereses del 2.6% ₡" . $totalInteres. "<br>";
    echo "Cashback del 0.1%: ₡" . $cashback . "<br>";
    echo "Monto final a pagar: ₡" . $montoFinal, 2 . "<br>";

    //Crear el archivo de texto
    $archivo = fopen("estado_cuenta.txt", "w") or die("No se puede abrir el archivo!");
    $txt = "ESTADO DE CUENTA\n";
    fwrite($archivo, $txt);

    foreach ($transacciones as $transaccion) {
        $txt = "ID: {$transaccion['id']}
         {$transaccion['descripcion']} -  ₡" 
               . $transaccion['monto'] . "\n";
        fwrite($archivo, $txt);
    }

    $txt = "-Detalle\n";
    fwrite($archivo, $txt);

    $txt = "Monto total de contado:  ₡" . $totalTransacciones . "\n";
    fwrite($archivo, $txt);

    $txt = "Monto con intereses del 2.6%:  ₡" . $totalInteres. "\n";
    fwrite($archivo, $txt);

    $txt = "Cashback del 0.1%:  ₡" . $cashback. "\n";
    fwrite($archivo, $txt);

    $txt = "Monto final a pagar:  ₡" . $montoFinal . "\n";
    fwrite($archivo, $txt);

    fclose($archivo);
}

//Registrar transaciones
registrarTransaccion(1, "Compra Walmart", 25000);
registrarTransaccion(2, "Gasolina", 30000);
registrarTransaccion(3, "Restaurante Mcdonals", 6000);
registrarTransaccion(4, "Compra en Zara", 15000);


generarEstadoDeCuenta();
?>
