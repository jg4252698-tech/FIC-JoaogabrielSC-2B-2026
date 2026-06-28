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