class ShoopItems{
    constructor(nombre, descripcion, categoria, numeroItem, precio, descripcionCart){
        this.nombre = nombre,
        this.descripcion = descripcion,
        this.categoria = categoria,
        this.numeroItem = numeroItem,
        this.precio = precio,
        this.descripcionCart = descripcionCart
    }
    createItem(){
      shopItemsContainer.innerHTML  += `<div class="card p-2 border-0 ${this.categoria}">
                                            <div class="img-card-container">
                                              <img src="/assets/img/itemsShop/${this.categoria + this.numeroItem}.jpeg" class="card-img-top">
                                            </div>
                                            <div class="card-body">
                                              <h5 class="card-title">${this.nombre}</h5>
                                              <p class="card-text">${this.descripcion}</p>
                                            </div>
                                            <div>
                                                <span id="un-item-msj${this.categoria + this.numeroItem}" class="text-muted fw-lighter"><span style="visibility: hidden;">oculto</span></span>
                                                <div class="card-body d-flex justify-content-between align-items-center">
                                                  <span class="fs-3 fw-bold">$ ${this.precio}</span>
                                                  <button class="btn btn-primary fs-6" role="button" onclick="${this.categoria + this.numeroItem}.addToCartItem()" id="btn${this.categoria + this.numeroItem}">Agregar</button>
                                                </div>
                                            </div>
                                        </div>`;
    }
    addToCartItem(){
        document.getElementById('items-cart').innerHTML += `<div class="d-flex justify-content-between p-2 gap-3 item-cart" id="${this.categoria + this.numeroItem}">
                                                             <span class="fw-bold">${this.descripcionCart}</span>
                                                             <div class="responsive-cart-eliminar">
                                                               <span class="me-2">$ ${this.precio}</span>
                                                               <button type="button" class="btn btn-danger
                                                               " onclick="${this.categoria + this.numeroItem}.btnEliminar()">Eliminar</button>
                                                             </div>
                                                           </div>`;
        document.getElementById(`un-item-msj${this.categoria + this.numeroItem}`).innerText = `Solo puedes agregar uno`;
        
        sumItemsCart += this.precio;
        countItemsCart++
        document.getElementById('btn-carrito-counter').innerHTML = countItemsCart;
        insertTotalCart.innerHTML = sumItemsCart;
        totalContainer.style.display = 'flex';
        retirosLocal.style.display = 'flex';
        conQueAbono.style.display = 'block';
        emptyItem.style.display = 'none';

        pay();
        document.getElementById(`btn${this.categoria + this.numeroItem}`).classList.add(`disabled`);

        cuantoQuieroGastar = JSON.parse(localStorage.getItem("AgregagoEnCarrito"));
        cuantoQuieroGastar += this.precio;
        var cuantoQuieroGastarJSON = JSON.stringify(cuantoQuieroGastar);
        localStorage.setItem("AgregagoEnCarrito", cuantoQuieroGastarJSON);
        console.log("Valor total agregados: $" + cuantoQuieroGastar);
    }
    btnEliminar(){
        document.getElementById(`${this.categoria + this.numeroItem}`).remove();
        document.getElementById(`un-item-msj${this.categoria + this.numeroItem}`).innerHTML = `<span style="visibility: hidden;">oculto</span>` ;

        sumItemsCart -= this.precio;
        countItemsCart--
        insertTotalCart.innerHTML = sumItemsCart;
        document.getElementById(`btn${this.categoria + this.numeroItem}`).classList.remove(`disabled`);
        document.getElementById('btn-carrito-counter').innerHTML = countItemsCart;

        if(countItemsCart == 0){
            document.getElementById('btn-carrito-counter').innerHTML = ``;
            pagoSena.style.display = 'none';
            precioFinal.style.display = 'none';
            totalContainer.style.display = 'none';
            retirosLocal.style.display = 'none';
            conQueAbono.style.display = 'none';
            formPago.style.display = 'none'
            emptyItem.style.display = 'flex';
          }else if(countItemsCart >= 1){
            pagoSena.style.display = 'flex';
            precioFinal.style.display = 'block';
            totalContainer.style.display = 'flex';
            retirosLocal.style.display = 'block';
            conQueAbono.style.display = 'block';
            emptyItem.style.display = 'none';
            pay();
          }
        }
}

let sumItemsCart = 0;
let countItemsCart = 0;
let cuantoQuieroGastar = 0;