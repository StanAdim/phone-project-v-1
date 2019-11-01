// function showItemName() {
//
//     document.querySelector('.item-name-over').classList.toggle('show');
// }
function showFamily() {
  document.querySelector('.families-menu').classList.toggle('show');
  document.querySelector('.accessories-menu').classList.remove('show');
  document.querySelector('.contacts-menu').classList.remove('show');
}

function showAccessory() {
  document.querySelector('.families-menu').classList.remove('show');
  document.querySelector('.accessories-menu').classList.toggle('show');
  document.querySelector('.contacts-menu').classList.remove('show');
}

function showContact() {
  document.querySelector('.families-menu').classList.remove('show');
  document.querySelector('.contacts-menu').classList.toggle('show');
  document.querySelector('.accessories-menu').classList.remove('show');
}
