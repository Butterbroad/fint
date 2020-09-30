// function animateBonuses() {
  
  let counter = 0;

function animateBonuses(e) {
    const delta = e.deltaY || e.detail || e.wheelDelta;
    const leftText = bonuses.querySelectorAll(".leftText");

    switch (counter) {
      case 0:
        const mainText = document.querySelector(".mainContent");
        if (delta >= 0) {
          mainText.classList.add("animMainContent");
          counter += 1;
        } else {
          mainText.classList.remove("animMainContent");
        }
        e.preventDefault();
        break;

      case 1:
        const firstRow = document.querySelector(".firstRow");
        if (delta > 0) {
          firstRow.classList.add("animFirstRow");
          counter += 1;
        } else {
          firstRow.classList.remove("animFirstRow");
          counter -= 1;
        }
        e.preventDefault();
        break;

      case 2:
        if (delta > 0) {
          for (let i = 1; i < 6; i++) {
            bonuses
              .querySelector(`.letter${i}`)
              .classList.add("animLeftLetter");
          }
          counter += 1;
        } else {
          for (let i = 1; i < 6; i++) {
            bonuses
              .querySelector(`.letter${i}`)
              .classList.remove("animLeftLetter");
          }
          counter -= 1;
        }
        e.preventDefault();
        break;

      case 3:
        if (delta > 0) {
          for (let i = 1; i < 6; i++) {
            bonuses
              .querySelector(`.letter-${i}`)
              .classList.add("animRightLetter");
          }
          counter += 1;
        } else {
          for (let i = 1; i < 6; i++) {
            bonuses
              .querySelector(`.letter-${i}`)
              .classList.remove("animRightLetter");
          }
          counter -= 1;
        }
        e.preventDefault();
        break;

      case 4:
        const line = document.querySelector(".leftContentLine");

        if (delta > 0) {
          line.classList.add("animLine");
          counter += 1;
        } else {
          line.classList.remove("animLine");
          counter -= 1;
        }
        e.preventDefault();
        break;

      case 5:
        if (delta > 0) {
          counter += 1;
        } else {
          [...leftText].forEach((item, index) => {
            item.classList.remove(`animLeftText${index + 1}`);
          });

          counter -= 1;
        }
        e.preventDefault();
        break;

      case 6:
        if (delta > 0) {
          counter += 1;
        } else {
          [...leftText].forEach((item, index) => {
            item.classList.remove(`animLeftText${index + 1}`);
          });

          counter -= 1;
        }
        e.preventDefault();
        break;
    }
  }
// }

let counter2 = 0;

// let endAnimation = false;

// const bg = getBonus.querySelector(".backgroundGetBonus");
// bg.addEventListener("animationend", () => {
//   endAnimation = true;
// });

// let rectAnim = false;

function start2(e) {
  const bg = getBonus.querySelector(".backgroundGetBonus");
  const rightContText = getBonus.querySelector(".rightContentText");
  const centerContent = getBonus.querySelector(".centerContent");
  const rectangle = getBonus.querySelector(".rectangle");
  const registTextBg = getBonus.querySelectorAll(".textBg");
  const delta = e.deltaY || e.detail || e.wheelDelta;

  // console.log(counter2);

  if (bg.classList[1] && bg.classList[1] !== "animBgGetBonus6") {
    bg.classList.remove(bg.classList[1]);
  }

  if (rectangle.classList[1] && rectangle.classList[1] !== "animRect4") {
    rectangle.classList.remove(rectangle.classList[1]);
  }

  // bg.addEventListener("animationend", () => {
  //   endAnimation = true;
  // });

  // console.log(rectAnim);

  switch (counter2) {
    case 0:
      if (delta >= 0) {
        bg.classList.add("animBgGetBonus");

        counter2 += 1;
      } else {
        bg.classList.add("animBgGetBonusBack");
      }
      e.preventDefault();
      break;

    case 1:
      // bg.addEventListener("animationend", () => {
      if (delta > 0) {
        bg.classList.add("animBgGetBonus1");

        counter2 += 1;
      } else {
        bg.classList.add("animBgGetBonus1Back");
        counter2 -= 1;
      }
      // });

      e.preventDefault();
      break;

    case 2:
      if (delta > 0) {
        bg.classList.add("animBgGetBonus2");

        counter2 += 1;
      } else {
        bg.classList.add("animBgGetBonus2Back");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 3:
      if (delta > 0) {
        bg.classList.add("animBgGetBonus3");
        counter2 += 1;
      } else {
        bg.classList.add("animBgGetBonus3Back");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 4:
      if (delta > 0) {
        bg.classList.add("animBgGetBonus4");

        counter2 += 1;
      } else {
        bg.classList.add("animBgGetBonus4Back");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 5:
      if (delta > 0) {
        bg.classList.add("animBgGetBonus5");

        counter2 += 1;
      } else {
        bg.classList.add("animBgGetBonus5Back");

        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 6:
      if (delta > 0) {
        bg.classList.add("animBgGetBonus6");

        counter2 += 1;
      } else {
        bg.classList.remove("animBgGetBonus6");
        bg.classList.add("animBgGetBonus6Back");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 7:
      if (delta > 0) {
        rightContText.classList.add("animrightContentText");
        counter2 += 1;
      } else {
        rightContText.classList.remove("animrightContentText");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 8:
      if (delta > 0) {
        centerContent.classList.add("animBonuse");
        centerContent.classList.remove("animBonuseBack");
        rectangle.classList.add("animRect");
        // rectAnim = false;
        // rectangle.addEventListener("animationend", () => {
        //   rectAnim = true;
        // });

        counter2 += 1;
      } else {
        centerContent.classList.remove("animBonuse");
        centerContent.classList.add("animBonuseBack");

        // if (rectAnim) {
        //   rectangle.classList.add("animRectBack");
        // }

        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 9:
      if (delta > 0) {
        centerContent.classList.add("animBonuse1");
        centerContent.classList.remove("animBonuse1Back");

        getBonus
          .querySelector(".registrationText")
          .classList.add("animRegistrText");

        getBonus.querySelector(".background01").classList.add("animBg01");

        counter2 += 1;
      } else {
        centerContent.classList.remove("animBonuse1");
        centerContent.classList.add("animBonuse1Back");

        getBonus
          .querySelector(".registrationText")
          .classList.remove("animRegistrText");

        getBonus.querySelector(".background01").classList.remove("animBg01");

        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 10:
      if (delta > 0) {
        [...registTextBg].forEach((item) => {
          item.classList.add("animRegistTextBg");
        });
        counter2 += 1;
      } else {
        [...registTextBg].forEach((item) => {
          item.classList.remove("animRegistTextBg");
        });
        [...registTextBg].forEach((item) => {
          item.classList.add("animRegistTextBgBack");
        });
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 11:
      if (delta > 0) {
        rectangle.classList.add("animRect2");
        counter2 += 1;
      } else {
        rectangle.classList.add("animRect2Back");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 12:
      if (delta > 0) {
        getBonus.querySelector(".rectText").classList.add("animRectText");
        rectangle.classList.add("animRect3");
        counter2 += 1;
      } else {
        getBonus.querySelector(".rectText").classList.remove("animRectText");
        rectangle.classList.add("animRect3Back");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 13:
      if (delta > 0) {
        rectangle.classList.add("animRect4");
        counter2 += 1;
      } else {
        rectangle.classList.remove("animRect4");
        rectangle.classList.add("animRect4Back");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 14:
      if (delta > 0) {
        getBonus.querySelector(".rect02").classList.add("animRect02");
        counter2 += 1;
      } else {
        getBonus.querySelector(".rect02").classList.remove("animRect02");
        counter2 -= 1;
      }
      e.preventDefault();
      break;

    case 15:
      if (delta > 0) {
      } else {
        counter2 -= 1;
      }

      break;
  }
}

// function bloclScroll() {
//   body.style.overflowY = "hidden";
// }

// function addScroll() {
//   body.style.overflowY = "";
// }

// if (window.pageYOffset >= window.innerHeight) {

//   bloclScroll()

// }
