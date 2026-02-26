function calcularDesconto() {
    let valor = parseFloat(document.getElementById("valor").value);
    let desconto = parseFloat(document.getElementById("desconto").value);
    let resultado = document.getElementById("valorFinal");

    if (isNaN(valor) || isNaN(desconto)) {
        resultado.innerText = "Por favor, digite valores numéricos válidos.";
    } else if (valor < 0 || desconto < 0) {
        resultado.innerText = "Os valores não podem ser negativos.";
    } else if (desconto > 100) {
        resultado.innerText = "O desconto não pode ser maior que 100%";
    } else {
        let valorFinal = valor - (valor * desconto) / 100;
        resultado.innerText = "Valor Final: R$ " + valorFinal.toFixed(2);
    }
}