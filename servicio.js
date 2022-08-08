menuServicios = document.querySelector(".menu-servicios")

let serviciosInfo = [
    ["Edicion de videos", "resumen de edicion de videos", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Producción", "resumen de produccion", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Fotografía", "resumen de fotografía", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Vistas aereas", "resumen de vistas aereas", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Rodaje", "resumen de rodaje", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
    ["Efectos 3D", "resumen de efectos 3D", "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquet"],
]

function servicioElemento(titulo, resumen, descripcion){
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
            servicio.style.width = "11%"
            resumenServicio.classList.remove("resumen-activo")}
        resumenServicio.style.maxHeight = "0px"
        })

    servicio.addEventListener("click", ()=>{
        contenedor = menuServicios.parentNode

        const heigh = descripcionServicio.scrollHeight
        servicio.classList.toggle("servicio-activo")
        if (servicio.classList.contains("servicio-activo")){
            contenedor.insertBefore(servicio, menuServicios)
            menuServicios.classList.add("menu-servicios-columna")
            servicio.style.width = "70%"
            servicio.style.marginLeft = "20px"
            descripcionServicio.style.maxHeight = `${heigh}px`
        }else{
            menuServicios.insertBefore(servicio, menuServicios.firstChild)
            menuServicios.classList.remove("menu-servicios-columna")
            descripcionServicio.style.maxHeight = "0px"
            servicio.style.width = "20%"
        }
    })

    return servicio
}

let fragmento = document.createDocumentFragment()

for (info of serviciosInfo){
    servicio = servicioElemento(info[0], info[1], info[2])
    fragmento.appendChild(servicio)
}

menuServicios.appendChild(fragmento)