/*let cards = data.events

document.getElementsById("#contenedorDetails").onclick = function mostrarDetails() {
    
}*/

let cards = data.events

const contenedorTarjetas = document.querySelector("#contenedor-cards")

let targetasGeneradas = crearTarjetas(cards)

contenedorTarjetas.innerHTML = targetasGeneradas

function crearTarjetas(cards) {
    let tarjetas = ''
    console.log(contenedorTarjetas)




 
}