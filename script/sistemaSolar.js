
/* EVENTO CON JQUERY ENCARGADO DE HACER LA ANIMACIÓN DE ROTACIÓN DE LOS PLANETAS EN TORNO AL */

function animation(planeta,tps){		
    $("#"+planeta).css("-webkit-animation","orbita "+tps+"s linear infinite").css("animation","orbita "+tps+"s linear infinite");	
}	
$("#boton_orbita").click(function(){
        animation("mercurio",0.88);
        animation("venus",2.25);
        animation("tierra",3.65);
        animation("marte",6.87);
        animation("jupiter",14);
        animation("saturno",34);
        animation("urano",84);
        animation("neptuno",164);
});
$("#boton_stop").click(function(){
        $("#jupiter, #saturno, #urano, #neptuno, #mercurio, #venus, #tierra, #marte").css("-webkit-animation","").css("animation","");	
});	
