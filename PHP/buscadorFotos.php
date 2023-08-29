<?php
    /* BÚSQUEDA A TRAVÉS DE MYSQL DE LOS DATOS DE LA BB.DD CREADA PARA LO OCASIÓN A TRAVÉS DE PHPMYADMIN */
    /* $conn = mysqli_connect("localhost", "root", "root", "fotos_ss"); */
    $conn = mysqli_connect("bbdd.salidadelparking.com", "ddb180335", "contrasenaDB78", "ddb180335");
    $sql = "SELECT * FROM planetas WHERE titulo LIKE '%".$_POST['res']."%' ";
    $datos_planetas = mysqli_query($conn, $sql);

    if(mysqli_num_rows($datos_planetas)>0){
        while($data = mysqli_fetch_assoc($datos_planetas)){
            echo "
                <div id='box'>
                    <div class='caja'>
                        <img class='size' src=".$data['url'].">
                    </div>
                    <h3>".$data['descripcion']."</h3>
                    <span>Fecha creación: ".$data['fecha_creacion']."</span>
                </div>
                "
            ;
        } 
    }else{
        echo "<h2>No pudimos localizar tu búsqueda</h2>";
    }
?>

 