function jogarSaltoNoVidro() {
    let idade = prompt("Qual sua idade?");
    
    // Verifica se o jogador é maior de idade
    if (idade < 18) {
        alert("Você é menor de idade e não pode jogar.");
        return; // Encerra o jogo
    }

    alert("Bem-vindo ao Salto no Vidro! Escolha um vidro para pular (1, 2 ou 3).");

    let jogoAtivo = true;

    while (jogoAtivo) {
        let escolha = parseInt(prompt("Escolha um vidro (1, 2 ou 3):"));

        // Bloqueia números inválidos
        if (isNaN(escolha) || escolha < 1 || escolha > 3) {
            alert("Escolha inválida! Você deve escolher entre 1, 2 ou 3.");
            continue;
        }

        // Simula se o vidro quebra (50% de chance)
        let vidroQuebra = Math.random() < 0.5; 

        if (vidroQuebra) {
            alert("💥 O vidro quebrou! Você perdeu!");
            jogoAtivo = false;
        } else {
            alert("✅ O vidro resistiu! Você pode continuar.");
            let continuar = prompt("Deseja continuar? (Sim/Não)").toLowerCase();
            if (continuar !== "sim") {
                alert("🏆 Você sobreviveu ao jogo! Parabéns!");
                jogoAtivo = false;
            }
        }
    }
}

