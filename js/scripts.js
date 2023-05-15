//Botões
const btGerar = document.querySelector("#gerar");
const btResetar = document.querySelector("#resetar");
const btAlterar = document.querySelector("#alterar");

//Paletas
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");
const paleta4 = document.querySelector("#paleta4");
const paletas = document.querySelectorAll(".paleta");

//Quadros
const quadros = document.querySelectorAll(".quadro");

let pincel = "";

//Funções
function coresAleatorias() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

btGerar.addEventListener("click", gerarCores);
function gerarCores() {
  paleta1.style.backgroundColor = "black";
  paleta1.style.borderWidth = "1px";
  paleta1.style.borderColor = "black";

  paleta2.style.backgroundColor = coresAleatorias();
  paleta2.style.borderWidth = "1px";
  paleta2.style.borderColor = "black";

  paleta3.style.backgroundColor = coresAleatorias();
  paleta3.style.borderWidth = "1px";
  paleta3.style.borderColor = "black";

  paleta4.style.backgroundColor = coresAleatorias();
  paleta4.style.borderWidth = "1px";
  paleta4.style.borderColor = "black";
}

btResetar.addEventListener("click", resetar);
function resetar() {
  pincel = "";

  for (var i = 0; i < paletas.length; i++) {
    paletas[i].style.backgroundColor = "white";
    paletas[i].style.borderWidth = "1px";
    paletas[i].style.borderColor = "black";
  }

  for (var i = 0; i < quadros.length; i++) {
    quadros[i].style.backgroundColor = "white";
    quadros[i].style.width = '80px';
    quadros[i].style.height = '80px';
  }
}

paleta1.addEventListener("click", getCor1);
function getCor1() {
  pincel = paleta1.style.backgroundColor;
  if (pincel != "white") {
    paleta1.style.borderWidth = "3px";
    paleta1.style.borderColor = "red";
  }

  paleta2.style.borderWidth = "1px";
  paleta2.style.borderColor = "black";

  paleta3.style.borderWidth = "1px";
  paleta3.style.borderColor = "black";

  paleta4.style.borderWidth = "1px";
  paleta4.style.borderColor = "black";
}

paleta2.addEventListener("click", getCor2);
function getCor2() {
  pincel = paleta2.style.backgroundColor;
  if (pincel != "white") {
    paleta2.style.borderWidth = "3px";
    paleta2.style.borderColor = "red";
  }

  paleta1.style.borderWidth = "1px";
  paleta1.style.borderColor = "black";

  paleta3.style.borderWidth = "1px";
  paleta3.style.borderColor = "black";

  paleta4.style.borderWidth = "1px";
  paleta4.style.borderColor = "black";
}

paleta3.addEventListener("click", getCor3);
function getCor3() {
  pincel = paleta3.style.backgroundColor;
  if (pincel != "white") {
    paleta3.style.borderWidth = "3px";
    paleta3.style.borderColor = "red";
  }

  paleta2.style.borderWidth = "1px";
  paleta2.style.borderColor = "black";

  paleta1.style.borderWidth = "1px";
  paleta1.style.borderColor = "black";

  paleta4.style.borderWidth = "1px";
  paleta4.style.borderColor = "black";
}

paleta4.addEventListener("click", getCor4);
function getCor4() {
  pincel = paleta4.style.backgroundColor;
  if (pincel != "white") {
    paleta4.style.borderWidth = "3px";
    paleta4.style.borderColor = "red";
  }

  paleta2.style.borderWidth = "1px";
  paleta2.style.borderColor = "black";

  paleta3.style.borderWidth = "1px";
  paleta3.style.borderColor = "black";

  paleta1.style.borderWidth = "1px";
  paleta1.style.borderColor = "black";
}

function pintar(quadro) {
  quadro.style.backgroundColor = pincel;
}

function getValor() {
  texto = document.getElementById("input").value;

  if (texto >= 25 && texto <= 150) {
    for (var i = 0; i < quadros.length; i++) 
    {
      quadros[i].style.width = (`${texto}px`);
      quadros[i].style.height = (`${texto}px`);
    }
  } else {
    alert("O valor deve estar entre 25 e 150");
  }

  texto.value = '';
}
