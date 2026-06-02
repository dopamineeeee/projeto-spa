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


const form = document.getElementById("formimc");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // impede recarregar a página

    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    console.log("Peso:", peso);
    console.log("Altura:", altura);

    const resultadoImc = peso/altura**2
    console.log(resultadoImc)

    document.getElementById("resultado").innerText =
        `Resultado do IMC é: ${resultadoImc.toFixed(2)}`;
    
    
});

