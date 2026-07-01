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
      return;
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

    const zones = [
      { name: "Brasil",        city: "Brasília",          tz: "America/Sao_Paulo" },
      { name: "EUA (NY)",      city: "Nova York",          tz: "America/New_York" },
      { name: "EUA (LA)",      city: "Los Angeles",        tz: "America/Los_Angeles" },
      { name: "Portugal",      city: "Lisboa",             tz: "Europe/Lisbon" },
      { name: "Reino Unido",   city: "Londres",            tz: "Europe/London" },
      { name: "França",        city: "Paris",              tz: "Europe/Paris" },
      { name: "Alemanha",      city: "Berlim",             tz: "Europe/Berlin" },
      { name: "Japão",         city: "Tóquio",             tz: "Asia/Tokyo" },
      { name: "China",         city: "Pequim",             tz: "Asia/Shanghai" },
      { name: "Índia",         city: "Nova Délhi",         tz: "Asia/Kolkata" },
      { name: "Austrália",     city: "Sydney",             tz: "Australia/Sydney" },
      { name: "Argentina",     city: "Buenos Aires",       tz: "America/Argentina/Buenos_Aires" },
      { name: "México",        city: "Cidade do México",   tz: "America/Mexico_City" },
      { name: "Rússia",        city: "Moscou",             tz: "Europe/Moscow" },
      { name: "Emirados",      city: "Dubai",              tz: "Asia/Dubai" },
      { name: "África do Sul", city: "Joanesburgo",        tz: "Africa/Johannesburg" },
    ];

    let selectedTz = "America/Sao_Paulo";

    function getOffset(tz) {
      const now = new Date();
      const tzDate = new Date(now.toLocaleString("en-US", { timeZone: tz }));
      const utcDate = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
      const diff = Math.round((tzDate - utcDate) / 3600000);
      return (diff >= 0 ? "UTC+" : "UTC") + diff;
    }

    const grid = document.getElementById("tz-grid");

    zones.forEach(z => {
      const btn = document.createElement("button");
      btn.className = "tz-btn" + (z.tz === selectedTz ? " active" : "");
      btn.innerHTML = `<div class="tz-name">${z.name}</div><div class="tz-city">${z.city} &bull; ${getOffset(z.tz)}</div>`;
      btn.addEventListener("click", () => {
        selectedTz = z.tz;
        document.querySelectorAll(".tz-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("sel-label").textContent =
          `${z.city} — ${z.name} (${getOffset(z.tz)})`;
      });
      grid.appendChild(btn);
    });

    function padZ(n) { return String(n).padStart(2, "0"); }

    const weekdays = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
    const months   = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];

    function getNow() {
      return new Date(new Date().toLocaleString("en-US", { timeZone: selectedTz }));
    }

    const canvas = document.getElementById("analog");
    const ctx = canvas.getContext("2d");

    function drawAnalog(h, m, s) {
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2, r = W / 2 - 10;
      ctx.clearRect(0, 0, W, H);

      const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const face     = dark ? "#1e1e1c" : "#ffffff";
      const ringCol  = dark ? "#333"    : "#ddd";
      const numCol   = dark ? "#777"    : "#999";
      const handCol  = dark ? "#e0e0de" : "#1a1a1a";
      const secCol   = "#178dd4";

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = face;
      ctx.fill();
      ctx.strokeStyle = ringCol;
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let i = 1; i <= 12; i++) {
        const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
        ctx.fillStyle = numCol;
        ctx.font = "10px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(i, cx + Math.cos(a) * (r - 18), cy + Math.sin(a) * (r - 18));
      }

      for (let i = 0; i < 60; i++) {
        const a = (i / 60) * Math.PI * 2 - Math.PI / 2;
        const isHour = i % 5 === 0;
        const outer = r - 4;
        const inner = outer - (isHour ? 9 : 4);
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * outer, cy + Math.sin(a) * outer);
        ctx.lineTo(cx + Math.cos(a) * inner, cy + Math.sin(a) * inner);
        ctx.strokeStyle = ringCol;
        ctx.lineWidth = isHour ? 2 : 1;
        ctx.stroke();
      }

      function hand(angle, length, width, color) {
        const a = angle - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx - Math.cos(a) * length * 0.18, cy - Math.sin(a) * length * 0.18);
        ctx.lineTo(cx + Math.cos(a) * length, cy + Math.sin(a) * length);
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      const hAngle = ((h % 12) / 12 + m / 720) * Math.PI * 2;
      const mAngle = (m / 60 + s / 3600) * Math.PI * 2;
      const sAngle = (s / 60) * Math.PI * 2;

      hand(hAngle, r * 0.50, 4.5, handCol);
      hand(mAngle, r * 0.72, 2.5, handCol);
      hand(sAngle, r * 0.80, 1.5, secCol);

      ctx.beginPath();
      ctx.arc(cx, cy, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = secCol;
      ctx.fill();
    }

    function tick() {
      const d = getNow();
      const h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
      document.getElementById("dig-time").textContent = `${padZ(h)}:${padZ(m)}:${padZ(s)}`;
      document.getElementById("dig-date").textContent =
        `${weekdays[d.getDay()]}, ${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
      drawAnalog(h, m, s);
    }

    tick();
    setInterval(tick, 1000);