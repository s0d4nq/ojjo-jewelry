let cart_btn =     document.getElementById('cart')
let cart_content = document.getElementById('cart-content')
let cart_menu =    document.getElementById('cart-menu')

let close_btn = document.getElementById('close')

let cart =        document.getElementById('added_cart')
let add_to_cart = document.getElementsByClassName('add-to-cart')

let buttons =      document.getElementsByClassName('product-buttons')

let cart_counter = document.getElementById('cart-counter')
let cart_counter_num = 0

let cost = document.getElementById('full-cost')
let full_cost = 0

let recomendated_product = document.getElementsByClassName('recomendated-product')
let recomended_products =   document.getElementsByClassName('recomended-products')

cart_btn.addEventListener('click', function () {
  console.log(cart_btn)
  cart_content.style.visibility = 'visible'
  cart_menu.style.visibility =    'visible'
})

close_btn.addEventListener('click', function () {
  cart_content.style.visibility = 'hidden'
  cart_menu.style.visibility =    'hidden'
})

console.log(add_to_cart)

add_to_cart[0].addEventListener('click', function () {

  buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
    '                <button class="product-cart add-to-cart">Успешно добавлено</button>'
  cart_counter_num += 1
  cart_counter.innerText = cart_counter_num
  if (cart_counter_num === 1) {
    full_cost += 175000
    cost.innerText = full_cost
  cart.innerHTML = '<div class="added_products">\n' +
    '              <div class="added_product">\n' +
    '                <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
    '                <div class="added_product_content">\n' +
    '                   <h2>Подвеска</h2>\n' +
    '                   <p>Dolce & Gabanna</p>\n' +
    '                   <p>175 000 ₽</p>\n' +
    '                </div>\n' +
    '                <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
    '                </div>\n' +
    '               </div>\n' +
    '            <button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 2) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_costcart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 3) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 4) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }

  })

add_to_cart[1].addEventListener('click', function () {
  recomendated_product[0].innerHTML = '<h2>Успешно добавлено</h2>'
  cart_counter_num += 1
  cart_counter.innerText = cart_counter_num
  if (cart_counter_num === 1) {
    full_cost += 175000
    cost.innerText = full_cost
  cart.innerHTML = '<div class="added_products">\n' +
    '              <div class="added_product">\n' +
    '                <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
    '                <div class="added_product_content">\n' +
    '                   <h2>Подвеска</h2>\n' +
    '                   <p>Dolce & Gabanna</p>\n' +
    '                   <p>175 000 ₽</p>\n' +
    '                </div>\n' +
    '                <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
    '                </div>\n' +
    '               </div>\n' +
    '            <button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 2) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_costcart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 3) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 4) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
})

add_to_cart[2].addEventListener('click', function () {
  recomendated_product[1].innerHTML = '<h2>Успешно добавлено</h2>'
  cart_counter_num += 1
  cart_counter.innerText = cart_counter_num
  if (cart_counter_num === 1) {
    full_cost += 175000
    cost.innerText = full_cost
  cart.innerHTML = '<div class="added_products">\n' +
    '              <div class="added_product">\n' +
    '                <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
    '                <div class="added_product_content">\n' +
    '                   <h2>Подвеска</h2>\n' +
    '                   <p>Dolce & Gabanna</p>\n' +
    '                   <p>175 000 ₽</p>\n' +
    '                </div>\n' +
    '                <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
    '                </div>\n' +
    '               </div>\n' +
    '            <button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 2) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_costcart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 3) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 4) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
})

add_to_cart[3].addEventListener('click', function () {
  recomendated_product[2].innerHTML = '<h2>Успешно добавлено</h2>'
  cart_counter_num += 1
  cart_counter.innerText = cart_counter_num
  if (cart_counter_num === 1) {
    full_cost += 175000
    cost.innerText = full_cost
  cart.innerHTML = '<div class="added_products">\n' +
    '              <div class="added_product">\n' +
    '                <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
    '                <div class="added_product_content">\n' +
    '                   <h2>Подвеска</h2>\n' +
    '                   <p>Dolce & Gabanna</p>\n' +
    '                   <p>175 000 ₽</p>\n' +
    '                </div>\n' +
    '                <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
    '                </div>\n' +
    '               </div>\n' +
    '            <button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 2) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_costcart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 3) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
  else if (cart_counter_num === 4) {
    full_cost += 175000
    cost.innerText = full_cost
    cart.innerHTML = '<div class="added_products">\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '  <div class="added_product">\n' +
      '    <img src="./img/product/small-img.png" alt="" class="added_product_img">\n' +
      '    <div class="added_product_content">\n' +
      '      <h2>Подвеска</h2>\n' +
      '      <p>Dolce & Gabanna</p>\n' +
      '      <p>175 000 ₽</p>\n' +
      '    </div>\n' +
      '    <button id="minus-cart"><img src="./img/product/minus-icon.png" alt=""></button>\n' +
      '  </div>\n' +
      '</div>\n' +
      '\n' +
      '<button class="confirm_cart">Заказать</button>'
    let confirm_btn = document.getElementsByClassName('confirm_cart')
    confirm_btn[0].addEventListener('click', function () {
      cart.innerHTML = '<p>Ваша корзина пуста</p>'
      full_cost = 0
      cost.innerText = full_cost
      cart_counter_num = 0
      cart_counter.innerText = cart_counter_num
      buttons[0].innerHTML = '<button class="product-buy">Купить</button>\n' +
        '                <button class="product-cart add-to-cart">Добавить в корзину</button>'
      recomended_products[0].innerHTML = '<div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '          <div class="recomendated-product">\n' +
        '            <img src="./img/product/product-img.png" alt="">\n' +
        '            <div class="recomendated-product-content">\n' +
        '              <p>Подвеска</p>\n' +
        '              <h2>Dolce & Gabanna</h2>\n' +
        '              <div class="price-box">\n' +
        '                <p class="price">175 000 ₽</p>\n' +
        '                <button class="add-to-cart">Добавить в корзину</button>\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>'
      return 0
    })
  }
})

