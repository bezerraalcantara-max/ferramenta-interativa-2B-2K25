/**
 * Cria um novo elemento de cartão (flashcard) na interface.
 * O cartão exibe uma categoria, uma pergunta e uma resposta.
 * O cartão é interativo, permitindo que o usuário "vire" ele para ver a resposta.
 *
 * @param {string} categoria - O texto da categoria a ser exibida no cartão.
 * @param {string} pergunta - O texto da pergunta a ser exibida.
 * @param {string} resposta - O texto da resposta que ficará oculta inicialmente.
 */
function criaCartao(categoria, pergunta, resposta) {
    // 1. Seleciona o elemento contêiner principal no DOM.
    // Presume-se que existe um elemento com o ID 'container' no HTML.
    let container = document.getElementById('container');

    // 2. Cria um novo elemento HTML <article> que será o cartão.
    let cartao = document.createElement('article');

    // 3. Adiciona a classe CSS 'cartao' para estilização.
    cartao.className = 'cartao';

    // 4. Define o conteúdo HTML interno do cartão (o markup).
    // Usa template literals (crase) para inserir as variáveis (categoria, pergunta, resposta)
    // diretamente na estrutura HTML.
    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `;

    // 5. Inicializa uma variável de estado para controlar se a resposta está visível.
    let respostaEstaVisivel = false;

    // 6. Define a função que será executada quando o cartão for clicado.
    function viraCartao() {
        // Alterna o valor da variável de estado: se for true, vira false, e vice-versa.
        respostaEstaVisivel = !respostaEstaVisivel;

        // Alterna a classe CSS 'active' no elemento do cartão.
        // Se 'respostaEstaVisivel' for true, a classe é adicionada; se for false, é removida.
        // Essa classe 'active' é tipicamente usada no CSS para mostrar/esconder a resposta e/ou aplicar a animação de "virar".
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // 7. Adiciona um ouvinte de evento (event listener) ao cartão.
    // Quando o cartão for clicado, a função 'viraCartao' será chamada.
    cartao.addEventListener('click', viraCartao);


    // 8. Anexa o novo cartão criado (elemento 'article') como filho do contêiner.
    // Isso torna o cartão visível na página.
    container.appendChild(cartao);

}