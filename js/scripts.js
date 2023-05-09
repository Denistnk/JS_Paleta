//Botões
const btGerar = document.querySelector("#gerar");
const btResetar = document.querySelector("#resetar");
const btAlterar = document.querySelector("#alterar");

//Paletas
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");
const paleta4 = document.querySelector("#paleta4");

//Quadros
const quadro = document.querySelectorAll(".quadros")
//Input
const input = document.querySelector("#input");

const titulo = document.querySelector(".titulo")

let pincel = '';

//Funções
function coresAleatorias() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

btGerar.addEventListener("click", gerarCores);
  function gerarCores() {
    paleta1.style.backgroundColor = "black";
    paleta2.style.backgroundColor = coresAleatorias();
    paleta3.style.backgroundColor = coresAleatorias();
    paleta4.style.backgroundColor = coresAleatorias();
  }

btResetar.addEventListener("click", resetar);
  function resetar() {
    paleta1.style.backgroundColor = "white";
    paleta2.style.backgroundColor = "white";
    paleta3.style.backgroundColor = "white";
    paleta4.style.backgroundColor = "white";
  }

paleta1.addEventListener("click", getCor1);
  function getCor1() {
    pincel = paleta1.style.backgroundColor;
    paleta1.style.borderWidth = "3px";
    paleta1.style.borderColor = "red";

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
    paleta2.style.borderWidth = "3px";
    paleta2.style.borderColor = "red";

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
    paleta3.style.borderWidth = "3px";
    paleta3.style.borderColor = "red";

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
    paleta4.style.borderWidth = "3px";
    paleta4.style.borderColor = "red";

    paleta2.style.borderWidth = "1px";
    paleta2.style.borderColor = "black";

    paleta3.style.borderWidth = "1px";
    paleta3.style.borderColor = "black";

    paleta1.style.borderWidth = "1px";
    paleta1.style.borderColor = "black";
  }

function clique(quadro) { 
    quadro.style.backgroundColor = pincel;
  }