document.getElementById('data-menstruacao').addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, '');

    if (valor.length > 2 && valor.length <= 4) {
        valor = valor.slice(0, 2) + '/' + valor.slice(2);
    } else if (valor.length > 4) {
        valor = valor.slice(0, 2) + '/' + valor.slice(2, 4) + '/' + valor.slice(4, 8);
    }

    e.target.value = valor;
});

function calcularDataParto() {
    const dataMenstruacao = document.getElementById('data-menstruacao').value;

    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dataMenstruacao.match(regex);

    if (match) {
        const dia = parseInt(match[1], 10);
        const mes = parseInt(match[2], 10) - 1;
        const ano = parseInt(match[3], 10);

        const dataUltimaMenstruacao = new Date(ano, mes, dia);
        if (isNaN(dataUltimaMenstruacao.getTime())) {
            alert('Data inválida');
            return;
        }

        dataUltimaMenstruacao.setDate(dataUltimaMenstruacao.getDate() + 280);

        const dataParto = dataUltimaMenstruacao.toLocaleDateString('pt-BR');
        document.getElementById('resultado').innerHTML = `A data provável do parto é: <strong>${dataParto}</strong>`;
    } else {
        alert('Por favor, insira a data no formato dd/mm/yyyy.');
    }
}
