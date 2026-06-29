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

//ATIVIDADE DE STRING

let pessoas = [];

function adicionar() {

  let nome = document.getElementById("nome").value;
  let idade = Number(document.getElementById("idade").value);
  
  if (nome == "" || idade <= 0) {
    alert("Preencha Corretamente!");
    return;
  }

  pessoas.push({
    nome: nome,
    idade: idade
  });

  let item = document.createElement("li");
  item.innerText = nome + " - " + idade + " anos ";

  document.getElementById("lista").appendChild(item);

  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
}

function analisar() {

  if(pessoas.length == 0) {
    alert("Nenhuma pessoa cadastrada.");
    return;
  }

  let soma = 0;

  for (let i = 0; i < pessoas.length; i++) {
    soma += pessoas[i].idade;
  }

  pessoas.sort(function(a, b) {
    return a.nome.localeCompare(b.nome)
  });

  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i = 0; i < pessoas.length; i++) {
    let item = document.createElement("li");
    item.innerText = pessoas[i].nome + " - " + pessoas[i].idade + " anos "
    lista.appendChild(item);
  }

  let media = soma / pessoas.length;

  document.getElementById("resultado").innerText = 
    "Quantidade de pessoas: " + pessoas.length +
    " | Média de idades: " + media.toFixed(1);
}

// BOCA DE URNA

let votos = [];

function verificar() {

  let nome = document.getElementById("nome").value;
  let idade = Number(document.getElementById("idade").value);

  if (nome === "" || idade <= 0) {
    alert("Preencha corretamente todos os campos!");
    return;
  }
  
  let faixa;

  switch (true) {
    case (idade < 16):
      faixa = "menor";
      break;

    case (idade >= 16 && idade < 18):
      faixa = "facultativo";
      break;

    default:
      faixa = "obrigatorio";
      break;
  }

  switch (faixa) {
    case "menor":
      alert("Você não pode votar!");
      return;

    case "facultativo":
      alert("Seu voto é facultativo!");
      break;

    case "obrigatorio":
      alert("Seu voto é obrigatório!");
      break;
  }

  document.getElementById("urna").style.display = "block";
}

function confirmar() {
  let voto = "";

  // WHILE obrigando digitar o 80
  while (voto !== "80") {
    voto = document.getElementById("voto").value;

    if (voto === "") {
      alert("Digite um número!");
      return;
    }

    if (voto !== "80") {
      alert("Número inválido! Digite 80 para o candidato correto.");
      document.getElementById("voto").value = "";
      return; // sai pra evitar loop infinito travando a UI
    }
  }

  votos.push(voto);

  alert("Voto registrado com sucesso!");

  document.getElementById("voto").value = "";
  document.getElementById("urna").style.display = "none";
}

//SISTEMA DE NOTAS

function verificarNota() {
  let nota = Number(document.getElementById("nota").value);
  let resultado = document.getElementById("resultado");

  if (isNaN(nota)) {
    resultado.innerText = "Digite uma nota válida!";
    return;
  }

  switch (true) {
    case (nota >= 6):
      resultado.innerText = "Aprovado";
      break;

    case (nota > 1 && nota < 6):
      resultado.innerText = "Recuperação";
      break;

    case (nota <= 1):
      resultado.innerText = "Reprovado";
      break;

    default:
      resultado.innerText = "Erro";
  }
}

//   RElOGIO DIGITAL

  let count = 0;
    let record = 0;

    const counterEl = document.getElementById('counter');
    const recordEl = document.getElementById('record');
    const historyEl = document.getElementById('history');

    function getStep() {
      return parseInt(document.getElementById('step').value) || 1;
    }

    function updateColor() {
      counterEl.classList.remove('positive', 'negative', 'zero');
      if (count > 0) counterEl.classList.add('positive');
      else if (count < 0) counterEl.classList.add('negative');
      else counterEl.classList.add('zero');
    }

    function bump() {
      counterEl.classList.add('bump');
      setTimeout(() => counterEl.classList.remove('bump'), 120);
    }

    function addHistory(op, value, result) {
      const div = document.createElement('div');
      div.className = 'history-item';
      const time = new Date().toLocaleTimeString('pt-BR');
      const opClass = op === '+' ? 'op-plus' : op === '-' ? 'op-minus' : 'op-reset';
      div.innerHTML = `<span class="${opClass}">${op} ${value}</span><span>→ ${result} &nbsp; <small>${time}</small></span>`;
      historyEl.prepend(div);
    }

    function change(direction) {
      const step = getStep();
      count += direction * step;
      if (count > record) { record = count; recordEl.textContent = record; }
      counterEl.textContent = count;
      updateColor();
      bump();
      addHistory(direction > 0 ? '+' : '-', step, count);
    }

    function reset() {
      addHistory('↺', count, 0);
      count = 0;
      counterEl.textContent = 0;
      updateColor();
      bump();
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' || e.key === '+') change(1);
      if (e.key === 'ArrowDown' || e.key === '-') change(-1);
      if (e.key === 'r' || e.key === 'R') reset();
    });