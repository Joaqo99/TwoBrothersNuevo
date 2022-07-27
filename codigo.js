const botonMenuResp = document.querySelector(".fa-bars")
const menuResp = document.getElementById("mobile-menu")



botonMenuResp.addEventListener("click", () => {
    menuResp.classList.toggle("slide-out")
    menuResp.classList.toggle("slide-in")
    if (menuResp.classList.contains("slide-out")) {
        setTimeout(() => {
            menuResp.classList.add("display-none")
        }, 650)
    }else {
        menuResp.classList.remove("display-none")
    }
    
})