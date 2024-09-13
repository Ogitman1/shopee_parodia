//script do botão 'Descoberta do Dia'
function mostrarmais(){
    const hidden = document.querySelectorAll('.hidden');
    const btn = document.getElementById("mostrar")
    hidden.forEach((hdn) => {
        hdn.style.display = "block"
    })
    btn.style.display = "none"

}