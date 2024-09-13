document.addEventListener("DOMContentLoaded", () => {
    const myitens = document.getElementById("myitems");
    const carrinho = {
        index: JSON.parse(localStorage.getItem("index")),
        display: JSON.parse(localStorage.getItem("display")),
    }
   /* carrinho = carrinho.filter(el => el.name !== undefined && 
        el.name !== null && el.preco !== null 
        && el.src !== null && el.src !== undefined);
    */
   const carrinho1 = carrinho.index;
    for (let id in carrinho1) {
        if (carrinho1.hasOwnProperty(id)){
        const {name, preco, img } = carrinho1[id]
        console.log(`Chave: ${carrinho1[id]}, propriedades: ${name}, ${preco}, ${img}`);
        let div = document.createElement("div");
        div.innerHTML = `
        <img src="${img}" />
        <h2>"${name}"</h2>
        <p>R$ ${preco}</p>
        `
        myitens.appendChild(div);
    }
    };
    const carrinho2 = carrinho.display;
    for (let id in carrinho2) {
        if (carrinho2.hasOwnProperty(id)){
        const {name, preco, img } = carrinho2[id]
        console.log(`Chave: ${carrinho2[id]}, propriedades: ${name}, ${preco}, ${img}`);
        let div = document.createElement("div");
        div.innerHTML = `
        <img src="${img}" />
        <h2>"${name}"</h2>
        <p>R$ ${preco}</p>
        `
        myitens.appendChild(div);
    }
    };


})
