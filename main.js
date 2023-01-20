const btns = document.querySelectorAll('.btn')
const items = document.querySelector('.items'),
      paket = document.querySelector('.paket'),
      market = document.querySelector('.market'),
      x = document.querySelector('.close'),
      container = document.querySelector('.container'),
      count = document.querySelector('.count'),
      warning = document.querySelector('#p')


for(let elem of btns){
  elem.addEventListener('click', function () {
    elem.value = 'Udalit iz Karzino'
    elem.style.backgroundColor = 'red'
    cloneParent = elem.parentElement.cloneNode(true)
    elem.parentElement.style.display = 'none'
    paket.appendChild(cloneParent)
    count.style.display = 'block'
    count.innerHTML = paket.children.length-2
    if (paket.children.length = 0 ) {

      warning.style.display = 'block'
  }
  else{
    // paket.style.display = 'block'
    warning.style.display = 'none'

  }
  x.addEventListener('click', ()=>{

    paket.style.display = 'none'
  })
    market.addEventListener('click', ()=>{



      paket.style.display = 'block'

      elem.style.backgroundColor = 'red'

    })
    elem.style.backgroundColor = 'red'
  })
}