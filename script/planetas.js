
/* Solicitud de datos JSON a través del método getJSON de AJAX para enviar los datos de los planetas a cada una de las vistas */

$(document).ready(function () {    
    $.getJSON( "../datosPlanetas.json", function( data ) {        
        var datosSol = data.sol;
        var datosMercurio = data.mercurio;
        var datosVenus = data.venus;
        var datosTierra = data.tierra;
        var datosMarte = data.marte;
        var datosJupiter = data.jupiter;
        var datosSaturno = data.saturno;
        var datosUrano = data.urano;
        var datosNeptuno = data.neptuno;
        var datosSS = data.sistemaSolar;
        
        var infoSol = [];
        $.each( datosSol, function(key, val) {
            if(val.titulo || val.texto){
                infoSol.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>"); 
            }        
        }); 
        $("#contenedorInfoSol").append(infoSol)

        var infoSS = [];
        $.each( datosSS, function(key, val) {
            if(val.titulo || val.texto){
                infoSS.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>"); 
            }        
        }); 
        $("#contenedorInfoSS").append(infoSS)
        
        var infoMercurio = [];
        $.each( datosMercurio, function(key, val) {
            if(val.titulo || val.texto){
                infoMercurio.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>");         
            }
        }); 
        $("#contenedorInfoMercurio").append(infoMercurio)

        var infoVenus = [];
        $.each( datosVenus, function(key, val) {
            if(val.titulo || val.texto){
                infoVenus.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>");         
            }
        }); 
        $("#contenedorInfoVenus").append(infoVenus)

        var infoTierra = [];
        $.each( datosTierra, function(key, val) {
            if(val.titulo || val.texto){
                infoTierra.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>"); 
            }        
        }); 
        $("#contenedorInfoTierra").append(infoTierra)
        
        var infoMarte = [];
        $.each( datosMarte, function(key, val) {
            if(val.titulo || val.texto){
                infoMarte.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>");         
            }
        }); 
        $("#contenedorInfoMarte").append(infoMarte)

        var infoJupiter = [];
        $.each( datosJupiter, function(key, val) {
            if(val.titulo || val.texto){
                infoJupiter.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>");         
            }
        }); 
        $("#contenedorInfoJupiter").append(infoJupiter)

        var infoSaturno = [];
        $.each( datosSaturno, function(key, val) {
            if(val.titulo || val.texto){
                infoSaturno.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>"); 
            }        
        }); 
        $("#contenedorInfoSaturno").append(infoSaturno)
        
        var infoUrano = [];
        $.each( datosUrano, function(key, val) {
            if(val.titulo || val.texto){
                infoUrano.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>");         
            }
        }); 
        $("#contenedorInfoUrano").append(infoUrano)

        var infoNeptuno = [];
        $.each( datosNeptuno, function(key, val) {
            if(val.titulo || val.texto){
                infoNeptuno.push( "<h2>"+ val.titulo +"</h2></br>" + "<p>"+ val.texto +"</p> </br></br>");         
            }
        }); 
        $("#contenedorInfoNeptuno").append(infoNeptuno)

    });



});