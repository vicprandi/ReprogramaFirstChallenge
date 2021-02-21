var ganhoMes = document.querySelector("#ganho-mes")

var horasDia = document.querySelector("#horas-dia")

var spanHora = document.querySelector("#resposta")

function calcularValorHora() { 

    var qtdDeHoras = horasDia.valueAsNumber * 22
    var valorDaHora = (ganhoMes.valueAsNumber / qtdDeHoras).toFixed(2)
    spanHora.textContent = "R$ " + valorDaHora
}


