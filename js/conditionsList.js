let centerConditions = document.querySelector('.centerConditions');
centerConditions.addEventListener('click', showCondition);

let firstConditionText = document.querySelector('.firstConditionText');
let secondConditionText = document.querySelector('.secondConditionText');
let thirdConditionText = document.querySelector('.thirdConditionText');
let fourthConditionText = document.querySelector('.fourthConditionText');
let fifthConditionText = document.querySelector('.fifthConditionText');
let fifthArrow = document.querySelector('.fifthArrow');

function showCondition(e) {
  switch (e.target.className) {
    case 'firstCondition':
      openAndHide(firstConditionText, e.target);
      break;
    case 'secondCondition':
      openAndHide(secondConditionText, e.target);
      break;
    case 'thirdCondition':
      openAndHide(thirdConditionText, e.target);
      break;
    case 'fourthCondition':
      openAndHide(fourthConditionText, e.target);
      break;
    case 'fifthСondition':
      openAndHide(fifthConditionText, e.target);
      break;
    case 'firstArrow':
      openAndHide(firstConditionText, e.target);
      console.log('111');
      break;
    case 'secondArrow':
      openAndHide(secondConditionText, e.target);
      break;
    case 'thirdArrow':
      openAndHide(thirdConditionText, e.target);
      break;
    case 'fourthArrow':
      openAndHide(fourthConditionText, e.target);
      break;
    case 'fifthArrow':
      openAndHide(fifthConditionText, e.target);
      break;
  }
}

function openAndHide(elem, target) {
  if (!elem.open) {
    elem.classList.add('openText');
    if (target.children[0]) {
      target.children[0].setAttribute('src', './images/arrowUp.png');
    } else {
      target.setAttribute('src', './images/arrowUp.png');
    }
    elem.classList.remove('hideText');
    elem.open = true;
  } else {
    elem.classList.add('hideText');
    if (target.children[0]) {
      target.children[0].setAttribute('src', './images/arrowDown.png');
    } else {
      target.setAttribute('src', './images/arrowDown.png');
    }

    elem.classList.remove('openText');
    elem.open = false;
  }
}
