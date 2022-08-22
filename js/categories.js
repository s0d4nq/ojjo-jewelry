let category_first =  document.getElementById('li_category_first')
let category_second = document.getElementById('li_category_second')
let category_third =  document.getElementById('li_category_third')
let category_fourth = document.getElementById('li_category_fourth')
let category_fifth =  document.getElementById('li_category_fifth')
let category_sixth =  document.getElementById('li_category_sixth')

let main_catalog = document.getElementById('main-catalog')

category_first.addEventListener('click', function () {
  category_first.style = "background: black; color: white; transition: 0.4s all;"
  category_second.style = "background: white; color: black"
  category_third.style = "background: white; color: black"
  category_fourth.style = "background: white; color: black"
  category_fifth.style = "background: white; color: black"
  category_sixth.style = "background: white; color: black"

  main_catalog.innerHTML = "<div class=\"catalog catalog-rings\"><p>Кольца</p></div>\n" +
    "            <div class=\"catalog catalog-earrings\"><p>Серьги</p></div>\n" +
    "            <div class=\"catalog catalog-pendants\"><p>Подвески</p></div>\n" +
    "            <div class=\"catalog catalog-cufflinks\"><p>Запонки</p></div>\n" +
    "            <div class=\"catalog catalog-bracelets\"><p>Браслеты</p></div>\n" +
    "            <div class=\"catalog catalog-clocks\"><p>Часы</p></div>"
})


category_second.addEventListener('click', function () {
  category_first.style = "background: white; color: black"
  category_second.style = "background: black; color: white; transition: 0.4s all;"
  category_third.style = "background: white; color: black"
  category_fourth.style = "background: white; color: black"
  category_fifth.style = "background: white; color: black"
  category_sixth.style = "background: white; color: black"

  main_catalog.innerHTML = "<div class=\"catalog catalog-clocks\"><p>Часы</p></div>"

})


category_third.addEventListener('click', function () {
  category_first.style = "background: white; color: black"
  category_second.style = "background: white; color: black"
  category_third.style = "background: black; color: white; transition: 0.4s all;"
  category_fourth.style = "background: white; color: black"
  category_fifth.style = "background: white; color: black"
  category_sixth.style = "background: white; color: black"

  main_catalog.innerHTML = "<div class=\"catalog catalog-rings\"><p>Кольца</p></div> <div class=\"catalog catalog-earrings\"><p>Серьги</p></div> <div class=\"catalog\"></div>"
})


category_fourth.addEventListener('click', function () {
  category_first.style = "background: white; color: black"
  category_second.style = "background: white; color: black"
  category_third.style = "background: white; color: black"
  category_fourth.style = "background: black; color: white; transition: 0.4s all;"
  category_fifth.style = "background: white; color: black"
  category_sixth.style = "background: white; color: black"

  main_catalog.innerHTML = "<div class=\"catalog catalog-pendants\"><p>Подвески</p></div>"
})


category_fifth.addEventListener('click', function () {
  category_first.style = "background: white; color: black"
  category_second.style = "background: white; color: black"
  category_third.style = "background: white; color: black"
  category_fourth.style = "background: white; color: black"
  category_fifth.style = "background: black; color: white; transition: 0.4s all;"
  category_sixth.style = "background: white; color: black"

  main_catalog.innerHTML = "<div class=\"catalog catalog-bracelets\"><p>Браслеты</p></div>"
})


category_sixth.addEventListener('click', function () {
  category_first.style = "background: white; color: black"
  category_second.style = "background: white; color: black"
  category_third.style = "background: white; color: black"
  category_fourth.style = "background: white; color: black"
  category_fifth.style = "background: white; color: black"
  category_sixth.style = "background: black; color: white; transition: 0.4s all;"

  main_catalog.innerHTML = "<div class=\"catalog catalog-cufflinks\"><p>Запонки</p></div>"
})

