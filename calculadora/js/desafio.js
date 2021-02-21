var valorHora = document.querySelector("#valor-hora")

var horasProjeto = document.querySelector("#horas-projeto")

var resultado = document.querySelector("#resposta")

function calcular() { 

    var calculo = (valorHora.valueAsNumber) * (horasProjeto.valueAsNumber)
    resultado.innerHTML = "O custo do projeto é: R$" + calculo
}


