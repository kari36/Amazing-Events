
/*let eventos = [];
let imrpimirHTML = document.getElementById("mostrarCard");*/
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
                    <a href="/details.html?id=${card._id}" class="btn btn-primary">See more..</a>
                    </div>
                </div>
            </div>`
        
    }
    return tarjetas
}


/*let imprimirCategorias = */
let categorias = data.events.map((evento)=> evento.category)

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

////////////////////

/*let inputList = document.querySelectorAll(".check")


let select = "pri";
let key = "";

let inputSearch = document.querySelector("#searchInput")
inputSearch.addEventListener("key", search)

let data = []

function search(event) {
    let val = event.target.value

    key = val

    if (select !== "pri") {
        data = aEvents.filter(eCard => eCard.category.toLowerCase().includes(val.toLowerCase()) && eCard.category === select)
    } else if (select == "pri" && key == "") {
        data = aEvents
    } else {
        data = aEvents.filter(eCard => eCard.category.toLowerCase().includes(val.toLowerCase()))

    }
    displayCards(data)

}*/



