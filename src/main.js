import { example } from './data.js';
import data from './data/athletes/athletes.js';



const atletas = data.athletes

const paises = atletas.reduce((valorAnterior, atletaAtual) => {
  const pais = atletaAtual.team;
  if (pais in valorAnterior) {
    const atletasAnteriores = valorAnterior[atletaAtual.team];
    return { ...valorAnterior, [pais]: [...atletasAnteriores, atletaAtual] }
  }
  else {
    return { ...valorAnterior, [pais]: [atletaAtual] }
  }
}, {})

let cartasPaíses = ""
for (const pais in paises) {
  cartasPaíses += `<div class="flex-item">
  <ol class="background">
  <li class="conteudo-países">${pais}</li>
  <li class="conteudo-países">${paises[pais].length} atletas participantes</li>
  </ol>
  </div>`
}

console.log(cartasPaíses);

document.getElementById("cards-países").innerHTML = cartasPaíses;
