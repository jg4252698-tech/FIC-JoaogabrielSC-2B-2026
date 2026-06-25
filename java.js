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