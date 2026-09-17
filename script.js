const questions = [
    {
        title: "Você encontrou uma Fruta Lendária caindo debaixo de uma árvore no First Sea! O que você faz?",
        options: [
            { text: "Comer imediatamente para ganhar poderes de Logia.", response: "Decisão corajosa! Você ganha imunidade contra NPCs normais, mas cuidado ao nadar na água!" },
            { text: "Guardar no inventário para trocar no Café do Second Sea.", response: "Visão estratégica! Guardar Frutas Lendárias vai te ajudar muito no trade mais tarde." },
            { text: "Dar de presente para um jogador iniciante.", response: "Atitude digna de um grande Pirata! Você ganhou a lealdade de um novo aliado para sua tripulação." }
        ]
    },
    {
        title: "Um jogador de nível máximo com 'V4' ativada começou a te perseguir para pegar sua Bounty. Qual a sua estratégia?",
        options: [
            { text: "Entrar correndo na Safe Zone mais próxima.", response: "Segurança em primeiro lugar! Salvar seus pontos de Recompensa (Bounty) é prioridade." },
            { text: "Ativar seu Estilo de Luta e tentar o PvP.", response: "Sem medo da morte! Mesmo caindo, você ganha experiência prática de combate." },
            { text: "Usar uma Fruta de mobilidade (como Light ou Portal) para fugir pelo oceano.", response: "Estratégia perfeita! Quem sabe a hora de recuar vive para lutar outro dia." }
        ]
    },
    {
        title: "Qual estilo de luta e foco você prioriza para montar sua Build dos sonhos?",
        options: [
            { text: "Sword Main (Mestre em Espadas como Yoru/Cursed Dual Katana).", response: "Excelente escolha para dano massivo e combos rápidos no PvP!" },
            { text: "Fruit Main (Foco total no domínio da Fruta da Monstruosidade/Dough/Dragon).", response: "Poder elemental devastador! Ideal para farmar chefes e dominar batalhas de área." },
            { text: "Melee & Defense (Foco em Estilos como Godhuman e alta vida).", response: "Uma verdadeira máquina de tancar dano! Perfeito para Raids e confrontos longos." }
        ]
    }
];

let currentIndex = 0;

function loadQuestion() {
    const q = questions[currentIndex];
    document.getElementById("question-number").innerText = `PERGUNTA #${currentIndex + 1}`;
    document.getElementById("question-text").innerText = q.title;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt.text;
        btn.onclick = () => selectOption(opt.response);
        optionsContainer.appendChild(btn);
    });

    document.getElementById("ia-text").innerText = "Selecione uma opção acima para revelar seu destino pirata!";
}

function selectOption(responseText) {
    const speech = document.getElementById("ia-text");
    speech.innerText = responseText;

    // Recurso de voz (Síntese de fala do navegador)
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Parar falas anteriores
        const utterance = new SpeechSynthesisUtterance(responseText);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.1;
        window.speechSynthesis.speak(utterance);
    }
}

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % questions.length;
    loadQuestion();
});

// Inicializar primeira pergunta
loadQuestion();