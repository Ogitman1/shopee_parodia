const pedido1 = {
    'name': 'Pedido1',
    'tempo': 1000
};
const pedido2 = {
    'name': 'Pedido2',
    'tempo': 2000
};
const pedido3 = {
    'name': 'Pedido3',
    'tempo': 3000
};

const cozinha = (pedido) => {
    console.log("Pedidos iniciados")
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(pedido['name'] + ' pronto')
    }, pedido['tempo'])
    })
}
Promise.all([cozinha(pedido1), cozinha(pedido2), cozinha(pedido3)]).then((results) => results.forEach(console.log))
/*
const garcon = (tarefa) => console.log(tarefa)
const cozinha = (pedido, callback) => {
    setTimeout(() => {
        callback(pedido['name'] + ' pronto')
    }, pedido['tempo'])
    
} 

cozinha(pedido1, garcon);
cozinha(pedido2, garcon);
cozinha(pedido3, garcon)*/
