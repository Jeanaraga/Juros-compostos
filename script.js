const botao = document.getElementById('calculate');

botao.addEventListener('click', function() {
    let valor = document.getElementById('quantidade').value;
    let tempo = document.getElementById('tempo').value;
    let taxa = document.getElementById('taxa').value;

    let resultado = (valor * (1 + (taxa/100))**tempo).toFixed(2);

    if (resultado != 0) {
        document.getElementById('resulte').innerHTML = resultado;
    } else {
        document.getElementById('resulte').innerHTML = Inválido;
    }
})