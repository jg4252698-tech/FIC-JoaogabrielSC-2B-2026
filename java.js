// SCRIPT DA CALCULADORA

function insertToDisplay(data) {
    document.querySelector("#display").value += data;
}

function limpar(){
    document.querySelector("#display").value = "";
}

function apagar(){
    const display = document.querySelector("#display");
    display.value = display.value.slice(0, -1);
}

function resultado(){
    const display = document.querySelector("#display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Erro";

    }

}

//   


function adicionar() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    if (nome === "" || idade <= 0) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }

    nomes.forEach(function (nome) {
        console.log("forEach1 : " + nome);
    });

    nomes.forEach((nome) => {
        console.log("forEach2 : " + nome);
    });

    for (let nome of nomes) {
        
    }
}