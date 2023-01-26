const btns = document.querySelectorAll('.btn')
let buyBooks = [],
count = document.querySelector('.count'),
market = document.querySelector('.market'),
paket = document.querySelector('.paket'),
items_1 = document.querySelector('.items_1'),
x = document.querySelector('.x'),
p = document.querySelector('#p'),
item = document.querySelector('.item')


// display and fiu
const addDisplay=(tag,disp)=>{
  if(getComputedStyle(tag).display === 'none'){
    tag.style.display = disp
  }
  else{
    tag.style.display = disp
  }
}

// marketga qo'shiladigan formula

for(let btn of btns){
  btn.addEventListener('click', ()=>{
    let clone = btn.parentElement.cloneNode(true)
    clone.classList.add('clone')
    clone.children[1].classList.add('btnClone')
    p.innerHTML = ''
    addDisplay(count,'block')
    buyBooks.push(clone)
    count.innerHTML = buyBooks.length

  })

}

market.addEventListener('click', ()=>{

  let items_1 = document.createElement('div')
    items_1.classList.add('items_1')
    paket.appendChild(items_1)

 if(buyBooks.length > 0){
    addDisplay(paket,'flex')
    for(let book of buyBooks){
      const bookClone = book.cloneNode(true)
      const trash = document.createElement('button')
      trash.innerHTML = 'Удалить'
      trash.style.backgroundColor = 'red'
      items_1.append(bookClone)
    }
 }else{
  p.style.color = 'red'
  p.innerHTML = 'Корзино пусто!'
 }

 let btnsClone = document.querySelectorAll('.btnClone')
  for(let btnClone of btnsClone){
    btnClone.addEventListener('click', function () {



      let newGoods = buyBooks.filter(item=> `${item}` != `${btnClone.parentElement}`)
      console.log(newGoods);

    })

  }

})

x.addEventListener('click', ()=>{
  addDisplay(paket,'none')
  let items_1 = document.querySelector('.items_1')
    items_1.remove()
})