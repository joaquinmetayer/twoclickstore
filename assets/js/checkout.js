// traigo los elementos del html
cartContainer = document.getElementById('carrito')
totalContainer = document.getElementById('total-container')
retirosLocal = document.getElementById('retiros-local')
insertTotalCart = document.getElementById('total-cart')
conQueAbono = document.getElementById('con-que')
dolaresOPesos =document.getElementById('dolares-pesos')
precioFinal = document.getElementById('precio-final')
pagoSena = document.getElementById('pago-sena')
senaContainer = document.getElementById('sena-price')
emptyItem = document.getElementById('empty-item')
precioConvertido = document.getElementById('precio-final-converted')
pagoExitoso = document.getElementById('pago-exitoso')
shopItemsContainer = document.getElementById('shop-items-container')
mostrarPrecioFinal = document.getElementById('mostrando-precio-final')

// variables
var cartPesos = 0
var compraUSD = 0
var senaPesos = 0
var cartUSD = 0

// con que queres pagar?
function pay(str){
    totalCart = document.getElementById('total-cart').innerText
    // convirtiendo a pesos
    cartConvertPesos(totalCart)
    // muestro valor de sena 
    calculoSena(totalCart)
    // imprimo valores
    if(str == "pesos"){
        precioConvertido.innerHTML = `${cartPesos} Pesos`
    }else if(str == "usd"){
        precioConvertido.innerHTML = `${cartUSD} Dólares`
    }
    // muestro precio final y el btn de pago si seleccionarin divisa
    if(str == "pesos" || str == "usd"){
        precioFinal.style.display = 'block'
        pagoSena.style.display = 'flex'
        console.log("Finaliza tu compra!")
    }
}

// funcion que cuando le de a pagar en pesos cal y me guarde en variable
function cartConvertPesos(str){
    //convierto a numero
    cartUSD = parseFloat(str)
    console.log("Total carrito: $" + cartUSD)
    // llamo a api para obtener el valor actual guardandolo en variable
    getActualUSDPrice()
    
    // lo multiplico y guardo en variable
    // cambiar el 280 por el valor de compra del dia del USD que es compraUSD
    cartPesos = 280 * cartUSD
}

// que me busque el precio actual de la api 
function getActualUSDPrice(){

    //compraUSD =
}

// funcion para sacar el 10% en pesos y que me lo ponga en el boton
function calculoSena(int){
    senaPesos = cartPesos * 0.1
    senaContainer.innerHTML = senaPesos
}
// cuando realiza el pago
function pagoRealizado(){
    pagoExitoso.style.display = 'flex'
    cartContainer.style.display = 'none'
    conQueAbono.style.display = 'none'
    pagoSena.style.display = 'none'
    dolaresOPesos.style.display = 'none'
    precioFinal.style.display = 'none'

    window.location = "#pago-exitoso"
}