'use strict'; //Modo Estrito (Rígido) - Ele nos indica quando cometemos erros/más práticas

const sons = {
  'A': 'boom.wav',
  'S': 'clap.wav',
  'D': 'hihat.wav',
  'F': 'kick.wav',
  'G': 'openhat.wav',
  'H': 'ride.wav',
  'J': 'snare.wav',
  'K': 'tink.wav',
  'L': 'tom.wav'
}
const criarDiv = (texto) => { // Esta const 'manda' o criar uma div com cada texto inserido
  const div = document.createElement('div')
  div.classList.add('key');
  div.textContent = texto;
  div.id = texto;
  document.getElementById('container').appendChild(div)
}

const exibir = (sons) => {
  Object.keys(sons).forEach(criarDiv); // O forEach vai percorrer todos os elementos do array sons e criar uma Div para cada letra descrita no objeto acima (sons)
  /* Como essa arrow function não tem o return podemos excluir as chaves de deixar tudo em uma linha apenas (
    Exemplo: const exibir = (sons) => Object.keys(sons).forEach(criarDiv) */
}

const tocarsom = (letra) => {
  const audio = new Audio(`/sounds/${sons[letra]}`)
  audio.play();
}
const adicionarEfeito = (letra) => document.getElementById(letra)
  .classList.add('active');

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove('active');
  div.addEventListener('transitionend', removeActive);
}


const ativarDiv = (evento) => {
  let letra = '';
  if (evento.type == 'click') {
    letra = evento.target.id;
  } else {
    letra = evento.key.toUpperCase();
  }
  const letraPermitida = sons.hasOwnProperty(letra);
  if (letraPermitida) {
    adicionarEfeito(letra);
    tocarsom(letra);
    removerEfeito(letra);
  }
}

exibir(sons);
document.getElementById('container').addEventListener('click', ativarDiv);
window.addEventListener('keydown', ativarDiv);
