const modal = document.querySelector('#myModal');
const body = document.querySelector('.body');
const openModal = document.querySelector('.js-button');

const cancel = document.querySelector('.modal__cancel');
const subscribe = document.querySelector('.modal__subscribe');

openModal.addEventListener('click', onOpenModalClick);
// cancel.addEventListener('click', onCancelClick);
// subscribe.addEventListener('click', onSubscribeClick);

function onOpenModalClick(event) {
  if (!body.classList.contains('darkened')) {
    modal.classList.toggle('visible')
    body.classList.add('darkened')
    openModal.classList.add('add-to-btn')
  }
  event.preventDefault()
}


// function onCancelClick() {
//     modal.classList.toggle('visible');
//     body.classList.remove('darkened');
// }

// function onSubscribeClick() {
//     // Handle subscribe click here
// }

body.addEventListener('click', function (event) {
    if (!modal.contains(event.target) && event.target !== openModal) {
        modal.classList.remove('visible');
        body.classList.remove('darkened');
        openModal.classList.remove('add-to-btn')
    }
})