function areaTriangulo() {
  const base = parseInt(document.querySelector("#base").value)
  const altura = parseInt(document.querySelector("#altura").value)
  const area = (base * altura) / 2
  console.log(area)
  document.querySelector("#resultado").innerHTML = `El área del triángulo es ${area}`
}

function callback(e) {
  e.preventDefault()
  areaTriangulo()
}

document.querySelector('form')
  .addEventListener('submit', callback)