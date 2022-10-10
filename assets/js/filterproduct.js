// traigo los botones y le asigo envento
let btnAirpods = document.getElementById('btn-airpods')
btnAirpods.onclick = () => (filterProducts('airpods'))

let btnIpad = document.getElementById('btn-ipad')
btnIpad.onclick = () => (filterProducts('ipad'))

let btnIphone = document.getElementById('btn-iphone')
btnIphone.onclick = () => (filterProducts('iphone'))

let btnMacbook = document.getElementById('btn-macbook')
btnMacbook.onclick = () => (filterProducts('macbook'))

let btnTodos = document.getElementById('btn-todos')
btnTodos.onclick = () => (filterProducts('todos'))


// btn filtro producto
function filterProducts(str){
    // llamo al primer item con la clase airpods
    itemsAirpods = document.getElementsByClassName('airpods')[0]
    itemsIphone = document.getElementsByClassName('iphone')[0]
    itemsIpad = document.getElementsByClassName('ipad')[0]
    itemsMacbook = document.getElementsByClassName('macbook')[0]

    // genero otro con misma clase para iterar
    allsAirpods = document.getElementsByClassName('airpods')
    allsIphone = document.getElementsByClassName('iphone')
    allsIpad = document.getElementsByClassName('ipad')
    allsMacbook = document.getElementsByClassName('macbook')
    
    // si coincide muestro y oculto
    switch(str){
        case 'airpods':
            for (const itemsMacbook of allsMacbook) {
                itemsMacbook.style.display = 'none'
            }
            for (const itemsIpad of allsIpad) {
                itemsIpad.style.display = 'none'
            }
            for (const itemsIphone of allsIphone) {
                itemsIphone.style.display = 'none'
            }
            for (const itemsAirpods of allsAirpods) {
                itemsAirpods.style.display = 'flex'
            }
            console.log('hola')
            break
        case 'iphone':
            for (const itemsMacbook of allsMacbook) {
                itemsMacbook.style.display = 'none'
            }
            for (const itemsIpad of allsIpad) {
                itemsIpad.style.display = 'none'
            }
            for (const itemsIphone of allsIphone) {
                itemsIphone.style.display = 'flex'
            }
            for (const itemsAirpods of allsAirpods) {
                itemsAirpods.style.display = 'none'
            }
            break
        case 'ipad':
            for (const itemsMacbook of allsMacbook) {
                itemsMacbook.style.display = 'none'
            }
            for (const itemsIpad of allsIpad) {
                itemsIpad.style.display = 'flex'
            }
            for (const itemsIphone of allsIphone) {
                itemsIphone.style.display = 'none'
            }
            for (const itemsAirpods of allsAirpods) {
                itemsAirpods.style.display = 'none'
            }
            break
        case 'macbook':
            for (const itemsMacbook of allsMacbook) {
                itemsMacbook.style.display = 'flex'
            }
            for (const itemsIpad of allsIpad) {
                itemsIpad.style.display = 'none'
            }
            for (const itemsIphone of allsIphone) {
                itemsIphone.style.display = 'none'
            }
            for (const itemsAirpods of allsAirpods) {
                itemsAirpods.style.display = 'none'
            }
            break
        case 'todos':
            for (const itemsMacbook of allsMacbook) {
                itemsMacbook.style.display = 'flex'
            }
            for (const itemsIpad of allsIpad) {
                itemsIpad.style.display = 'flex'
            }
            for (const itemsIphone of allsIphone) {
                itemsIphone.style.display = 'flex'
            }
            for (const itemsAirpods of allsAirpods) {
                itemsAirpods.style.display = 'flex'
            }
            break
    }
}
