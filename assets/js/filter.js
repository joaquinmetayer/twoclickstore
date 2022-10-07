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