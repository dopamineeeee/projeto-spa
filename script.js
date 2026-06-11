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


 // IMC

const formImc = document.getElementById("formimc");

formImc.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    console.log("Peso:", peso);
    console.log("Altura:", altura);

    const resultadoImc = peso/altura**2

    if (!isFinite(resultadoImc)) {
    document.getElementById("resultadoimc").innerText =
        "Erro: Altura inválida.";
    return;
    }
    console.log(resultadoImc)

    const sexo = document.getElementById("trocasexo").value;


    
    if (sexo === "homem") {

       

                
        if(resultadoImc <= 18.5){

        document.getElementById("resultadoimc").innerText =
            `Resultado do IMC é: ${resultadoImc.toFixed(2)}, você está abaixo do peso.` ;
        
        }

        else {
                    
        document.getElementById("resultadoimc").innerText =  
          `Erro: Verifique se o peso e a altura foram digitados corretamente.`;

        }

        if(resultadoImc > 18.5 && resultadoImc <= 24.9){

        document.getElementById("resultadoimc").innerText =
            `Resultado do IMC é: ${resultadoImc.toFixed(2)}, você está com peso normal.` ;

        }

        else {
                    
        document.getElementById("resultadoimc").innerText =  
          `Erro: Verifique se o peso e a altura foram digitados corretamente.`;

        }

        if(resultadoImc > 25 && resultadoImc <= 29.9){

        document.getElementById("resultadoimc").innerText =
            `Resultado do IMC é: ${resultadoImc.toFixed(2)}, você está com sobrepeso.` ;

        }

        else {
                    
        document.getElementById("resultadoimc").innerText =  
          `Erro: Verifique se o peso e a altura foram digitados corretamente.`;

        }

        if(resultadoImc >= 30) {

        document.getElementById("resultadoimc").innerText =
            `Resultado do IMC é: ${resultadoImc.toFixed(2)}, você é obeso.` ;

        }

        else {
                    
        document.getElementById("resultadoimc").innerText =  
          `Erro: Verifique se o peso e a altura foram digitados corretamente.`;

        }
    }

    else if (sexo === "mulher") {

        if(resultadoImc <= 18.5){

        document.getElementById("resultadoimc").innerText =
            `Resultado do IMC é: ${resultadoImc.toFixed(2)}, você está abaixo do peso.` ;
        
        }

        else {
                    
        document.getElementById("resultadoimc").innerText =  
          `Erro: Verifique se o peso e a altura foram digitados corretamente.`;

        }


        if(resultadoImc > 18.5 && resultadoImc <= 23.9){

        document.getElementById("resultadoimc").innerText =
            `Resultado do IMC é: ${resultadoImc.toFixed(2)}, você está com peso normal.` ;

        }

        else {
                    
        document.getElementById("resultadoimc").innerText =  
          `Erro: Verifique se o peso e a altura foram digitados corretamente.`;

        }
        

        if(resultadoImc > 24 && resultadoImc <= 28.9){

        document.getElementById("resultadoimc").innerText =
            `Resultado do IMC é: ${resultadoImc.toFixed(2)}, você está com sobrepeso.` ;

        }

        else {
                    
        document.getElementById("resultadoimc").innerText =  
          `Erro: Verifique se o peso e a altura foram digitados corretamente.`;

        }

        if(resultadoImc >= 29.0) {

        document.getElementById("resultadoimc").innerText =
            `Resultado do IMC é: ${resultadoImc.toFixed(2)}, você é obeso.` ;

        }

        else {
                    
        document.getElementById("resultadoimc").innerText =  
          `Erro: Verifique se o peso e a altura foram digitados corretamente.`;

        }

    }
    
});

//CONVERSOR TEMPERATURA


//°C → °F: C × 1.8 + 32
//°F → °C: (F − 32) / 1.8

const formtemp = document.getElementById("formtemperatura");

formtemp.addEventListener("submit", function(eventTemp) {
    eventTemp.preventDefault();

    const trocatemp = document.getElementById("temperaturaa").value;

    console.log(trocatemp)

    const trocatemp2 = document.getElementById("trocatemp").value;


    if (trocatemp2 === "celsius") {

    const resultTempcelsius = (trocatemp - 32) / 1.8;

     document.getElementById("resultadotemperatura").innerText =
       `Conversão de Fahrenheit para Celsius é: ${resultTempcelsius.toFixed(2)} °C` ;

    }

    else if(trocatemp2 === "fahrenheit")
        
        {

     const resultTempfahrenheit = (trocatemp * 1.8) + 32;

     document.getElementById("resultadotemperatura").innerText =
        `Conversão de Celsius para Fahrenheit é:  ${resultTempfahrenheit.toFixed(2)}°F` ;

    }

});


//CONVERSOR VELOCIDADE

//1 km/h = 0.621371 mph
//1 mph = 1.6093km

const formvelocidadee = document.getElementById("formvelocidade");

formvelocidadee.addEventListener("submit", function(eventveloci){

    eventveloci.preventDefault();

    const trocaveloci = document.getElementById("trocavelocidade").value;

    const velocidadecalculo = document.getElementById("velocidadee").value;

    console.log (velocidadecalculo)

    console.log(trocaveloci)

    if (trocaveloci === "km") {


    const resultparakm = velocidadecalculo*1.6093;

    document.getElementById("resultadovelocidade").innerText =

      `Conversão da velocidade de Milhas por hora para Kilometros por hora é:  ${resultparakm.toFixed(2)} KM/H` ;

    }

    else if (trocaveloci === "milhas"){


        const resultparamilha = velocidadecalculo/0.6213;

        document.getElementById("resultadovelocidade").innerText =

         `Conversão da velocidade de Kilometros por hora para Milhas por hora é:  ${resultparamilha.toFixed(2)} MP/H` ;

    }



})



//conversor de Moedas



async function converterUSDparaBRL(valorUSD) {
    const response = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL"
    );

    const data = await response.json();

    const cotacao = Number(data.USDBRL.bid);

    return valorUSD * cotacao;
}

async function converterBRLparaUSD(valorBRL) {
    const response2 = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL"
    );

    const data2 = await response2.json();

    const cotacao2 = Number(data2.USDBRL.bid);

    return valorBRL / cotacao2 
    
}

const formularioMoeda = document.getElementById("formMoeda");

formularioMoeda.addEventListener("submit", async function(eventmoeda) {
    eventmoeda.preventDefault();

    const trocaDaMoeda = document.getElementById("trocamoeda").value;
    const moedaa = Number(document.getElementById("moeda").value);

    if (trocaDaMoeda === "real") {

        const resultadoUSDxBRL = await converterUSDparaBRL(moedaa);

        document.getElementById("resultadomoeda").innerText =
            `US$ ${moedaa.toFixed(2)} dolares convertido para reais é: R$ ${resultadoUSDxBRL.toFixed(2)}`;
    }

    else if (trocaDaMoeda === "dolar") {

        const resultadoBRLxUSD = await converterBRLparaUSD(moedaa);
        document.getElementById("resultadomoeda").innerText =
            `R$ ${moedaa.toFixed(2)} reais convertido para dolares é: US$ ${resultadoBRLxUSD.toFixed(2)}`;

    }
});


// Conversor Massa

const formmassa = document.getElementById("formMassa");

formmassa.addEventListener("submit", function(eventmassa){

    eventmassa.preventDefault();

    const trocamedida = document.getElementById("trocamassas").value;

    const valormassa = document.getElementById("massas").value;

    console.log (trocamedida)

    console.log(valormassa)

    if (trocamedida === "quilogramas") {


    const resultparamassa = valormassa/2.20;

    document.getElementById("resultadomassa").innerText =

      `Conversão da massa de Libras para Quilogramas é:  ${resultparamassa.toFixed(2)} ` ;

    }

    else if (trocamedida === "libras"){


        const resultparamassa = valormassa*2.20;

        document.getElementById("resultadomassa").innerText =

         `Conversão da massa de Quilogramas para Libras é:  ${resultparamassa.toFixed(2)} ` ;

    }



})

