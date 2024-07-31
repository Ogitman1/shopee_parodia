const list = document.getElementById('add-list')
function createproduct(name, price){
    let li = document.createElement('li');
    li.textContent = `${name}, ${price}`;
    return li
}