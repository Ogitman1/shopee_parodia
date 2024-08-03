document.addEventListener('DOMContentLoaded', ()=> {
const botoescarrinhos = document.querySelectorAll('.add');

botoescarrinhos.forEach((botao) => {
    botao.addEventListener("click", () => {
        const produto_div = botao.closest('.seção')
        const nome = produto_div.getAttribute('nome');
        const preco = produto_div.getAttribute('preco');
        const source = produto_div.getAttribute('img')

        const produto = {nome, preco, source};
        Adicionaraocarrinho(produto)
    })
    function Adicionaraocarrinho (produto){
        const ul = document.getElementById('add-list');
        const li = document.createElement('li');
        li.innerHTML = `<img style="height: 50px; width: 50px" src='${produto.source}'>${produto.nome}, R$${produto.preco}`
        ul.style.height = '100px';
        ul.style.overflowY = 'scroll'
        ul.appendChild(li);
    }
})


})
