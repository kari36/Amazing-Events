let urlApi = "../assets/scripts/data.json"
// let urlApi= "https://mindhub-xj03.onrender.com/api/amazing"


let cards = []

console.log(cards);

let queryString = location.search
console.log(queryString)

console.log(location);

let params = new URLSearchParams(queryString)
console.log(params);

let id = params.get("id")
/*console.log(typeof id);*/

function datos() {
    fetch(urlApi)
        .then(response => response.json())
        .then(datosEvents => {

            console.log(datosEvents);
            cards = datosEvents.events

            let cardDetail = cards.find(event => event._id == id)
            console.log(cardDetail)

            console.log(cards)
            let templateCardDetail = " "
            templateCardDetail += `<div class="cardDetail">
                <img src="${cardDetail.image}" class="card-img-top" alt="img party">
                <div class="card-body">
                    <h5 class="card-title">${cardDetail.name}</h5>
                    <p class="card-text">${cardDetail.description}
                    </p>
                    <div class="card-price-detail">
                    <p class="price-color">$${cardDetail.price}</p>
                    </div>

                    <p>Category: ${cardDetail.category}</p>
                    <p>Place: ${cardDetail.place}</p>
                    <p class="card-date">Date: ${cardDetail.date}</p>
                
                    
                </div>
            </div>`

            container.innerHTML = templateCardDetail
        })
        .catch(error => {
            console.log(error);
        })
}

datos()


const container = document.querySelector("#contenedor-cards-details")

        

// let cardsFiltered = cards.filter