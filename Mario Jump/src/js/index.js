const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const clouds = document.querySelector('.clouds');
const cloud = document.querySelector('.cloud');

const endGame = document.querySelector('.game-over');

// Esse trecho aqui faz o Mario pular
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

// Esse trecho faz o jogo se movimentar em loop, até que o Mario encoste no tubo verde. O loop envolve o movimento do próprio Mario, o movimento do tubo verde e das nuvens no céu. 
// Uma vez encostado no tubo, o game para, a mensagem de Game Over abre e o botão de Restart aparece.
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    console.log(marioPosition);
    console.log(cloudsPosition);
    console.log(cloudPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        // Para o tubo verde na posição em que for tocado pelo Mario
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        // Para o Mario na posição que tocar no tubo verde
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        // Troca o gif do Mario andandinho pela imagem do Mario tomando Game Over
        mario.src = './src/images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        // Para a animação das nuvens quando e se o Mario tocar no tubo verde
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`
        
        // Abre a aba de Restart
        endGame.classList.add('active');

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);








