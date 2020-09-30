function animateGetBonus() {
  getBonus.querySelector('.centerContent').classList.add('animBonuse');


  getBonus
    .querySelector('.rightContentText')
    .classList.add('animrightContentText');

    
  getBonus.querySelector('.rectangle').classList.add('animRect');

  getBonus.querySelector('.background01').classList.add('animBg01');
  let registTextBg = getBonus.querySelectorAll('.textBg');
  [...registTextBg].forEach((item) => {
    item.classList.add('animRegistTextBg');
  });
  getBonus.querySelector('.registrationText').classList.add('animRegistrText');
  getBonus.querySelector('.forMobile').classList.add('animforMobile');
  getBonus
    .querySelector('.centerContentDots')
    .classList.add('animCenterContentDots');
  getBonus.querySelector('.backgroundGetBonus').classList.add('animBgGetBonus');
  getBonus.querySelector('.rectText').classList.add('animRectText');
  getBonus.querySelector('.rect02').classList.add('animRect02');
}
