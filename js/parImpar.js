
function esImpar () {
  const numberEl = document.querySelector('#impar').value

  if(numberEl % 2 === 0) {
    return document.querySelector('#msg').innerHTML = `El número ${numberEl} no es impar`
  }
  else {
    return document.querySelector('#msg').innerHTML = `El número ${numberEl} es impar`
  }
}

function callback(e) {
  e.preventDefault()
  esImpar()
}

document.querySelector('form')
  .addEventListener('submit', callback)
