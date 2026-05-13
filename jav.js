let ListaPessoas = "Ana-15,João-28,Carlos-17,Maria-50";
let nomes = ListaPessoas.split(",");
let Pessoas = [];

let nomes = ListaPessoas.split(",");

for (let i = 0; i < nomes.length; i++) {

    let dados = nomes[i].split("-");

    let pessoa = {
        nome: dados[0],
        idade: Number(dados[1])

}