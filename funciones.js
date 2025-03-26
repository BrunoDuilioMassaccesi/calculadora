let primerNumero = 0;
let segundoNumero = 0;
let operacion;

const guardarNumero = (valor) =>
{
    document.getElementById('resultado').value += valor;

    if (operacion) {
        segundoNumero += valor;
    } else {
        primerNumero += valor;
    }
    
}

const guardarOperacion = (valor) =>
{
    document.getElementById('resultado').value += valor;

    operacion = valor;
    
}

const limpiarPantalla = () =>
{
    document.getElementById('resultado').value = '';
    primerNumero = 0
    segundoNumero = 0
    operacion = ''
}


function calcular() {    
    /*const expresion = document.getElementById('resultado').value;
    let regexNumeros = /\d/;
    const numeros = expresion.split('+', '-', '*' , '/').map(Number);*/
    let resultadoFinal = 0;
    switch (operacion) 
    {
        case "+":
            resultadoFinal = parseFloat(primerNumero) + parseFloat(segundoNumero);break;
        case "-":
                resultadoFinal = parseFloat(primerNumero) - parseFloat(segundoNumero);break;
        case "*":
                    resultadoFinal = parseFloat(primerNumero) * parseFloat(segundoNumero);break;
        case "/":
                        resultadoFinal = parseFloat(primerNumero) / parseFloat(segundoNumero);break;
        default:
            alert('Debe ingresar como minimo 1 digito, 1 operacion y un 2do digito')
    } 

    document.getElementById('resultado').value = resultadoFinal;
    
    primerNumero = resultadoFinal;
    segundoNumero = '';
    operacion = '';

    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.value = resultadoFinal;

    if (resultadoFinal > 0) {
        resultadoElemento.style.color = 'green';
    } else if (resultadoFinal < 0) {
        resultadoElemento.style.color = 'red';
    } else {
        resultadoElemento.style.color = 'black';
    }

}

let modoClaroActivo = false;

function cambiarModo() {
    const body = document.body;
    const calculadora = document.querySelector('.calculadora');
    const botonModoClaro = document.getElementById('modoClaro');

    modoClaroActivo = !modoClaroActivo;

    if (modoClaroActivo) {
        body.classList.add('modo-claro');
        calculadora.classList.add('modo-claro');
        botonModoClaro.textContent = 'black';
    } else {
        body.classList.remove('modo-claro');
        calculadora.classList.remove('modo-claro');
        botonModoClaro.textContent = 'white';
    }
}




