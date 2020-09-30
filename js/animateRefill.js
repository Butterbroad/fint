// function animateRefill() {
//   refill.querySelector('.background02').classList.add('animBg02');
//   refill.querySelector('.everyRefill').classList.add('animEveryRefill');
//   refill.querySelector('.refillText').classList.add('animRefillText');
//   refill.querySelector('.centerRefill').classList.add('animCenterRefill');
//   refill.querySelector('.forMobile').classList.add('animforMobile');
//   const registTextBg = refill.querySelectorAll('.textBg');
//   [...registTextBg].forEach((item) => {
//     item.classList.add('animRefillTextBg');
//   });
//   refill.querySelector('.backgroundRefill').classList.add('animBgRefill');
//   refill.querySelector('.fourPercent').classList.add('animFourPercent');
//   refill.querySelector('.strip').classList.add('animStrip');

//   }

let counter3 = 0;
const bgRefill = refill.querySelector(".backgroundRefill");
const fourPercent = refill.querySelector(".fourPercent");
let isPlaying;

function animateRefill(e) {
  const delta = e.deltaY || e.detail || e.wheelDelta;
  console.log(counter3);
  console.log(isPlaying);

  if (!isPlaying) {
    if (bgRefill.classList[1] && bgRefill.classList[1] !== "animBgRefill8") {
      bgRefill.classList.remove(bgRefill.classList[1]);
    }

    for (let i = 1; i < fourPercent.classList.length; i++) {
      if (
        fourPercent.classList[i] !== "fourPercentSvg" &&
        fourPercent.classList[i] !== "animFourPercent8"
      ) {
        fourPercent.classList.remove(fourPercent.classList[i]);
      }
    }
    switch (counter3) {
      case 0:
        isPlaying = true;
        if (delta >= 0) {
          refill.querySelector(".background02").classList.add("animBg02");
          refill.querySelector(".everyRefill").classList.add("animEveryRefill");
          // refill.querySelector(".refillText").classList.add("animRefillText");
          // refill.querySelector(".forMobile").classList.add("animforMobile");
          bgRefill.classList.add("animBgRefill");
          refill.querySelector(".strip").classList.add("animStrip");
          counter3 += 1;

          setTimeout(() => {
            isPlaying = false;
          }, 300);
        } else {
          bgRefill.classList.add("animBgRefillBack");

          setTimeout(() => {
            isPlaying = false;
          }, 300);
        }
        e.preventDefault();
        break;

      case 1:
        isPlaying = true;
        if (delta > 0) {
          bgRefill.classList.add("animBgRefill1");
          fourPercent.classList.add("animFourPercent");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        } else {
          bgRefill.classList.add("animBgRefill1Back");
          fourPercent.classList.add("animFourPercentBack");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        }
        e.preventDefault();
        break;

      case 2:
        isPlaying = true;
        if (delta > 0) {
          bgRefill.classList.add("animBgRefill2");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        } else {
          bgRefill.classList.add("animBgRefill2Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        }
        e.preventDefault();
        break;

      case 3:
        isPlaying = true;
        if (delta > 0) {
          bgRefill.classList.add("animBgRefill3");
          fourPercent.classList.add("animFourPercent1");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        } else {
          bgRefill.classList.add("animBgRefill3Back");
          fourPercent.classList.add("animFourPercent1Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        }
        e.preventDefault();
        break;

      case 4:
        isPlaying = true;
        if (delta > 0) {
          bgRefill.classList.add("animBgRefill4");

          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        } else {
          bgRefill.classList.add("animBgRefill4Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        }
        e.preventDefault();
        break;

      case 5:
        isPlaying = true;
        if (delta > 0) {
          bgRefill.classList.add("animBgRefill5");
          fourPercent.classList.add("animFourPercent2");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        } else {
          bgRefill.classList.add("animBgRefill5Back");
          fourPercent.classList.add("animFourPercent2Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        }
        e.preventDefault();
        break;

      case 6:
        isPlaying = true;
        if (delta > 0) {
          bgRefill.classList.add("animBgRefill6");
          refill.querySelector(".strip").classList.add("animStrip2");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        } else {
          bgRefill.classList.add("animBgRefill6Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        }
        e.preventDefault();
        break;

      case 7:
        isPlaying = true;
        if (delta > 0) {
          bgRefill.classList.add("animBgRefill7");
          fourPercent.classList.add("animFourPercent3");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        } else {
          bgRefill.classList.add("animBgRefill7Back");
          fourPercent.classList.add("animFourPercent3Back");
          fourPercent.classList.remove("animFourPercent3");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        }
        e.preventDefault();
        break;

      case 8:
        isPlaying = true;
        if (delta > 0) {
          bgRefill.classList.add("animBgRefill8");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        } else {
          bgRefill.classList.add("animBgRefill8Back");
          bgRefill.classList.remove("animBgRefill8");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 100);
        }
        e.preventDefault();
        break;

      case 9:
        isPlaying = true;
        if (delta > 0) {
          refill
            .querySelector(".centerRefill")
            .classList.add("animCenterRefill");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        } else {
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        }
        e.preventDefault();
        break;

      case 10:
        isPlaying = true;
        if (delta > 0) {
          refill.querySelector(".refillText").classList.add("animRefillText");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        } else {
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        }
        e.preventDefault();
        break;

      case 11:
        isPlaying = true;
        if (delta > 0) {
          const registTextBg = refill.querySelectorAll(".textBg");
          [...registTextBg].forEach((item) => {
            item.classList.add("animRefillTextBg");
          });
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 1300);
        } else {
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 1300);
        }
        e.preventDefault();
        break;

      case 12:
        isPlaying = true;
        if (delta > 0) {
          refill
            .querySelector(".centerRefill")
            .classList.add("animCenterRefill1");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        } else {
          refill
            .querySelector(".centerRefill")
            .classList.add("animCenterRefill1Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        }
        e.preventDefault();
        break;

      case 13:
        isPlaying = true;
        if (delta > 0) {
          fourPercent.classList.add("animFourPercent4");
          fourPercent.classList.add("fourPercentSvg");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        } else {
          fourPercent.classList.add("animFourPercent4Back");
          fourPercent.classList.remove("fourPercentSvg");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        }
        e.preventDefault();
        break;

      case 14:
        isPlaying = true;
        if (delta > 0) {
          fourPercent.classList.add("animFourPercent5");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        } else {
          fourPercent.classList.add("animFourPercent5Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        }
        e.preventDefault();
        break;

      case 15:
        isPlaying = true;
        if (delta > 0) {
          fourPercent.classList.add("animFourPercent6");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        } else {
          fourPercent.classList.add("animFourPercent6Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        }
        e.preventDefault();
        break;

      case 16:
        isPlaying = true;
        if (delta > 0) {
          fourPercent.classList.add("animFourPercent7");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        } else {
          fourPercent.classList.add("animFourPercent7Back");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        }
        e.preventDefault();
        break;

      case 17:
        isPlaying = true;
        if (delta > 0) {
          fourPercent.classList.add("animFourPercent8");
          counter3 += 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        } else {
          fourPercent.classList.add("animFourPercent8Back");
          fourPercent.classList.remove("animFourPercent8");
          counter3 -= 1;
          setTimeout(() => {
            isPlaying = false;
          }, 600);
        }
        e.preventDefault();
        break;

      case 18:
        if (delta > 0) {
        } else {
          counter3 -= 1;
        }
        break;
    }
  } else e.preventDefault();
}
