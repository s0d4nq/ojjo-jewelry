let next_btn =    document.getElementById('next-btn')
let email_input = document.getElementById('email_input')
let error_p =     document.getElementById('error')

let forgot_password =   document.getElementById('forgot_password')

// let email_input_value = document.getElementById('email_input').value
let auth_content = document.getElementById('auth-content')
// let forgot_email = document.getElementById('forgot-email')
let pass_auth_content = '<div class="window-logo">\n' +
  '              <a href="./index.html"><img src="./img/registration/logo.png" alt="" /></a>\n' +
  '            </div>\n' +
  '            <h2>Подтверждение личности</h2>\n' +
  '            <div class="input-box">\n' +
  '              <input\n' +
  '                type="password"\n' +
  '                class="email-input"\n' +
  '                id="password_input"\n' +
  '                placeholder="Введите ваш пароль"\n' +
  '              />\n' +
  '            </div>\n' +
  '            <p class="error" id="error">Вы не ввели пароль</p>\n' +
  '\n' +
  '            <div class="buttons">\n' +
  '              <p class="forgot-password" id="forgot_password" style="display: block; margin: 0; align-self: center; font-size: 15px;">\n' +
  '                <a href="#" style="text-decoration: none; color: blue;">Забыли пароль?</a>\n' +
  '              </p>\n' +
  '              <a href="#" class="a-next">\n' +
  '                <button class="next" id="pass-next-btn">Далее</button>\n' +
  '              </a>\n' +
  '            </div>'



next_btn.addEventListener('click', function () {
  console.log(email_input.value)
  if (email_input.value.length !== 0) {
    if (email_input.value.includes('@gmail.com') === true || email_input.value.includes('admin') === true) {
      auth_content.innerHTML = pass_auth_content
      let password_input =    document.getElementById('password_input')
      let password_next_btn = document.getElementById('pass-next-btn')
      password_next_btn.addEventListener('click', function () {
        console.log(password_input.value)
        if (password_input.value.includes('admin') === true) {
          window.location.href = './user.html'
        } else if (password_input.value.length === 0){
          error_p.style.display = 'block'
        }
      })
    }
  } else {
    error_p.style.display = 'block'
    error_p.innerText = 'Вы не ввели адрес почты'
  }

})



