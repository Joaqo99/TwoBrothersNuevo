const botonMenuResp = document.querySelector(".fa-bars")
const menuResp = document.getElementById("mobile-menu")
let menuRespToggle = false


botonMenuResp.addEventListener("click", () => {
    if (!menuRespToggle){
        menuResp.classList.remove("display-none")
    }else{
        menuResp.classList.add("display-none")     
    }
    menuRespToggle = !menuRespToggle
})