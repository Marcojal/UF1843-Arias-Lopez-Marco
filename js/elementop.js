function crearParrafo() {
    const nombre = document.querySelector("#nombre").value
    const apellidos = document.querySelector("#apellidos").value
    
    const parrafo = document.createElement('p')
    parrafo.setAttribute('class', 'miParrafo')
    parrafo.innerHTML = `${nombre} ${apellidos}`
    document.querySelector('.miParrafo').appendChild(parrafo)
}

function callback(e) {
    e.preventDefault()
    crearParrafo()
}

document.querySelector('form')
    .addEventListener('submit', callback)
