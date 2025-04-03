function jogar() {
    // Solicita a idade do usuário
    let idade = parseInt(prompt("Qual a sua idade?"));

    // Verifica se a idade é válida
    if (isNaN(idade) || idade < 18) {
        alert("Desculpe, você precisa ter pelo menos 18 anos para jogar.");
        return; // Encerra o jogo se for menor de idade
    }

    const opcoes = ["pedra", "papel", "tesoura"];

    // Solicita a escolha do usuário
    let escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura?").toLowerCase();

    // Valida a entrada do usuário
    if (!opcoes.includes(escolhaUsuario)) {
        alert("Escolha inválida! Digite Pedra, Papel ou Tesoura.");
        return;
    }

    // Escolha aleatória do computador
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    // Determina o resultado do jogo
    let resultado = "";

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate! 🤝";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
    ) {
        resultado = `Você venceu! 🎉 (${escolhaUsuario} vence ${escolhaComputador})`;
    } else {
        resultado = `Você perdeu! 😢 (${escolhaComputador} vence ${escolhaUsuario})`;
    }

    // Exibe o resultado na tela
    alert(`Você escolheu: ${escolhaUsuario}\nComputador escolheu: ${escolhaComputador}\n${resultado}`);
}
