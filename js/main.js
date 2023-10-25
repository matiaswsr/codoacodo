const btnComprar = document.querySelector("#comprar");

window.addEventListener("load", iniciar);
function iniciar(){
    btnComprar.addEventListener("click", redireccionar);
}

function redireccionar(){
    window.location.href = "./comprarTicket.html";
}
