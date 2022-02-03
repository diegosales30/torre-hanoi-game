const containerPrincipal = document.querySelector('.container');

function criandoElementoDinamico(){
    const caixaOne = document.createElement('section');
    caixaOne.classList.add('caixa');
    caixaOne.classList.add('caixa-one');
    containerPrincipal.appendChild(caixaOne);

    const caixaTwo = document.createElement('section');
    caixaTwo.classList.add('caixa');
    caixaTwo.classList.add('caixa-two');
    containerPrincipal.appendChild(caixaTwo);

    const caixaThree = document.createElement('section');
    caixaThree.classList.add('caixa');
    caixaThree.classList.add('caixa-three');
    containerPrincipal.appendChild(caixaThree);

    const discoFour = document.createElement('div');
    discoFour.style.width = '80%';
    discoFour.classList.add('discos');
    caixaOne.appendChild(discoFour);

    const discoThree = document.createElement('div');
    discoThree.style.width = '65%';
    discoThree.classList.add('discos');
    caixaOne.appendChild(discoThree);

    const discoTwo = document.createElement('div');
    discoTwo.style.width = '40%';
    discoTwo.classList.add('discos');
    caixaOne.appendChild(discoTwo);

    const discoOne = document.createElement('div');
    discoOne.style.width = '25%';
    discoOne.classList.add('discos');
    caixaOne.appendChild(discoOne);
}
criandoElementoDinamico();

const paredeGame = document.querySelector('.parede-game');
const body = document.querySelector('body');

function renderizarParagraph(){
    const h2 = document.createElement('h2');
    h2.classList.add('winnerMsg');
    paredeGame.appendChild(h2)

    const pMovimento = document.createElement('p');
    pMovimento.classList.add('movimento');
    pMovimento.innerText = 'Numero de Movimentos';
    paredeGame.appendChild(pMovimento);

    const pContador = document.createElement('p');
    pContador.classList.add('contador');
    pContador.innerText = '0'
    paredeGame.appendChild(pContador);

}
renderizarParagraph()

//função verifica vitoria

const discoQuatro = document.querySelector('.discos');
const caixaThree = document.querySelector('.caixa-three');
const vitoria = document.querySelector('.winnerMsg');

function vitoriaGame(){
    if(discoQuatro.parentElement !== null){
        if(caixaThree.childElementCount === 4){
            vitoria.innerText = 'Você venceu!'
        }
    }
}

let arrayDisc = [];
const p = document.querySelector('.contador');
containerPrincipal.addEventListener('click', selecionarCaixa);

let contadoraDeMovimentos = 0;

function selecionarCaixa(event) {
    if (event.target.tagName === "SECTION"){
        if(arrayDisc.length >= 2) {
            arrayDisc = [];
        }
        arrayDisc.push(event.target)     
        let discoFinal = arrayDisc[0].lastElementChild
        discoFinal.classList.add('disco-clicado');
        
        
        if(arrayDisc[0].lastElementChild == null) {
            arrayDisc = [];
            }
        
        if (arrayDisc[1] !== undefined && arrayDisc[1].lastElementChild === null || arrayDisc[0].lastElementChild.clientWidth < arrayDisc[1].lastElementChild.clientWidth ){
            arrayDisc[1].appendChild(discoFinal)
            discoFinal.classList.remove('disco-clicado');
            contadoraDeMovimentos++;
            p.innerText = contadoraDeMovimentos;
        }
        vitoriaGame()
        discoFinal.classList.remove('disco-clicado');
    }
}

function reset(){
    document.location.reload(true);
}