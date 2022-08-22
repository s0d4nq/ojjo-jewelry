let send_input =    document.getElementById('send_input')
let send =          document.getElementById('send')
let send_feedback = document.getElementById('send_feedback')

send.addEventListener('click', function () {
  if (send_input.value.length === 0) {
    send_feedback.innerText = 'Вы не ввели адрес почты!'
    send_input.value = ''
  } else if (send_input.value.includes('gmail.com') === true) {
    send_input.value = ''
    send_feedback.innerText = 'Вы получите сообщение в случае появления свободной вакансии'
  } else {
    send_feedback.innerText = 'Вы ввели недействительный адрес почты'
    send_input.value = ''
  }
})
