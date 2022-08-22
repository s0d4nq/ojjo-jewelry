let descr =           document.getElementById('description')
let descr_btn =       document.getElementById('descr_btn')
let hided_desct_btn = document.getElementById('hided_descr_btn')


descr_btn.addEventListener('click', function (){
  descr.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aspernatur deleniti dolore, est exercitationem laudantium maiores modi nam numquam officiis porro provident quas quasi quo rem, repudiandae suscipit veniam! Ad, aut deleniti dolore eaque eligendi pariatur praesentium repellat tempora tempore velit. Cupiditate mollitia nobis nulla perspiciatis quis quisquam similique!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores aspernatur deleniti dolore, est exercitationem laudantium maiores modi nam numquam officiis porro provident quas quasi quo rem, repudiandae suscipit veniam! Ad, aut deleniti dolore eaque eligendi pariatur praesentium repellat tempora tempore velit. Cupiditate mollitia nobis nulla perspiciatis quis quisquam similique!'
  descr_btn.style.display = 'none'
  hided_desct_btn.style.display = 'block'
})

hided_desct_btn.addEventListener('click', function (){
  descr.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi esse fugiat magni? Accusantium at aut cumque debitis dolore dolores eaque fugiat ipsa iste itaque iusto libero maiores maxime modi odio quas quia, quisquam recusandae repellendus sit, soluta tenetur totam ut?'
  descr_btn.style.display = 'block'
  hided_desct_btn.style.display = 'none'
})
