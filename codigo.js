const botonMenuResp = document.getElementById("boton-menu")
const menuResp = document.getElementById("mobile-menu")

const titulosServiciosMob = document.querySelectorAll(".titulo-servicio-mobile")


botonMenuResp.addEventListener("click", () => {
    botonMenuResp.classList.toggle("fa-xmark")
    botonMenuResp.classList.toggle("fa-bars")
    menuResp.classList.toggle("slide-out")
    menuResp.classList.toggle("slide-in")
    if (menuResp.classList.contains("slide-out")) {
        setTimeout(() => {
            menuResp.classList.add("display-none")
        }, 600)
    }else {
        menuResp.classList.remove("display-none")
    }
    
})

titulosServiciosMob.forEach((tituloServicioMob) => {
    const heightMob = tituloServicioMob.nextElementSibling.scrollHeight
    tituloServicioMob.addEventListener("click", ()=>{
        tituloServicioMob.classList.toggle("servicio-mob-activo")
        if (tituloServicioMob.classList.contains("servicio-mob-activo")) {
            tituloServicioMob.nextElementSibling.style.maxHeight = `${heightMob}px`
        }else{
            tituloServicioMob.nextElementSibling.style.maxHeight = '0px'
        }
    })
})