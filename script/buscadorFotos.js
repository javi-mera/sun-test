
/* EVENTO DE SOLICITUD DE DATOS AL ARCHIVO PHP MEDIANTE AJAX  */
$(document).ready(function () {
    $("#boton_buscador").click(function () {
        $.ajax({
            type: "POST",
            url: "../PHP/buscadorFotos.php",
            data: {
                res: $("#input_busqueda").val()
            },
            success: function (data) {
                $("#contenedorFotos").html(data);
            }
        })
    })
})