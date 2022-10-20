let btnAirpods = document.getElementById('btn-airpods');
let btnIpad = document.getElementById('btn-ipad');
let btnIphone = document.getElementById('btn-iphone');
let btnMacbook = document.getElementById('btn-macbook');
let btnTodos = document.getElementById('btn-todos');

btnAirpods.onclick = () => (filterProducts('airpods'));
btnIpad.onclick = () => (filterProducts('ipad'));
btnIphone.onclick = () => (filterProducts('iphone'));
btnMacbook.onclick = () => (filterProducts('macbook'));
btnTodos.onclick = () => (filterProducts('todos'));

function filterProducts(str){
    // llamo al primer item con la clase
    let itemsAirpods = document.getElementsByClassName('airpods')[0];
    let itemsIphone = document.getElementsByClassName('iphone')[0];
    let itemsIpad = document.getElementsByClassName('ipad')[0];
    let itemsMacbook = document.getElementsByClassName('macbook')[0];
    // genero otro con misma clase para iterar
    let allsAirpods = document.getElementsByClassName('airpods');
    let allsIphone = document.getElementsByClassName('iphone');
    let allsIpad = document.getElementsByClassName('ipad');
    let allsMacbook = document.getElementsByClassName('macbook');

    switch(str){
        case 'airpods':
            for (const itemsMacbook of allsMacbook){itemsMacbook.style.display = 'none'};
            for (const itemsIpad of allsIpad){itemsIpad.style.display = 'none'};
            for (const itemsIphone of allsIphone){itemsIphone.style.display = 'none'};
            for (const itemsAirpods of allsAirpods){itemsAirpods.style.display = 'flex'};
            btnAirpods.classList.add('underline');
            btnIphone.classList.remove('underline');
            btnIpad.classList.remove('underline');
            btnMacbook.classList.remove('underline');
            btnTodos.classList.remove('underline');
            break;
        case 'iphone':
            for (const itemsMacbook of allsMacbook){itemsMacbook.style.display = 'none'};
            for (const itemsIpad of allsIpad){itemsIpad.style.display = 'none'};
            for (const itemsIphone of allsIphone){itemsIphone.style.display = 'flex'};
            for (const itemsAirpods of allsAirpods){itemsAirpods.style.display = 'none'};
            btnIphone.classList.add('underline');
            btnAirpods.classList.remove('underline');
            btnIpad.classList.remove('underline');
            btnMacbook.classList.remove('underline');
            btnTodos.classList.remove('underline');
            break;
        case 'ipad':
            for (const itemsMacbook of allsMacbook){itemsMacbook.style.display = 'none'};
            for (const itemsIpad of allsIpad){itemsIpad.style.display = 'flex'};
            for (const itemsIphone of allsIphone){itemsIphone.style.display = 'none'};
            for (const itemsAirpods of allsAirpods){itemsAirpods.style.display = 'none'};
            btnIpad.classList.add('underline');
            btnIphone.classList.remove('underline');
            btnAirpods.classList.remove('underline');
            btnMacbook.classList.remove('underline');
            btnTodos.classList.remove('underline');
            break;
        case 'macbook':
            for (const itemsMacbook of allsMacbook){itemsMacbook.style.display = 'flex'};
            for (const itemsIpad of allsIpad){itemsIpad.style.display = 'none'};
            for (const itemsIphone of allsIphone){itemsIphone.style.display = 'none'};
            for (const itemsAirpods of allsAirpods){itemsAirpods.style.display = 'none'};
            btnMacbook.classList.add('underline');
            btnIphone.classList.remove('underline');
            btnIpad.classList.remove('underline');
            btnAirpods.classList.remove('underline');
            btnTodos.classList.remove('underline');
            break;
        case 'todos':
            for (const itemsMacbook of allsMacbook){itemsMacbook.style.display = 'flex'};
            for (const itemsIpad of allsIpad){itemsIpad.style.display = 'flex'};
            for (const itemsIphone of allsIphone){itemsIphone.style.display = 'flex'};
            for (const itemsAirpods of allsAirpods){itemsAirpods.style.display = 'flex'};
            btnTodos.classList.add('underline');
            btnIphone.classList.remove('underline');
            btnIpad.classList.remove('underline');
            btnMacbook.classList.remove('underline');
            btnAirpods.classList.remove('underline');
            break;
    }
}
