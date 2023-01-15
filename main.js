let item = document.querySelector('.item'),
items = document.querySelector('.items')


item.addEventListener('click', ()=>{
  for(let child of items.children){
    child.addEventListener('click', ()=>{
      child.style.display = 'none'
    })
  }
})