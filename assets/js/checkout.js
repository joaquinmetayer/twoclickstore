const cartContainer = document.getElementById('carrito');
const totalContainer = document.getElementById('total-container');
const retirosLocal = document.getElementById('retiros-local');
const insertTotalCart = document.getElementById('total-cart');
const conQueAbono = document.getElementById('con-que');
const dolaresOPesos = document.getElementById('dolares-pesos');
const precioFinal = document.getElementById('precio-final')
const pagoSena = document.getElementById('pago-sena');
const senaContainer = document.getElementById('sena-price');
const emptyItem = document.getElementById('empty-item');
const precioConvertido = document.getElementById('precio-final-converted');
const pagoExitoso = document.getElementById('pago-exitoso');
const shopItemsContainer = document.getElementById('shop-items-container');
const mostrarPrecioFinal = document.getElementById('mostrando-precio-final');
const dateLux = document.getElementById('date-lux');
const currentyUsd = document.getElementById('currency-btn01');
const currentyArs = document.getElementById('currency-btn02');
const volverComprar = document.getElementById('volver-comprar');
const pagarSena = document.getElementById('pagar-sena');
const errorApi = document.getElementById('error-api');
const errorPago = document.getElementById('error-pago')
const formPago = document.getElementById('form');

currentyUsd.onclick = () => (pay('usd'));
currentyArs.onclick = () => (pay('pesos'));
volverComprar.onclick = () => (location.href='/index.html');
pagarSena.onclick = () => (pagoRealizado());

var cartPesos = 0;
var compraUSD = 0;
var senaPesos = 0;
var cartUSD = 0;

var DateTime = luxon.DateTime;
const dt = DateTime.now();
dt.toLocaleString();

function pay(str){
    totalCart = document.getElementById('total-cart').innerText;
    cartConvertPesos(totalCart);
    calculoSena(totalCart);
    if(str == "pesos"){
        precioConvertido.innerHTML = `${cartPesos} Pesos`;
    }else if(str == "usd"){
        precioConvertido.innerHTML = `${cartUSD} Dólares`;
    }
    if(str == "pesos" || str == "usd"){
        precioFinal.style.display = 'block';
        pagoSena.style.display = 'flex';
        formPago.style.display = 'flex';
        console.log("Finaliza tu compra!");
    }else{
        precioFinal.style.display = 'none';
        pagoSena.style.display = 'none';
    }
}

// funcion para sacar el 10% en pesos y que me lo ponga en el boton
function calculoSena(){
    senaPesos = Math.floor(cartPesos * 0.1);
    senaContainer.innerHTML = senaPesos;
}

async function cartConvertPesos(str){
    cartUSD = parseFloat(str);
    console.log("Total carrito: $" + cartUSD);
    try{
        const dolarPrice = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
        const dolarData = await dolarPrice.json();
        const dolarPriceBuy = parseInt(dolarData[1].casa.compra);
        cartPesos = dolarPriceBuy * cartUSD;
        dateLux.innerHTML = dt.toLocaleString() + ' a las ' + dt.toLocaleString(DateTime.TIME_SIMPLE);
        document.getElementById('cotizacion-usd').innerHTML = dolarPriceBuy;
    }catch{
        pagoSena.style.display = 'none';
        precioFinal.style.display = 'none';
        errorApi.style.display = 'block';
    }
}

// imprimo en consola cada 10 segundos contador
tiempoEnSitio = 0;
setInterval(() => {
    tiempoEnSitio++;
}, 1000);
setInterval(() => {
    console.log('Lleva ' + tiempoEnSitio + ' segundos en este sitio');
}, 10000);