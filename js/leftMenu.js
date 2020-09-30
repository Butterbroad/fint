// let bonuses = document.querySelector('.bonuses');

// bonuses.addEventListener('click', openMenu);
// getBonus.addEventListener('click', openMenu);
// refill.addEventListener('click', openMenu);
// returnElem.addEventListener('click', openMenu);
// forecast.addEventListener('click', openMenu);
// conditions.addEventListener('click', openMenu);

function openMenu(e) {
  if (e.target.className == 'openMenu') {
    let leftContent = e.currentTarget.querySelector('.leftContent');
    leftContent.classList.remove('closeLeftContent');
    leftContent.classList.add('openLeftContent');
  }
  if (e.target.className == 'closeMenu') {
    let leftContent = e.currentTarget.querySelector('.leftContent');
    leftContent.classList.remove('openLeftContent');
    leftContent.classList.add('closeLeftContent');
  }
}
