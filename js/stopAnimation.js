// const getBonus = document.querySelector('.getBonus');
// const refill = document.querySelector('.refill');
// const returnElem = document.querySelector('.return');
// const forecast = document.querySelector('.forecast');
// const conditions = document.querySelector('.conditions');

function stopgetBonusAnimation() {
  getBonus.querySelector('.centerContent').classList.remove('animBonuse');
  getBonus
    .querySelector('.rightContentText')
    .classList.remove('animrightContentText');
  getBonus.querySelector('.rectangle').classList.remove('animRect');
  getBonus.querySelector('.background01').classList.remove('animBg01');
  let registTextBg = getBonus.querySelectorAll('.textBg');
  [...registTextBg].forEach((item) => {
    item.classList.remove('animRegistTextBg');
  });
  getBonus
    .querySelector('.registrationText')
    .classList.remove('animRegistrText');
  getBonus.querySelector('.forMobile').classList.remove('animforMobile');
  getBonus
    .querySelector('.centerContentDots')
    .classList.remove('animCenterContentDots');
  getBonus.querySelector('.backgroundGetBonus').classList.remove('animBgGetBonus');
  getBonus.querySelector('.rectText').classList.remove('animRectText');
  getBonus.querySelector('.rect02').classList.remove('animRect02');
}

function stopRefillAnimation() {
  refill.querySelector('.background02').classList.remove('animBg02');
  refill.querySelector('.everyRefill').classList.remove('animEveryRefill');
  refill.querySelector('.refillText').classList.remove('animRefillText');
  refill.querySelector('.centerRefill').classList.remove('animCenterRefill');
  refill.querySelector('.forMobile').classList.remove('animforMobile');
  let registTextBg = refill.querySelectorAll('.textBg');
  [...registTextBg].forEach((item) => {
    item.classList.remove('animRefillTextBg');
  });
  refill.querySelector('.backgroundRefill').classList.remove('animBgRefill');
  refill.querySelector('.fourPercent').classList.remove('animFourPercent');
  refill.querySelector('.strip').classList.remove('animStrip');
}

function stopReturnElemAnimation() {
  returnElem
    .querySelector('.returnTextMaxline')
    .classList.remove('animReturnTextMaxline');
  let arr = returnElem.querySelectorAll('.returnTextExplainRow');
  arr.forEach((item) => item.classList.remove('animReturnTextExplainRow'));
  returnElem.querySelector('.returnDots1').classList.remove('animreturnDots1');
  returnElem.querySelector('.returnDots2').classList.remove('animreturnDots2');
  returnElem
    .querySelector('.returnTextWord1')
    .classList.remove('animReturnTextWord1');
  returnElem
    .querySelector('.returnTextWord2')
    .classList.remove('animReturnTextWord2');
  returnElem
    .querySelector('.returnTextWord3')
    .classList.remove('animReturnTextWord3');
  returnElem
    .querySelector('.background03')
    .classList.remove('animbackground03');
  returnElem.querySelector('.returnText').classList.remove('animreturnText');
  returnElem
    .querySelector('.returnTextExplain')
    .classList.remove('animreturnTextExplain');
  let returnTextBg = returnElem.querySelectorAll('.textBg');
  [...returnTextBg].forEach((item) => {
    item.classList.remove('animReturnTextBg');
  });
}

function stopForecastAnimation() {
  forecast.querySelector('.background04').classList.remove('animBackground04');
  forecast
    .querySelector('.centerForcast')
    .classList.remove('animCenterForcast');
  forecast
    .querySelector('.forcastTextBottom')
    .classList.remove('animForcastTextBottom');
  forecast
    .querySelector('.forcastFirstRow')
    .classList.remove('animForcastFirstRow');
  forecast
    .querySelector('.forcastSecondRow')
    .classList.remove('animForcastSecondRow');
}
