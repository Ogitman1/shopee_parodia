document.addEventListener('DOMContentLoaded', ()=> {
//botões de adicionar ao carrinho criados dinamicamente com JS
const botoescarrinhos = document.querySelectorAll('.add');
// for each dos botões, document.querySelectorAll('.add')
let produto = [];
botoescarrinhos.forEach((botao) => {
    botao.addEventListener("click", () => {//adicionar EvenListener de click para cada botão
        const produto_div = botao.closest('#seção')
        const name = produto_div.getAttribute('name');
        const preco = produto_div.getAttribute('preco');
        const img = produto_div.getAttribute('img')

        
        produto.push({name, preco, img});
        //converte um objeto JS para JSON do segundo carrossel (index.js), arquivo do index.js
        localStorage.setItem("index", JSON.stringify(produto));
        Adicionaraocarrinho(produto)
    })
    function Adicionaraocarrinho (produto){
        alert('adicionado com sucesso!')
        produto.forEach((produto) => {
            const ul = document.getElementById('add-list');// ul que armazenará as compras do carrinho
        const li = document.createElement('li'); //cria elemento de li
        li.style.display = "flex";
        li.style.justifyContent = "flexStart";
        li.innerHTML = `<img style="height:100px;width:100px" src="${produto.img}" />
            <div style="display: 'flex'; align-items: 'center'; flex-direction: 'column'">
                <h2 style=" font-syze: 10px;height: auto; width: auto">${produto.name}</h2>
                <p>${produto.preco}</p>
            </div>`
        ul.style.height = '100px'; //define a altura da ul
        ul.style.overflowY = 'scroll'//define o overflowY da ul como scroll
        ul.appendChild(li); // adiciona a li para cada vez que o forEach for executado

        })
        
    }
})


})
