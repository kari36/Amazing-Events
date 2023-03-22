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

// let fechaActual = data.currentDate
// console.log(fechaActual);


// const filteredData = cards.filter(evento => evento.date > fechaActual)
// console.log(filteredData);

//Crear cards





function datos() {
    fetch(urlApi)
        .then(response => response.json())
        .then(datosEvents => {

            console.log(datosEvents);

            let fechaActual = datosEvents.currentDate
            console.log(fechaActual);
            
            cards = datosEvents.events
            console.log(cards)


            const filteredData = cards.filter(cards => cards.date > fechaActual)
            console.log(filteredData)
            
            
           
            console.log(crearTarjetas(filteredData));



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
                     <p class="card-date">${card.date}
                     </p>
                     <div class="card-price"> <p>$${card.price}</p>
                     <a href="#" class="btn btn-primary">See more..</a>
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
//                 <img src="${cards.image}" class="card-img-top" alt="img party">
//                 <div class="card-body">
//                     <h5 class="card-title">${cards.name}</h5>
//                     <p class="card-text">${cards.description}
//                     </p>
//                     <p class="card-date">${cards.date}
//                     </p>
//                     <div class="card-price"> <p>$${cards.price}</p>
//                     <a href="#" class="btn btn-primary">See more..</a>
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










//ANTERIOR

// /*let imprimirCategorias = */
// let categorias = data.events.map((evento) => evento.category)

// console.log(categorias);

// let categoriasNoRepetidas = new Set(categorias)
// console.log(categoriasNoRepetidas)
// let arrayCategorias = [...categoriasNoRepetidas]
// console.log(arrayCategorias);

// let contenedorCategorias = document.querySelector(".contenedorCheck")

// function imprimirCategorias(arrayCategorias) {
//     let templateCategorias = ''

//     arrayCategorias.forEach(categoria => {
//         templateCategorias += `<input class="form-check-input" type="checkbox" value=${categoria} id="flexCheckChecked" >
//             <label class="form-check-label" for="flexCheckChecked">
//                 ${categoria}
//             </label>`
//     });
//     contenedorCategorias.innerHTML = templateCategorias
// }

// imprimirCategorias(arrayCategorias)

// //Filtrar tarjetas por fecha
// let fechaActual = data.currentDate
// console.log(fechaActual);

// let cards = data.events

// const filteredData = cards.filter(evento => evento.date > fechaActual)
// console.log(filteredData);


// let contenedorTarjetas = document.querySelector("#contenedor-cards")

// let tarjetasUpcoming = new Set (filteredData)
// let arrayUpcoming = [...tarjetasUpcoming]
// console.log(arrayUpcoming)

// function imprimirTarjetas(arrayUpcoming) {
//     let templateTarjetas = ''
//     arrayUpcoming.forEach(cards => {
//         templateTarjetas += `<div class="card">
//                 <img src="${cards.image}" class="card-img-top" alt="img party">
//                 <div class="card-body">
//                     <h5 class="card-title">${cards.name}</h5>
//                     <p class="card-text">${cards.description}
//                     </p>
//                     <p class="card-date">${cards.date}
//                     </p>
//                     <div class="card-price"> <p>$${cards.price}</p>
//                     <a href="#" class="btn btn-primary">See more..</a>
//                     </div>
//                 </div>
//             </div> 
//             `
//     });
//     contenedorTarjetas.innerHTML = templateTarjetas
// }
// imprimirTarjetas(filteredData)
