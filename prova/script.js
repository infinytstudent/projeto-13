let saldo = 1000;

function realizarOperacao() {
    const operacao = document.getElementById('operacao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const resultadoElement = document.getElementById('resultado');

    if (isNaN(valor)) {
        resultadoElement.textContent = 'Valor inválido.';
        return;
    }

    switch (operacao) {
        case 'consultar':
            resultadoElement.textContent = `Seu saldo atual é de R$ ${saldo}.`;
            break;
        case 'sacar':
            if (valor > saldo) {
                resultadoElement.textContent = 'Saldo insuficiente.';
            } else {
                saldo -= valor;
                resultadoElement.textContent = `Saque realizado com sucesso. Novo saldo: R$ ${saldo}.`;
            }
            break;
        case 'depositar':
            saldo += valor;
            resultadoElement.textContent = `Depósito realizado com sucesso. Novo saldo: R$ ${saldo}.`;
            break;
        default:
            resultadoElement.textContent = 'Operação inválida.';
    }

    document.getElementById('saldo').textContent = `R$ ${saldo}`;
}