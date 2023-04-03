const modal = document.querySelector('#myModal')
const body = document.querySelector('.body')
const openModal = document.querySelector('.js-button')

openModal.addEventListener('click', onOpenModalClick);

function onOpenModalClick(event) {
  if (!body.classList.contains('darkened')) {
    modal.classList.toggle('visible')
    body.classList.add('darkened')
    openModal.classList.add('add-to-btn')

    const cancelBtn = document.querySelector('.modal__cancel')
    cancelBtn.addEventListener('click', function () {
      modal.classList.remove('visible')
      body.classList.remove('darkened')
      openModal.classList.remove('add-to-btn')
    })

    const subscribeBtn = document.querySelector('.modal__subscribe')
    subscribeBtn.addEventListener('click', function () {
      modal.classList.remove('visible')
      body.classList.remove('darkened')
      openModal.classList.remove('add-to-btn')
    })
  }
  event.preventDefault()
}

body.addEventListener('click', function (event) {
    if (!modal.contains(event.target) && event.target !== openModal) {
        modal.classList.remove('visible')
        body.classList.remove('darkened')
        openModal.classList.remove('add-to-btn')
    }
})