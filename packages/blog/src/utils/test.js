const el = document.querySelector('.child')
const el2 = document.querySelector('.child2')

function addRemoveClick() {
  if (el.classList.contains('active')) {
    el.classList.remove('active')
  } else {
    el.classList.add('active')
  }
  el.textContent = el.classList.contains('active') ? 'Active' : 'Inactive'
}
el.onclick = addRemoveClick

el2.addEventListener('click', () => {
  el2.classList.toggle('active')
  el2.textContent = el2.classList.contains('active') ? 'Active' : 'Inactive'
})
