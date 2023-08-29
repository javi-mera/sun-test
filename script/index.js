

/* evento para el menú en de navegación en modo movil, por el cual desplegamos los submenús de cada menú al hacer click */

const subMenuBtn = document.querySelectorAll(".btnMenu");
for(let i in subMenuBtn){
    subMenuBtn[i].addEventListener("click", function(){
            if(window.innerWidth < 1024){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;
            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            } else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }    
        } 
    })
}