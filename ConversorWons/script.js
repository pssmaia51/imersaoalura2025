function conversor() {
    // Taxas de câmbio (valores podem ser atualizados conforme necessário)
    const taxaWonParaReal = 0.0037; // Exemplo: 1 KRW ≈ 0.0037 BRL
    const taxaWonParaDolar = 0.00075; // Exemplo: 1 KRW ≈ 0.00075 USD

    // Solicita um valor ao usuário
    let valorWon = prompt("Digite o valor em Wons sul-coreanos (KRW):");

    // Converte para número
    valorWon = parseFloat(valorWon);

    // Verifica se o valor é válido
    if (isNaN(valorWon) || valorWon <= 0) {
        alert("Por favor, insira um valor válido maior que zero.");
        return;
    }

    // Realiza os cálculos
    let valorEmReais = valorWon * taxaWonParaReal;
    let valorEmDolares = valorWon * taxaWonParaDolar;

    // Exibe o resultado ao usuário
    alert(
        `O valor de ${valorWon} KRW equivale a:
        - R$ ${valorEmReais.toFixed(2)}
        - US$ ${valorEmDolares.toFixed(2)}`
    );
}
