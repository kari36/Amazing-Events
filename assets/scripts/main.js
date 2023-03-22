
/*let eventos = [];
let imrpimirHTML = document.getElementById("mostrarCard");*/
let cards = []

const contenedorTarjetas = document.querySelector("#contenedor-cards")

let urlApi = "../assets/scripts/data.json"
// let urlApi= "https://mindhub-xj03.onrender.com/api/amazing"

let categorias = cards.map((evento) => evento.category)

console.log(categorias);

let categoriasNoRepetidas = new Set(categorias)
console.log(categoriasNoRepetidas)
let arrayCategorias = [...categoriasNoRepetidas]
console.log(arrayCategorias);

let contenedorCategorias = document.querySelector(".contenedorCheck")

//Crear cards





function datos() {
    fetch(urlApi)
        .then(response => response.json())
        .then(datosEvents => {
            
            console.log(datosEvents);
            cards = datosEvents.events
            

            console.log(cards)
            crearTarjetas(cards)
            console.log(crearTarjetas(cards));
            // imprimirCategorias(arrayCategorias);
            // addList(cards);
        })
        .catch(error => {
            console.log(error);
        })
}

datos()

function crearTarjetas(cards) {
    let tarjetas = ''
    console.log(contenedorTarjetas)




    for (let card of cards) {
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
        console.log(tarjetas);

        
    }
    console.log(tarjetas)
    return contenedorTarjetas.innerHTML = tarjetas
    
}


/*let imprimirCategorias = */


// function imprimirCategorias(arrayCategorias) {
//     let templateCategorias = ''
    
//     arrayCategorias.forEach(categoria => {
//         templateCategorias += `<input class="form-check-input" type="checkbox" value=${categoria} id="flexCheckChecked" >
//             <label class="form-check-label" for="flexCheckChecked">
//                 ${categoria}
//             </label>`
//     });
// contenedorCategorias.innerHTML = templateCategorias
// }

//imprimirCategorias(arrayCategorias)

////////Buscador de eventos
////Crear una lista con Elementos(cada elemento es un nombre del evento)

let list = document.getElementById("list")
console.log(list)

//let newCards = addList(cards)

let search = document.getElementById("search")
console.log(search);


// function addList(arrayCards) {

//     list.innerHTML = ""

    

//     arrayCards.forEach((card) => {
//         let listElement = document.createElement("li")
//         listElement += `<div class="card">
//                 <img src="${card.image}" class="card-img-top" alt="img party">
//                 <div class="card-body">
//                     <h5 class="card-title">${card.name}</h5>
//                     <p class="card-text">${card.description}
//                     </p>
//                     <div class="card-price"> <p>$${card.price}</p>
//                     <a href="/details.html?id=${card._id}" class="btn btn-primary">See more..</a>
//                     </div>
//                 </div>
//             </div>`
        
//         listElement.innerHTML = card 
    
//         list.appendChild(listElement)
//     })
// }
//addList(cards)

////Cuando se produce un Evento(cambia el input introduciendo texto)
////Capturar el texto ingresado




 

// search.addEventListener("change", () => {
//     let cardsFiltered = cards.filter((card) => card.name.toLowerCase().includes(search.value.toLowerCase()))
//     console.log(cardsFiltered)




//     addList(cardsFiltered)



// })



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



