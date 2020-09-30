function animateReturn() {
  returnElem
    .querySelector('.returnTextMaxline')
    .classList.add('animReturnTextMaxline');
  const arr = document.querySelectorAll('.returnTextExplainRow');
  arr.forEach((item) => item.classList.add('animReturnTextExplainRow'));
  returnElem.querySelector('.returnDots1').classList.add('animreturnDots1');
  returnElem.querySelector('.returnDots2').classList.add('animreturnDots2');
  returnElem
    .querySelector('.returnTextWord1')
    .classList.add('animReturnTextWord1');
  returnElem
    .querySelector('.returnTextWord2')
    .classList.add('animReturnTextWord2');
  returnElem
    .querySelector('.returnTextWord3')
    .classList.add('animReturnTextWord3');
  returnElem.querySelector('.background03').classList.add('animbackground03');
  returnElem.querySelector('.returnText').classList.add('animreturnText');
  returnElem
    .querySelector('.returnTextExplain')
    .classList.add('animreturnTextExplain');
  const returnTextBg = returnElem.querySelectorAll('.textBg');
  [...returnTextBg].forEach((item) => {
    item.classList.add('animReturnTextBg');
  });
}
