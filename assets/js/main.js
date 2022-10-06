
// items containers
let allItem = document.getElementById('all')
let airpodsItem = document.getElementById('airpods')
let iphoneItem = document.getElementById('iphone')
let ipadItem = document.getElementById('ipad')
let macbookItem = document.getElementById('macbook')

// cards filters
let iphoneFilter = document.getElementById('iphone-filter')
let ipadFilter = document.getElementById('ipad-filter')
let macbookFilter = document.getElementById('macbook-filter')
let airpodsFilter = document.getElementById('airpods-filter')
let allFilter = document.getElementById('all-filter')

// cards links
let linkAll = document.getElementsByClassName('link-all')
let linkIpad = document.getElementsByClassName('link-ipad')
let linkIphone = document.getElementsByClassName('link-iphone')
let linkMacbook = document.getElementsByClassName('link-macbook')
let linkAirpods = document.getElementsByClassName('link-airpods')

// navbar cart item counter
let navItemCounter = document.getElementById('btn-carrito-counter')
itemsCount = 0

// total cart
let cartTotal = document.getElementById('total-card')

// carrito
let emptyItem = document.getElementById('empty-item')
let cartContainer = document.getElementById('items-cart')
let totalCart = 0

// listen events
function startPage(){
    airpodsItem.style.display = 'none';
    ipadItem.style.display = 'none';
    iphoneItem.style.display = 'none';
    macbookItem.style.display = 'none';
    allItem.style.display = 'flex'
    console.log("startPage")
}

// functions
// aplicar filtros
function makeFilter(str) {
    console.log("inMakeFilter")
    if(str == "all"){
        airpodsItem.style.display = 'none'
        ipadItem.style.display = 'none'
        iphoneItem.style.display = 'none'
        macbookItem.style.display = 'none'
  
        allItem.style.display = 'flex'
        
        console.log('allFilterAplied')
    }else if(str == "ipad"){
        airpodsItem.style.display = 'none'
        allItem.style.display = 'none'
        iphoneItem.style.display = 'none'
        macbookItem.style.display = 'none'
  
        ipadItem.style.display = 'flex'

        console.log('ipadFilterAplied')
    }else if(str == "iphone"){
        airpodsItem.style.display = 'none'
        ipadItem.style.display = 'none'
        allItem.style.display = 'none'
        macbookItem.style.display = 'none'
  
        iphoneItem.style.display = 'flex'

        console.log('iphoneFilterAplied')
    }else if(str == "macbook"){
        airpodsItem.style.display = 'none'
        ipadItem.style.display = 'none'
        iphoneItem.style.display = 'none'
        allItem.style.display = 'none'
  
        macbookItem.style.display = 'flex'
        console.log('macbookFilterAplied')
    }else if(str == "airpods"){
        macbookItem.style.display = 'none'
        ipadItem.style.display = 'none'
        iphoneItem.style.display = 'none'
        allItem.style.display = 'none'
  
        airpodsItem.style.display = 'flex'
        console.log('airpodsFilterAplied')
    }
}
// agregar a carrito
function addToCart(str){
    // quito empty item ya que el carro no esta mas vacio
    emptyItem.style.display = 'none';
    //sumo contador
    itemsCount++
    navItemCounter.innerHTML = itemsCount

    // si es igual a iphone1 y no existe agregar este
    // si el contador es mayor a uno solo sumar contador
    cartContainer.innerHTML += '<div class="d-flex align-items-center justify-content-between p-2"><span class="fw-bold">iPhone 14 Pro Max - 1TB</span><div><span class="me-2">$ 1,599.0</span><button type="button" class="btn btn-danger" onclick="">Eliminar</button></div></div>'
    
}


// main functions






window.addEventListener('load', startPage)