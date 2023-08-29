
/* LOS DATOS DE LA GRAVEDAD Y PESO SON EXTRAIDOS DEL ARCHIVO JSON MEDIANTE GETJSON */

$(document).ready(function () {
    $.getJSON( "../datosPlanetas.json", function( data ) {        
      
        var gravedadDiasMercurio = [];
        var gravedadDiasVenus = [];
        var gravedadDiasMarte = [];
        var gravedadDiasJupiter = [];
        var gravedadDiasSaturno = [];
        var gravedadDiasUrano = [];
        var gravedadDiasNeptuno = [];

        const masaTierra = 9.8;
        const diasTierra = 365;
        
        /* AÑADIMOS A SUS CORRESPONDIENTES VARIABLES LOS DATOS QUE NECESITAMOS */
        $.each( data.mercurio, function(key, val) {
        if(val.gravedad || val.dias_orbita){
            gravedadDiasMercurio.push(parseFloat(val.gravedad));
            gravedadDiasMercurio.push(parseFloat(val.dias_orbita));
        }  
        }); 
        $.each( data.venus, function(key, val) {
        if(val.gravedad || val.dias_orbita){
            gravedadDiasVenus.push(parseFloat(val.gravedad));
            gravedadDiasVenus.push(parseFloat(val.dias_orbita));
        }  
        }); 
        $.each( data.marte, function(key, val) {
        if(val.gravedad || val.dias_orbita){
            gravedadDiasMarte.push(parseFloat(val.gravedad));
            gravedadDiasMarte.push(parseFloat(val.dias_orbita));
        }  
        }); 
        $.each( data.jupiter, function(key, val) {
        if(val.gravedad || val.dias_orbita){
            gravedadDiasJupiter.push(parseFloat(val.gravedad));
            gravedadDiasJupiter.push(parseFloat(val.dias_orbita));
        }  
        }); 
        $.each( data.saturno, function(key, val) {
        if(val.gravedad || val.dias_orbita){
            gravedadDiasSaturno.push(parseFloat(val.gravedad));
            gravedadDiasSaturno.push(parseFloat(val.dias_orbita));
        }  
        }); 
        $.each( data.urano, function(key, val) {
        if(val.gravedad || val.dias_orbita){
            gravedadDiasUrano.push(parseFloat(val.gravedad));
            gravedadDiasUrano.push(parseFloat(val.dias_orbita));
        }  
        }); 
        $.each( data.neptuno, function(key, val) {
        if(val.gravedad || val.dias_orbita){
            gravedadDiasNeptuno.push(parseFloat(val.gravedad));
            gravedadDiasNeptuno.push(parseFloat(val.dias_orbita));
        }  
        }); 

        

        /* MEDIANTE UNA REGLA DE 3 SIMPLE, CALCULAMOS EL PESO Y AÑOS BASÁNDONOS EN LOS DATOS QUE INTRODUCE EL USUARIO*/
        $("#boton_calculo").click(function(){
            var datoPeso = $("#peso").val();
            var datoEdad = $("#edad").val();
            if(datoPeso || datoEdad){
                $("#contenedorResultado").css("display","flex");
            }
            

            var resPeso = gravedadDiasMercurio[0] * datoPeso / masaTierra;
            console.log(resPeso)
            $("#resultPesoMercurio").html(Math.round(resPeso) + " Kgs")
            var resEdad = datoEdad * diasTierra / gravedadDiasMercurio[1];
            $("#resultEdadMercurio").html(Math.round(resEdad) + " años")

            var resPeso = gravedadDiasVenus[0] * datoPeso / masaTierra;
            console.log(resPeso)
            $("#resultPesoVenus").html(Math.round(resPeso) + " Kgs")
            var resEdad = datoEdad * diasTierra / gravedadDiasVenus[1];
            $("#resultEdadVenus").html(Math.round(resEdad) + " años")

            var resPeso = gravedadDiasMarte[0] * datoPeso / masaTierra;
            console.log(resPeso)
            $("#resultPesoMarte").html(Math.round(resPeso) + " Kgs")
            var resEdad = datoEdad * diasTierra / gravedadDiasMarte[1];
            $("#resultEdadMarte").html(Math.round(resEdad) + " años")
            
            var resPeso = gravedadDiasJupiter[0] * datoPeso / masaTierra;
            console.log(resPeso)
            $("#resultPesoJupiter").html(Math.round(resPeso) + " Kgs")
            var resEdad = datoEdad * diasTierra / gravedadDiasJupiter[1];
            $("#resultEdadJupiter").html(Math.round(resEdad) + " años")

            var resPeso = gravedadDiasSaturno[0] * datoPeso / masaTierra;
            console.log(resPeso)
            $("#resultPesoSaturno").html(Math.round(resPeso) + " Kgs")
            var resEdad = datoEdad * diasTierra / gravedadDiasSaturno[1];
            $("#resultEdadSaturno").html(Math.round(resEdad) + " años")
            
            var resPeso = gravedadDiasUrano[0] * datoPeso / masaTierra;
            console.log(resPeso)
            $("#resultPesoUrano").html(Math.round(resPeso) + " Kgs")
            var resEdad = datoEdad * diasTierra / gravedadDiasUrano[1];
            $("#resultEdadUrano").html(Math.round(resEdad) + " años")

            var resPeso = gravedadDiasNeptuno[0] * datoPeso / masaTierra;
            console.log(resPeso)
            $("#resultPesoNeptuno").html(Math.round(resPeso) + " Kgs")
            var resEdad = datoEdad * diasTierra / gravedadDiasNeptuno[1];
            $("#resultEdadNeptuno").html(Math.round(resEdad) + " años")
        })
    });
});