function iniciarJogo() {
    let timeJogador = [];
    for (let i = 1; i <= 5; i++) {
        let jogador = document.getElementById(`jogador${i}`).value.trim();
        if (jogador === "") {
            alert(`Por favor, preencha o nome do Jogador ${i}!`);
            return;
        }
        timeJogador.push(jogador);
    }

    let timeComputador = ["Thor", "Hércules", "Aquiles", "Leônidas", "Spartacus"];
    let timeInimigo = [];

    while (timeInimigo.length < 5) {
        let indiceAleatorio = Math.floor(Math.random() * timeComputador.length);
        timeInimigo.push(timeComputador[indiceAleatorio]);
        timeComputador.splice(indiceAleatorio, 1);
    }

    document.getElementById("informacoesJogador").innerText = `Seu time: ${timeJogador.join(", ")}`;
    document.getElementById("informacoesComputador").innerText = `Time adversário: ${timeInimigo.join(", ")}`;

    document.getElementById("resultadoBtn").style.display = "block";
}

function verResultado() {
    let forcaTimeJogador = Math.floor(Math.random() * 100);
    let forcaTimeComputador = Math.floor(Math.random() * 100);

    let resultado = forcaTimeJogador > forcaTimeComputador ? "Você venceu!" : "Você perdeu!";
    if (forcaTimeJogador === forcaTimeComputador) {
        resultado = "Empate!";
    }

    document.getElementById("resultadoFinal").innerText = resultado;
}
