const botonMenuResp = document.getElementById("boton-menu")
const menuResp = document.getElementById("mobile-menu")



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