// navbar cart item counter
let navItemCounter = document.getElementById('btn-carrito-counter')
itemsCount = 0

// total cart
let cartTotal = document.getElementById('total-card')

// carrito
let emptyItem = document.getElementById('empty-item')
let cartContainer = document.getElementById('items-cart')
let totalCart = 0

// agregar a carrito
function addToCart(str){
    // quito empty item ya que el carro no esta mas vacio
    emptyItem.style.display = 'none';
    //sumo contador
    itemsCount++
    navItemCounter.innerHTML = itemsCount

    // si es igual a iphone1 y no existe agregar este
    // si el contador es mayor a uno solo sumar contador
    //cartContainer.innerHTML += '<div class="d-flex align-items-center justify-content-between p-2"><span class="fw-bold">iPhone 14 Pro Max - 1TB</span><div><span class="me-2">$ 1,599.0</span><button type="button" class="btn btn-danger" onclick="">Eliminar</button></div></div>'
    
}