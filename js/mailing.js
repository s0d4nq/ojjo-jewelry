let send =       document.getElementById('send')
let send_input = document.getElementById('send_input')
let sender =     document.getElementById('sender')

const mailing_empty_a = "<a href=\"#\"><button id=\"sender\">Отправить</button></a>"
const mailing_a =       "<a href=\"./mailing.html\"><button id=\"sender\">Отправить</button></a>"

send_input.addEventListener('input', function () {
  console.log(send_input.value)
  if (send_input.length == 0) {
    send.innerHTML = mailing_empty_a
  } else if (send_input.value.includes('gmail.com') === true) {
    send.innerHTML = mailing_a
  }
})
