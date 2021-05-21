const modal = document.getElementById('modal');
const btnModalOn = document.getElementById('modal-on');
const btnModalOff = document.getElementById('modal-off');

const modalOn = () => modal.style.display = 'block';
const modalOff = () => modal.style.display = 'none';

btnModalOn.addEventListener('click', modalOn);
btnModalOff.addEventListener('click', modalOff);
