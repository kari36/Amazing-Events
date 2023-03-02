let cards = data.events

const contenedorTarjetas = document.querySelector("#contenedor-cards")

let targetasGeneradas = crearTarjetas(cards)

contenedorTarjetas.innerHTML = targetasGeneradas

function crearTarjetas(cards) {
    let tarjetas = ''
    console.log(contenedorTarjetas)




    for (const card of cards) {
        tarjetas += `<div class="card">
                <img src="${card.image}" class="card-img-top" alt="img party">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.description}
                    </p>
                    <div class="card-price"> <p>$${card.price}</p>
                    <a href="#" class="btn btn-primary">See more..</a>
                    </div>
                </div>
            </div>`

    }
    return tarjetas
}