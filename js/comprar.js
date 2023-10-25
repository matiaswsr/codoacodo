/*
Deberá contener la funcionalidad en Javascript, al momento de presionar el botón “Resumen”, 
deberá mostrar en la sección “Total a Pagar: $”, el monto correspondiente a la cantidad de tickets a comprar
con el descuento correspondiente dependiendo la categoría seleccionada, existen 3 categorías:
Estudiante, Trainee, Junior
*/
const btnResumen = document.querySelector("#resumen");

let nombre = document.querySelector("#nombre");
let apellido = document.querySelector("#apellido");
let correo = document.querySelector("#correo");
let cantidad = document.querySelector("#cantidad");
let categoria = document.querySelector("#categoria");

let pagar = document.querySelector("#total");
const limpiar = document.querySelector("#borrar");

window.addEventListener("load", iniciar);
function iniciar(){    
    btnResumen.addEventListener("click", verResumen);
    limpiar.addEventListener("click", limpiarForm);
}

function limpiarForm(){
    document.querySelector("#formulario").reset();
}

function verResumen(){
    if(cantidad.value.trim().length < 1 || isNaN(cantidad.value)){
        alert("Ingresar una cantidad valida");
        return;
    }
    let cant = parseInt(cantidad.value);
    let cat = categoria.value;
    
    let precio = calcularPrecio(cat);

    pagar.innerHTML = `Total a Pagar: <span class='fw-bold'>$ ${precio * cant}</span>`;
    limpiarForm();
}

function calcularPrecio(categoria){
    let precio = 200;
    if(categoria.toLowerCase() === "estudiante"){
        precio = precio - (precio * 80 / 100);
    }else if(categoria.toLowerCase() === "trainee"){
        // 50%
        precio = precio / 2;
    }else if(categoria.toLowerCase() === "junior"){
        precio = precio - (precio * 15 / 100);
    }
    return precio;
}