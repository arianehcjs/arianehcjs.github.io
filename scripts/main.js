let minhaVariavel;
minhaVariavel = 'bola';
minhaVariavel = 'bola redonda';
minhaVariavel = 1,'bola';
// estou gostando de desenvolvimento WEB.
/* estou gostando muito desse desenvolvimento 
esta me deixando bem feliz aprender mais e mais isso, quero me dedicar e me tornar uma
desenvolvedora como meu esposo
*/
function multiplica (num1,num2){
    let resultado = num1*num2;
    return resultado;
}
// procedimento a cima, usado apenas no console não apresenta no meu web.
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    console.log('vou testar o caminho da imagem: '+meuSrc+", vou compará-lo com: "+
    'imagens/cozinha.png. Resultado: '+(meuSrc === 'imagens/cozinha.png'))
    if(meuSrc === 'imagens/cozinha.png') {
      minhaImagem.setAttribute ('src','imagens/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/cozinha.png');
    }
}
let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');
function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'bem vindo ao culunary in house, ' + meuNome;
  }
  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'bem vindo ao culunary in house, ' + nomeGuardado;
  }
  meuBotao.onclick = function() { defineNomeUsuario();
  }
  function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Culinary in house, ' + meuNome;
    }
  }