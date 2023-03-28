function dimeTipoMotor () {
const tipoMotor = document.querySelector('#motor').value

    switch (tipoMotor) {

        case '0':
            document.querySelector('#respuesta').innerHTML = `No hay establecido un valor definido para 
            el tipo de bomba`;
            break;
        case '1':
            document.querySelector('#respuesta').innerHTML = `La bomba es una bomba de agua`; 
            break;
        case '2':
            document.querySelector('#respuesta').innerHTML = `La bomba es una bomba de gasolina`;
            break;
        case '3':
            document.querySelector('#respuesta').innerHTML = `La bomba es una bomba de hormigón`;
            break;
        case '4':
            document.querySelector('#respuesta').innerHTML = `La bomba es una bomba de pasta alimenticia`;
            break;
        default:
            document.querySelector('#respuesta').innerHTML = `No existe ningún valor válido para tipo de bomba`;
            break;
    }
}

function callback (e) {
    e.preventDefault()
    dimeTipoMotor()
}

document.querySelector('form')
.addEventListener('submit', callback)
