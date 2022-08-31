menuServicios = document.querySelector(".menu-servicios")

let serviciosInfo = [
    ["Edicion de videos", "resumen de edicion de videos", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Producción", "resumen de produccion", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Fotografía", "resumen de fotografía Loremlsamkdsapmdiwomdewimkimweiowemioewkpode", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Vistas aereas", "resumen de vistas aereas", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Rodaje", "resumen de rodaje", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Efectos 3D", "resumen de efectos 3D", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
]

function servicioElemento(titulo, resumen, descripcion, posicionLista){
    let servicio = document.createElement("div");
    servicio.setAttribute("class", "servicio");

    let tituloServicio = document.createElement("h3");
    tituloServicio.setAttribute("class","titulo-servicio");
    tituloServicio.textContent = titulo

    let resumenServicio = document.createElement("p");
    resumenServicio.setAttribute("class","resumen-servicio");
    resumenServicio.textContent = resumen

    let descripcionServicio = document.createElement("p");
    descripcionServicio.setAttribute("class","descripcion-servicio");
    descripcionServicio.textContent = descripcion

    servicio.appendChild(tituloServicio)
    servicio.appendChild(resumenServicio)
    servicio.appendChild(descripcionServicio)

    servicio.addEventListener("mouseover", ()=>{
        const heigh = resumenServicio.scrollHeight
        if(!servicio.classList.contains("servicio-activo") && !menuServicios.classList.contains("menu-servicios-columna")){
            servicio.style.width = "20%"
        }
        resumenServicio.style.maxHeight = `${heigh}px`
        resumenServicio.classList.add("resumen-activo")
    })

    servicio.addEventListener("mouseleave", ()=>{
        if(!servicio.classList.contains("servicio-activo") && !menuServicios.classList.contains("menu-servicios-columna")){
            servicio.style.width = "13%"
            resumenServicio.classList.remove("resumen-activo")}
        if(!servicio.classList.contains("servicio-activo")){
            resumenServicio.style.maxHeight = "0px"
            servicio.style.removeProperty("width")
        }
        })

    servicio.addEventListener("click", ()=>{
        contenedor = menuServicios.parentNode

        const heigh = descripcionServicio.scrollHeight
        servicio.classList.toggle("servicio-activo")
        if (servicio.classList.contains("servicio-activo")){
            contenedor.insertBefore(servicio, menuServicios)
            menuServicios.classList.add("menu-servicios-columna")
            servicio.style.width = "70%"
            descripcionServicio.style.maxHeight = `${heigh}px`
        }else{
            menuServicios.insertBefore(servicio, menuServicios.childNodes[posicionLista])
            menuServicios.classList.remove("menu-servicios-columna")
            descripcionServicio.style.maxHeight = "0px"
            servicio.style.removeProperty("width")
        }
    })

    return servicio
}

let fragmento = document.createDocumentFragment()

for(let i = 0; i < serviciosInfo.length; i++){
    servicio = servicioElemento(serviciosInfo[i][0], serviciosInfo[i][1], serviciosInfo[i][2], i)
    fragmento.appendChild(servicio)
}

menuServicios.appendChild(fragmento)

// #################### Servicios mobile ###############################################

const titulosServiciosMob = document.querySelectorAll(".titulo-servicio-mobile")

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