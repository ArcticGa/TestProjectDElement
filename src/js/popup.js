const popup = document.getElementById('popup')
const openBtn = document.getElementById('button')
const closeBtn = document.getElementById('close')
const successBlock = document.querySelector('.popup-content__success')
const body = document.body

openBtn.addEventListener('click', openPopup)
closeBtn.addEventListener('click', closePopup)
document.addEventListener('click', closePopupBg)

function openPopup() {
  popup.classList.add('visible')
  body.classList.add('lock')
}

function closePopup() {
  popup.classList.remove('visible')
  setTimeout(() => {
    body.classList.remove('lock')
  }, 400)
}

function closePopupBg(e) {
  if (e.target === popup) {
    popup.classList.remove('visible')

    setTimeout(() => {
      successBlock.classList.remove('visible')
      body.classList.remove('lock')
    }, 400)
  }
}
