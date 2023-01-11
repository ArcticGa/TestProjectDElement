const form = document.getElementById('form')
const successBlock = document.querySelector('.popup-content__success')
form.addEventListener('submit', formSend)
let formReq = document.querySelectorAll('._req')

async function formSend(e) {
  e.preventDefault()

  let error = formValidation(form)

  if (error === 0) {
    successBlock.classList.add('visible')
    formReq.forEach((input) => {
      input.value = ''
    })
  }

  // Попытка написания кода для отправки на любой URL. Подробности описаны в README.md

  // let formData = new FormData(form)
  // if (error === 0) {
  //   let response = await fetch('', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //   if (response.ok) {
  //     let result = await response.json()
  //     form.innerHTML = ''
  //     form.reset()
  //   }
  // }
}

function formValidation() {
  let error = 0

  formReq.forEach((input) => {
    formRemoveError(input)

    if (input.classList.contains('_email')) {
      if (!emailTest(input)) {
        formAddError(input)
        error++
      }
    } else if (input.value == '') {
      formAddError(input)
      error++
    }
  })

  return error
}

function formAddError(input) {
  const label = input.previousElementSibling
  label.classList.add('error-label')
  input.classList.add('error')
}

function formRemoveError(input) {
  const label = input.previousElementSibling
  label.classList.remove('error-label')
  input.classList.remove('error')
}

function emailTest(input) {
  const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu

  return EMAIL_REGEXP.test(input.value)
}
