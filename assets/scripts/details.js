const cards = data.events

console.log(cards);

let queryString = location.search
console.log(queryString)

console.log(location);

let params = new URLSearchParams(queryString)
console.log(params);

let id = params.get("id")
/*console.log(typeof id);*/

let cardDetail = cards.find(event => event._id == id)
console.log(cardDetail)

const container = document.querySelector("#contenedor-cards-details")

let templateCardDetail = " "
templateCardDetail += `<div class="cardDetail">
                <img src="${cardDetail.image}" class="card-img-top" alt="img party">
                <div class="card-body">
                    <h5 class="card-title">${cardDetail.name}</h5>
                    <p class="card-text">${cardDetail.description}
                    </p>
                    <div class="card-price-detail"> <p class="price-color">$${cardDetail.price}</p>
                    </div>
                    <p>${cardDetail.category}</p>
                    <p>${cardDetail.place}</p>
                    <p class="card-date">${cardDetail.date}</p>
                
                    
                </div>
            </div>`

container.innerHTML = templateCardDetail        

let cardsFiltered = cards.filter