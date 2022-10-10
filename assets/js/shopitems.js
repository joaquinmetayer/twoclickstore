// clase para los items del chop
class ShoopItems{
    constructor(nombre, descripcion, categoria, numeroItem, precio, descripcionCart){
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.categoria = categoria,
        this.numeroItem = numeroItem,
        this.precio = precio,
        this.descripcionCart = descripcionCart
    }
    // muestro el item en shop container
    createItem(){
      shopItemsContainer.innerHTML  += `<div class="card p-2 border-0 ${this.categoria}">
                                            <div class="img-card-container">
                                              <img src="/assets/img/itemsShop/${this.categoria + this.numeroItem}.jpeg" class="card-img-top">
                                            </div>
                                            <div class="card-body">
                                              <h5 class="card-title">${this.nombre}</h5>
                                              <p class="card-text">${this.descripcion}</p>
                                            </div>
                                            <span id="un-item-msj${this.categoria + this.numeroItem}" class="text-muted fw-lighter"><span style="visibility: hidden;">oculto</span></span>
                                            <div class="card-body d-flex justify-content-between align-items-center">
                                              <span class="fs-3 fw-bold">$ ${this.precio}</span>
                                              <button class="btn btn-primary fs-6" role="button" onclick="${this.categoria + this.numeroItem}.addToCartItem()" id="btn${this.categoria + this.numeroItem}">Agregar</button>
                                            </div>
                                        </div>`
    }
    // agrego item al cart
    addToCartItem(){
        document.getElementById('items-cart').innerHTML += `<div class="d-flex justify-content-between p-2 gap-3 item-cart" id="${this.categoria + this.numeroItem}">
                                                             <span class="fw-bold">${this.descripcionCart}</span>
                                                             <div class="responsive-cart-eliminar">
                                                               <span class="me-2">$ ${this.precio}</span>
                                                               <button type="button" class="btn btn-danger
                                                               " onclick="${this.categoria + this.numeroItem}.btnEliminar()">Eliminar</button>
                                                             </div>
                                                           </div>`
        document.getElementById(`un-item-msj${this.categoria + this.numeroItem}`).innerText = `Solo puedes agregar uno` 
        
        // sumo el valor total del carrito
        sumItemsCart += this.precio
        // sumo contador items e imprimo
        countItemsCart += 1
        document.getElementById('btn-carrito-counter').innerHTML = countItemsCart
        // inserto total y muestro lo que sigue
        insertTotalCart.innerHTML = sumItemsCart
        totalContainer.style.display = 'flex'
        retirosLocal.style.display = 'flex'
        conQueAbono.style.display = 'block'
        emptyItem.style.display = 'none'

        // llamo a que calcule de nuevo para actualizar valor 
        pay('usd')
        
        // desabilito boton cuando le dan a agregar
        document.getElementById(`btn${this.categoria + this.numeroItem}`).classList.add(`disabled`)

        // habilito los botones para pagar
        if(countItemsCart == 1){
            document.getElementById("currency-btn01").classList.remove(`disabled`)
            document.getElementById("currency-btn02").classList.remove(`disabled`)
        }

        // con local storage que guarde mi carrito hasta que no le den al volver a comprar que se resetea


    }
    // elimino items del carrito
    btnEliminar(){
        document.getElementById(`${this.categoria + this.numeroItem}`).remove()
        document.getElementById(`un-item-msj${this.categoria + this.numeroItem}`).innerHTML = `<span style="visibility: hidden;">oculto</span>` 

        sumItemsCart -= this.precio
        countItemsCart -= 1
        insertTotalCart.innerHTML = sumItemsCart
        document.getElementById(`btn${this.categoria + this.numeroItem}`).classList.remove(`disabled`)
        document.getElementById('btn-carrito-counter').innerHTML = countItemsCart

        // si no hay nada en el carrito oculto 
        if(countItemsCart == 0){
            document.getElementById('btn-carrito-counter').innerHTML = ``
            pagoSena.style.display = 'none'
            precioFinal.style.display = 'none'
            totalContainer.style.display = 'none'
            retirosLocal.style.display = 'none'
            conQueAbono.style.display = 'none'
            emptyItem.style.display = 'flex'
          }else if(countItemsCart >= 1){ // si hay mas de uno muestro
            pagoSena.style.display = 'flex'
            precioFinal.style.display = 'block'
            totalContainer.style.display = 'flex'
            retirosLocal.style.display = 'block'
            conQueAbono.style.display = 'block'
            emptyItem.style.display = 'none'
            pay('usd')
          }
        }     
}

var sumItemsCart = 0
var countItemsCart = 0



