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