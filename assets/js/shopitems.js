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
        document.getElementById('shop-items-container').innerHTML  += `<div class="card p-2 border-0" id="${this.categoria}">
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
    addToCartItem(){
        document.getElementById('items-cart').innerHTML += `<div class="d-flex align-items-center justify-content-between p-2 gap-3 item-cart" id="${this.categoria + this.numeroItem}">
                                                             <span class="fw-bold">${this.descripcionCart}</span>
                                                             <div>
                                                               <span class="me-2">$ ${this.precio}</span>
                                                               <button type="button" class="btn btn-danger
                                                               " onclick="${this.categoria + this.numeroItem}.btnEliminar()">Eliminar</button>
                                                             </div>
                                                           </div>`
        document.getElementById(`un-item-msj${this.categoria + this.numeroItem}`).innerText = `Solo puedes agregar uno` 


        sumItemsCart += this.precio
        countItemsCart += 1
        insertTotalCart.innerHTML = sumItemsCart
        totalContainer.style.display = 'flex'
        retirosLocal.style.display = 'flex'
        conQueAbono.style.display = 'block'
        emptyItem.style.display = 'none'

        // llamo a que calcule de nuevo para actualizar valor 
        pay('usd')
        
        document.getElementById(`btn${this.categoria + this.numeroItem}`).classList.add(`disabled`)

        if(countItemsCart == 1){
            document.getElementById("currency-btn01").classList.remove(`disabled`)
            document.getElementById("currency-btn02").classList.remove(`disabled`)
        }
        
        document.getElementById('btn-carrito-counter').innerHTML = countItemsCart

        //llamo pagar para que actualice la cotizacion
        
    }
    btnEliminar(){
        document.getElementById(`${this.categoria + this.numeroItem}`).remove()
        document.getElementById(`un-item-msj${this.categoria + this.numeroItem}`).innerHTML = `<span style="visibility: hidden;">oculto</span>` 

        sumItemsCart -= this.precio
        countItemsCart -= 1
        insertTotalCart.innerHTML = sumItemsCart
        document.getElementById(`btn${this.categoria + this.numeroItem}`).classList.remove(`disabled`)
        document.getElementById('btn-carrito-counter').innerHTML = countItemsCart

        if(countItemsCart == 0){
            document.getElementById('btn-carrito-counter').innerHTML = ``
            document.getElementById("currency-btn01").classList.add(`disabled`)
            document.getElementById("currency-btn02").classList.add(`disabled`)
            pagoSena.style.display = 'none'
            precioFinal.style.display = 'none'
            totalContainer.style.display = 'none'
            retirosLocal.style.display = 'none'
            conQueAbono.style.display = 'none'
            emptyItem.style.display = 'flex'
          }else if(countItemsCart >= 1){
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
const items = [] 

items.push(macbook1 = new ShoopItems("14‑inch MacBook Pro - Space Gray", "Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine, 16GB unified memory, 512GB SSD storage" , "macbook", 1, 1999, "14‑inch MacBook Pro 16GB 512GB"))
items.push(macbook2 = new ShoopItems("14‑inch MacBook Pro - Space Gray", "Apple M1 Pro with 8-core CPU, 14-core GPU, 16-core Neural Engine 32GB unified memory 1TB SSD storage" , "macbook", 2, 2599, "14‑inch MacBook Pro 32GB 1TB"))

// itero para crear los productos
for (const ShoopItems of items){
  ShoopItems.createItem()
}


