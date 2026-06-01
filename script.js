const botoes = document.querySelectorAll("aside button");
const ferramentas = document.querySelectorAll(".ferramenta");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        const alvo = botao.dataset.alvo;
        const ferramentaSelecionada = document.getElementById(alvo);

    
        if (ferramentaSelecionada.classList.contains("ativo")) {
            ferramentaSelecionada.classList.remove("ativo");
            return;
        }

        // Fecha todas
        ferramentas.forEach(ferramenta => {
            ferramenta.classList.remove("ativo");
        });

        // Abre a clicada
        ferramentaSelecionada.classList.add("ativo");

    });

});


//não utilizei toogle porque ele é mais comum para somente um elemento.