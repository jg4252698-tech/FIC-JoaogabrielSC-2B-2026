let pessoas = [];

function adicionar() {
    let aluno = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    if (aluno === "" || idade <= 0) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }
}