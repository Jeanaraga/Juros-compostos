const botao = document.getElementById('calculate');

botao.addEventListener('click', function() {
    let valor = document.getElementById('quantidade').value;
    let tempo = document.getElementById('tempo').value;
    let taxa = document.getElementById('taxa').value;

    let resultado = (valor * (1 + (taxa/100))**tempo).toFixed(2);

    if (valor === '' || tempo === '' || taxa === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (isNaN(valor) || isNaN(tempo) || isNaN(taxa)) {
        alert('Por favor, insira valores numéricos válidos.');
        return;
    }

    if (taxa < 0 || taxa > 100) {
        alert('A taxa deve estar entre 0 e 100.');
        return;
    }

    if (resultado != 0) {
        document.getElementById('resulte').innerHTML = resultado;
    } else {
        document.getElementById('resulte').innerHTML = 'Resultado inválido';
    }

    if (!isNaN(resultado)) {
        document.getElementById('resulte').innerHTML = resultado;
    } else {
        document.getElementById('resulte').innerHTML = 'Resultado inválido';
    }
})