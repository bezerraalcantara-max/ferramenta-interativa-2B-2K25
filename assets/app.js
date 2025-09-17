// Define a função 'criaCartao' que recebe três argumentos:
// 'categoria': a categoria do cartão, como 'Matemática' ou 'História'.
// 'pergunta': a pergunta que será exibida na frente do cartão.
// 'resposta': a resposta que será exibida no verso do cartão.
function criaCartao(categoria, pergunta, resposta) {
    // 1. Encontra o elemento com o ID 'container' no HTML.
    // Este será o local onde o novo cartão será adicionado.
    let container = document.getElementById('container');

    // 2. Cria um novo elemento HTML do tipo 'article'.
    // Este elemento será o nosso cartão de estudo.
    let cartao = document.createElement('article');
    
    // 3. Adiciona a classe CSS 'cartao' ao elemento 'article' que acabamos de criar.
    // Isso permite estilizar o cartão usando CSS.
    cartao.className = 'cartao';

    // 4. Define o conteúdo HTML interno do cartão usando um template string.
    // Isso insere a categoria, a pergunta e a resposta diretamente no HTML.
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

    // 5. Cria uma variável de controle para verificar se a resposta está visível ou não.
    let respostaEstaVisivel = false;

    // 6. Define a função 'viraCartao', que será chamada quando o usuário clicar no cartão.
    function viraCartao() {
        // Inverte o valor da variável 'respostaEstaVisivel' para 'true' se for 'false' e vice-versa.
        respostaEstaVisivel = !respostaEstaVisivel;
        
        // Alterna a classe CSS 'active' no cartão.
        // Se 'respostaEstaVisivel' for 'true', a classe é adicionada; se for 'false', é removida.
        // A classe 'active' geralmente é usada no CSS para rotacionar o cartão e mostrar a resposta.
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // 7. Adiciona um 'ouvinte de evento' ao cartão.
    // Quando o usuário clicar no cartão ('click'), a função 'viraCartao' será executada.
    cartao.addEventListener('click', viraCartao);

    // 8. Adiciona o cartão recém-criado como um 'filho' do 'container'.
    // Isso faz com que o cartão apareça na página web.
    container.appendChild(cartao);
}