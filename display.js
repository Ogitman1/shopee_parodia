document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134201-23030-jt8h29co6wov9f',
            name: 'Blusa Taylor Swift',
            preco: '123,50'
        },
        {
            img: 'https://images.tcdn.com.br/img/img_prod/787274/bolsa_feminina_tiracolo_preto_dourado_beira_rio_80015_1_7361_1_1286f708b3cb1db6cc8ca34eb0a24c5a.jpg',
            name: 'Bolsa feminia tira-colo',
            preco: '50,59'
        },
        {
            img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQoTLx7zROd9d3GQwmTLyG4F8ogDg68OQWCGSBzwmsm6bbOWYSdRbUcVtTWfdJlXat0OA1hfKJmqVXV3Q08gNvkckueSLAeljlVTyc-kgUGL9ZhdkX3ns8aKeSmEfwgPHh9SuyGzjU&usqp=CAc',
            name: 'Kit 2 Séruns Principia Niacinamida + Mandélico',
            preco: '89,99'
        },
        {
            img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZS4qM5y2xkMJq0Xl6KAIp3XSH6vNr0FyeEKcap57z7qvRcxdmV1-OFBLXV4LzL2BQcYZ_l7bCtejrtQfzpiXarKqy7Uj2uPmQcIcpEP0KZN2j1AQD06bIcctX9mzKgQ_J7PRchfw&usqp=CAc',
            name: 'Relógio De Quartzo Masculino Com Pulseira 2023 Novo Moda De Aço Inoxidável',
            preco: '25,71'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134201-7r98o-lr93swwp3x8w1d',
            name: 'Blusa de frio Moletom Premium Estampado Algodão Bolso e Capuz Caveira Black',
            preco: '59,90'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-ly0x042uudfa66',
            name: 'Mochila Mala Reforçada Notebook Impermeável Escolar Trabalho Oferta',
            preco: '29,67'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/sg-11134201-7rccy-lte65oavhctj7e',
            name: 'Blusa Moletom One Piece Monkey D Luffy Nika Deus do Sol CANGURU 2030',
            preco: '49,00'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvuo1gzpsz3p1a',
            name: 'Chinelo Slide Nuvem Tradicional Queima De Estoque',
            preco: '23,90'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/cn-11134301-7r98o-lmzg8smcx6n8c6',
            name: 'Casaco de moletom listrado',
            preco: '52,04'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/sg-11134201-7rd4t-lwfvm7c1yrquca',
            name: 'Kit 5 pijamas baby dool MICRO short dool',
            preco: '49,00'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lkr21clgu6qg6b',
            name: 'Balança Digital Medidora Corporal Bioimpedância até 180kg',
            preco: '39,99'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsh741a5pulgf0',
            name: 'Monte Seu Conjunto Com Cesto Telado 60 Litros ',
            preco: '62,98'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98q-lm1rz739leejdb',
            name: 'Kit 7 Pecas Bolsa Organizadoras Para Mala Roupas Bagagem Viagem ',
            preco: '37,90'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98s-ll49whqy42t8d7',
            name: 'calça jeans feminina wide leg infantil juvenil com escritas estampada',
            preco: '39,99'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lto9hs9c9fjzdd',
            name: 'Kit 19 Peças Jogo de Utensílios Para Cozinha em Silicone Com Cabo de Madeira Completo / Antiaderente e Resistente ao Calor',
            preco: '79,99'
        },
        {
            img: 'https://down-br.img.susercontent.com/file/br-11134207-7qukw-lka6xpdypz2h47',
            name: 'Kit 10 Cuecas Box Boxer Qualidade Garantida Preço Baixo',
            preco: '40,99'
        }
    ]
    const secao = document.getElementById('display');
    secao.style.height = "auto"
    secao.style.width = "auto"
    produtos.forEach((prd,index) => {
        const div = document.createElement('div');
        div.setAttribute('name', prd.name);
        div.setAttribute('preco', prd.preco);
        div.setAttribute('img', prd.img);
        div.id = "produto";
        if(index >=4){
            div.className = "hidden";
        }
        div.style.height = "500px";
        div.style.width = "300px";
        div.style.flex = "0 0 33.3";
        div.style.margin = "10px 10px";
        div.style.overflowX = "hidden"
        div.innerHTML = `
        <img src="${prd.img}" style="height: auto; width: 100%;" />
        <h2>${prd.name}</h2>
        <p>R$${prd.preco}</p>
        <img class="cart" style="height: 50px; width: 50px; border-radius: 50%; border: solid black 2px; position: relative;top: -48%; left: 70%" src="./assets/cart.png" />
`;

        secao.appendChild(div)
    })
    let cart = JSON.parse(localStorage.getItem("display")) || []; // Carrega o carrinho existente ou inicializa como array vazio
    
    const cartElements = document.querySelectorAll('.cart'); //todas as imagens de compra de carrinho .cart

    function atualizarInfo(produto) {
        cart.push(produto); // Adiciona o novo produto ao carrinho/ array do local strorage
        localStorage.setItem("display", JSON.stringify(cart)); // Salva o carrinho atualizado no localStorage
        adicionarCarrinho(cart); // Atualiza a exibição do carrinho
    }

    cartElements.forEach((carrinho) => {
        carrinho.style.cursor = "pointer";
        carrinho.addEventListener('click', () => {
            const close = carrinho.closest('#produto');
            const name = close.getAttribute('name');
            const preco = close.getAttribute('preco');
            const img = close.getAttribute('img');
            const produto = { name, preco, img };
            atualizarInfo(produto);
        });
    });

    function adicionarCarrinho(carrinho) {
        const ul = document.getElementById('add-list');
        ul.innerHTML = ''; // Limpa o conteúdo existente
        //itera o array do localstorage
        carrinho.forEach(item => {
            if (item.hasOwnProperty('img') && item.hasOwnProperty('name') && item.hasOwnProperty('preco')) {
                const li = document.createElement('li');
                li.style.display = "flex";
                li.style.justifyContent = 'flexStart';
                li.innerHTML = `
                    <img style="height:100px;width:100px" src="${item.img}" />
                    <div style="display: flex; align-items: center; flex-direction: column">
                        <h2 style="height: auto; width: 200px;">${item.name}</h2>
                        <p>${item.preco}</p>
                    </div>
                `;
                ul.style.padding = '0 50px';
                ul.appendChild(li);
            }
        });
    }
  /*  let produto = [];
let inforecuperada = [];
const cart = document.querySelectorAll('.cart');

function atualizarInfo() {
    inforecuperada = [...produto]; // Atualiza globalmente
    console.log('Informação atualizada:', inforecuperada);
    adicionarCarrinho(inforecuperada);
    produto.shift(); // Remove o primeiro elemento após passar para adicionarCarrinho
    localStorage.setItem("display", JSON.stringify(inforecuperada))
    console.log('Informação após remoção do primeiro item:', inforecuperada);
}

cart.forEach((carrinho) => {
    carrinho.style.cursor = "pointer";
    carrinho.addEventListener('click', () => {
        const close = carrinho.closest('#produto');
        const name = close.getAttribute('name');
        const preco = close.getAttribute('preco');
        const img = close.getAttribute('img');
        produto.push({ name, preco, img });
        atualizarInfo();
    });
});

function adicionarCarrinho(inforecuperada){
    console.log("passou: ", inforecuperada);
    inforecuperada.forEach(item => {
        if (item.hasOwnProperty('img') && item.hasOwnProperty('name') && item.hasOwnProperty('preco')) {
            const ul = document.getElementById('add-list');
            const li = document.createElement('li');
            li.style.display = "flex";
            li.style.justifyContent = 'flexStart';
            li.innerHTML = `
                <img style="height:100px;width:100px" src="${item.img}" />
                <div style="display: flex; align-items: center; flex-direction: column">
                    <h2 style="height: auto; width: 200px;">${item.name}</h2>
                    <p>${item.preco}</p>
                </div>
            `;
            ul.style.padding = '0 50px';
            ul.appendChild(li);
        }
    });
}
*/
})