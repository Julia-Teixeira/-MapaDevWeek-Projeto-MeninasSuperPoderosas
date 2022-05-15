/* 
Objetivo 1 - quando passar o mouse em cima do 
personagem temos que: 
    -colocar a classe selecionado no personagem 
    que passamos o mouse em cima, para adicionar a 
    animação nele.
    -retirar a classe selecionado do personagem 
    selecionado anteriormente.

Objetivo 2 - Quando pasa o mouse em cima do personagem,
trocar a imagem do personagem grande
    - alterar a imagem do jogador 1
    - alterar o nome do jogador 1
*/

const personagens = document.querySelectorAll('.personagem')
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;
        if (idSelecionado === 'sedusa') return;

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado')

        //mudando a imagem grande
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        //mudar o nome do personagem grande
        const nomeJogador1 = document.getElementById('nome-jogador1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;

    })
})
