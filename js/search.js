let search_input = document.getElementById('search-query')
let search =       document.getElementById('search')

let empty_search_a = "<a href=\"#\"><img src=\"./img/index/search-icon.png\" alt=\"\" class=\"search-icon\"></a>"
let search_a =       "<a href=\"./search.html\"><img src=\"./img/index/search-icon.png\" alt=\"\" class=\"search-icon\"></a>"

search_input.addEventListener('input', function (){
  console.log(search_input.value)
  if (search_input.length === 0){
    search.innerHTML = empty_search_a
  }
  else {
    search.innerHTML = search_a
  }
})
