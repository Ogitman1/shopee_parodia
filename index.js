/*Lógica para por os produtos na section#produtos */
document.addEventListener('DOMContentLoaded', () => {
    //Objeto dos produtos
const produtos_variados = [
    {
        name: 'Calça Jogguer masculina',
        src: 'data:image/jpeg;base64,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',
        preco: 99.32
    },
    {
        name: 'Moletom azul e branco',
        src: 'data:image/jpeg;base64,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',
        preco: 139.32
    },
    {
        name: 'Calça de moletom Masculino',
        src: 'data:image/jpeg;base64,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',
        preco: 101.32
    },
    {
        name: 'Calça Cargo',
        src: 'data:image/jpeg;base64,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',
        preco: 118.32
    },
    {
        name: 'Blazer feminino várias cores',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 68.32
    },
    {
        name: 'Blazer feminino várias cores',
        src: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-luqcu0e6ulb9a4',
        preco: 68.32
    },
    {
        name: 'Blazer feminino várias cores',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 112.92
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
    {
        name: 'Crocs rosa feminino',
        src: 'https://down-br.img.susercontent.com/file/br-50009109-ca304d3886d073f5e75d9b8682e03e31',
        preco: 22.12
    },
]
    //Pega o id da seção 'produtos'
    const produtos = document.getElementById("produtos");
    //Percorre o array de objetos para construir a interface
    produtos_variados.forEach(pred => {
        const div = document.createElement('div');
        div.id = `seção`
        div.setAttribute('preco', pred.preco)
        div.setAttribute('name', pred.name)
        div.setAttribute('img', pred.src)
        div.style.margin = "10px 10px"
        div.innerHTML = `
        <img src="${pred.src}" />
        <h2 style="font-syze: 10px">${pred.name}</h2>
        <p>R$${pred.preco}</p>
        <button class="add" style="cursor: pointer; background-color: #00ff00; border-color: transparent; border-radius: 8px; padding: '10px 3px' "> Adicionar ao carrinho </button>
        `;
    produtos.appendChild(div)
    });
    /* imagens do carrossel */
    const carousel_slide = document.querySelectorAll('.carousel-slide');
    //botão de próximo
    const buttonNext = document.querySelector('.carousel-button.next');
    //botão de anterior
    const buttonPrev = document.querySelector('.carousel-button.prev');
    //tamanho total de todos os slides(imagens) de carousel_slide
    let totalSlides= carousel_slide.length;
    //slide atual
    let currentSlide = 0;

    //função de atualização que muda os slides
    function updateCarousel (){
        //pega a classe do container dos carroséis
        const carousel_container = document.querySelector('.carousel-container');
        //ajusta a propriedade de transform dele para -currentSlide * 100%
        carousel_container.style.transform = `translateX(${-currentSlide * 100}%)`
    }
    buttonNext.addEventListener('click', passar)
    buttonPrev.addEventListener('click', voltar)
    //função para passar para o próximo carrossel
    function passar (){
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel()
    }
    //função para voltar o carrossel
    function voltar (){
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel()
    }
    //setInterval para passar os carrosséis para o próximo slide
    setInterval(() => {
       passar()
    },[3000])
})
