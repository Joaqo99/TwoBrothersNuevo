const botonMenuResp = document.getElementById("boton-menu")
const menuResp = document.getElementById("mobile-menu")

/*const botonesHeader = document.querySelectorAll(".item")*/


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

/*for(boton of botonesHeader){
    let seccion = boton.textContent.toLowerCase()
    boton.addEventListener("click", ()=>{

    })
}*/


document.querySelectorAll(".item").forEach(boton =>{
    boton.addEventListener("click", function(e){
        e.preventDefault()
        document.getElementById(this.textContent.toLowerCase()).scrollIntoView({
            behavior : "smooth"
        })
    })
})