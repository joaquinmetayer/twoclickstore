// items containers
let airpodsItem = document.getElementsByClassName('airpods')
let iphoneItem = document.getElementsByClassName('iphone')
let ipadItem = document.getElementsByClassName('ipad')
let macbookItem = document.getElementsByClassName('macbook')

// cards filters
let iphoneFilter = document.getElementById('iphone-filter')
let ipadFilter = document.getElementById('ipad-filter')
let macbookFilter = document.getElementById('macbook-filter')
let airpodsFilter = document.getElementById('airpods-filter')
let allFilter = document.getElementById('all-filter')

// functions
// aplicar filtros
function makeFilter(str) {
    console.log("inMakeFilter")
    switch(str){
        case "all":
            console.log('allFilterAplied')
            break
        case "ipad":
            airpodsItem.style.display = 'none'
            iphoneItem.style.display = 'none'
            macbookItem.style.display = 'none'
            ipadItem.style.display = 'flex'
            console.log('ipadFilterAplied')
            break
        case "iphone":
            airpodsItem.style.display = 'none'
            ipadItem.style.display = 'none'
            macbookItem.style.display = 'none'
            iphoneItem.style.display = 'flex'
            console.log('iphoneFilterAplied')
            break
        case "macbook":
            airpodsItem.style.display = 'none'
            ipadItem.style.display = 'none'
            iphoneItem.style.display = 'none'
            macbookItem.style.display = 'flex'
            console.log('macbookFilterAplied')
            break
        case "airpods":
            macbookItem.style.display = 'none'
            ipadItem.style.display = 'none'
            iphoneItem.style.display = 'none'
            airpodsItem.style.display = 'flex'
            console.log('airpodsFilterAplied')
            break
    }
}