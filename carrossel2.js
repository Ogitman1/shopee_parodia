document.addEventListener('DOMContentLoaded', () => {
    //cada slide do carrossel
    const slides = document.querySelectorAll('.seção');
    const proximo = document.querySelector('.carousel-button.próximo');
    const anterior = document.querySelector('.carousel-button.anterior');
    //tamanho de todos os slides
    let totalSlides = slides.length;
    //slide atual
    let currentSlide = 0;
    //lógica para atualizar o container dos produtos
    function update() {
        const section = document.querySelector('#produtos');
        section.style.transform = `translateX(${-currentSlide * 45}%)`;
    }
    //lógica botão de voltar
    anterior.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        update();
    });
    //lógica botão próximo
    proximo.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;;
        update();
    });

    update();
});
