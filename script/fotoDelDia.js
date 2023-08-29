

window.addEventListener("load",picOfDay);
const urlVideo = document.querySelector("#urlVideo");
const urlImg = document.querySelector("#urlImg");


/* SE REALIZA EL FETCH PARA OBTENER LOS DATOS DE LA API */
function picOfDay(){
    const ruta = "https://api.nasa.gov/planetary/apod?api_key=Lgk2THcRKWx59oGduNsx1pK3T0AMYonxtz3hcaVy";
    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultados => misDatosPic(resultados))
}

/* OBTENGO LOS DATOS UTILES Y LOS INSERTO AL HTML, HACIENDO UN IF PARA QUE CARGUE EL VIDEO O LA IMAGEN SEGUN CORRESPONDA */
function misDatosPic({date,explanation,media_type,title,url}){
    $("#fecha").html(date);
    $("#descripcion").html(explanation);
    $("#titulo").html(title);

    if (media_type == "video"){
        $("#urlImg").css("display", "none")
        urlVideo.src=`${url}`; 
    } else if (media_type == "image"){
        $("#urlVideo").css("display", "none")
        urlImg.src=`${url}`;  
    }
}


/* VUELVO A REALIZAR OTRO FETCH EN ESTE CASO PARA AÑADIR A LA RUTA EL INPUT DATE QUE LE ENVIO DESDE EL HTML */
function datosNasaFecha(i){  
    const ruta = "https://api.nasa.gov/planetary/apod?api_key=Lgk2THcRKWx59oGduNsx1pK3T0AMYonxtz3hcaVy&date=" + i;
    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultados => misDatosFecha(resultados))        
}

/* MISMA FUNCIÓN QUE "MISDATOSPIC" */
function misDatosFecha(title){
    $("#fecha").html(title.date);
    $("#descripcion").html(title.explanation);
    $("#titulo").html(title.title);
    if (title.media_type == "video"){
        $("#urlImg").css("display", "none");
        $("#urlVideo").css("display", "block")
        urlVideo.src=`${title.url}`;
    } else if (title.media_type == "image"){
        $("#urlVideo").css("display", "none");
        $("#urlImg").css("display", "block");
        urlImg.src=`${title.url}`;
    }
}

/* ANIMACION PARA MOSTRAR TODO EL CONTENIDO AL CLICAR EL BOTÓN*/
$(document).ready(function () {
    $("#boton_foto_dia").click(function(){
        $("#fotoDia").fadeIn(1000);
    })
});