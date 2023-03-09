/*let imprimirCategorias = */
let categorias = data.events.map((evento) => evento.category)

console.log(categorias);

let categoriasNoRepetidas = new Set(categorias)
console.log(categoriasNoRepetidas)
let arrayCategorias = [...categoriasNoRepetidas]
console.log(arrayCategorias);

let contenedorCategorias = document.querySelector(".contenedorCheck")

function imprimirCategorias(arrayCategorias) {
    let templateCategorias = ''

    arrayCategorias.forEach(categoria => {
        templateCategorias += `<input class="form-check-input" type="checkbox" value=${categoria} id="flexCheckChecked" >
            <label class="form-check-label" for="flexCheckChecked">
                ${categoria}
            </label>`
    });
    contenedorCategorias.innerHTML = templateCategorias
}

imprimirCategorias(arrayCategorias)

//Filtrar tarjetas por fecha
let fechaActual = data.currentDate
console.log(fechaActual);

let cards = data.events

const filteredData = cards.filter(evento => evento.date > fechaActual)
console.log(filteredData);


let contenedorTarjetas = document.querySelector("#contenedor-cards")

let tarjetasUpcoming = new Set (filteredData)
let arrayUpcoming = [...tarjetasUpcoming]
console.log(arrayUpcoming)

function imprimirTarjetas(arrayUpcoming) {
    let templateTarjetas = ''
    arrayUpcoming.forEach(cards => {
        templateTarjetas += `<div class="card">
                <img src="${cards.image}" class="card-img-top" alt="img party">
                <div class="card-body">
                    <h5 class="card-title">${cards.name}</h5>
                    <p class="card-text">${cards.description}
                    </p>
                    <p class="card-date">${cards.date}
                    </p>
                    <div class="card-price"> <p>$${cards.price}</p>
                    <a href="#" class="btn btn-primary">See more..</a>
                    </div>
                </div>
            </div> 
            `
    });
    contenedorTarjetas.innerHTML = templateTarjetas
}
imprimirTarjetas(filteredData)
