// (function () {
let bonuses = document.querySelector(".bonuses");
let getBonus = document.querySelector(".getBonus");
let refill = document.querySelector(".refill");
let returnElem = document.querySelector(".return");
let forecast = document.querySelector(".forecast");
let conditions = document.querySelector(".conditions");
let body = document.querySelector("body");
// window.addEventListener("hashchange", startAnimation);
window.addEventListener("load", startAnimation);

// let counter = 0;


function startAnimation(e) {

  window.addEventListener("scroll", function () {
    
    if (pageYOffset > 0 && pageYOffset <= window.innerHeight) {
      bonuses.addEventListener("wheel", animateBonuses);
    }
    if (
      pageYOffset >= window.innerHeight &&
      pageYOffset < window.innerHeight * 2
    ) {
      getBonus.addEventListener("wheel", start2);
    }
    if (
      pageYOffset >= window.innerHeight * 2 &&
      pageYOffset < window.innerHeight * 3
    ) {
      refill.addEventListener("wheel", animateRefill);
    }
  });

  // window.pageYOffset == 0
  //   window.scrollY = 0

  // console.log(window.scrollY)
  // bloclScroll();
  // body.style.overflowY = "hidden";
  pasteHtml(e);
  // const URLHash = window.location.hash.substr(1);
  // switch (URLHash) {
  //   case "15byn":
  //     toDoVisible(getBonus);
  //     animateGetBonus();
  //     break;
  //   case "bonus4":
  //     toDoVisible(refill);
  //     animateRefill();
  //     break;
  //   case "MLplatit":
  //     toDoVisible(returnElem);
  //     animateReturn();
  //     break;
  //   case "bonus2000":
  //     toDoVisible(forecast);
  //     animateForecast();
  //     break;
  //   case "pravila":
  //     toDoVisible(conditions);
  //     break;
  //   case "main":
  //     animateBonuses();
  //     break;
  //   case "":
  // animateBonuses();
  //     break;
  // }
  // bonuses.addEventListener("wheel", startGetBonusAnimation);
  // getBonus.addEventListener("wheel", startRefillAnimation);
  //   refill.addEventListener("wheel", startReturnAnimation);
  //   returnElem.addEventListener("wheel", startForecastAnimation);
  //   forecast.addEventListener("wheel", startConditionsAnimation);
  //   conditions.addEventListener("wheel", unvisibilityConditions);
}

function startGetBonusAnimation(e) {
  if (e.type === "wheel") {
    const delta = e.deltaY || e.detail || e.wheelDelta;
    animateRegistr(delta);
    animateGetBonus();
  }
}
function animateRegistr(delta) {
  if (delta > 0) {
    // window.location.hash = "15byn";
    getBonus.classList.remove("unvisibility");
    getBonus.classList.add("visibility");
    hideLeftContent(bonuses);
  }
}

// let counter = 0;
function startRefillAnimation(e) {
  const delta = e.deltaY || e.detail || e.wheelDelta;
  // hideAndShow(delta, refill, getBonus);
  // console.log(delta);
  // counter += 1;
  // console.log(counter);
}

function startReturnAnimation(e) {
  const delta = e.deltaY || e.detail || e.wheelDelta;
  hideAndShow(delta, returnElem, refill);
}

function startForecastAnimation(e) {
  const delta = e.deltaY || e.detail || e.wheelDelta;
  hideAndShow(delta, forecast, returnElem);
}
function startConditionsAnimation(e) {
  const delta = e.deltaY || e.detail || e.wheelDelta;
  hideAndShow(delta, conditions, forecast);
  conditions.addEventListener("wheel", unvisibilityConditions);
}
function unvisibilityConditions(e) {
  const delta = e.deltaY || e.detail || e.wheelDelta;
  hideConditions(delta);
  hideLeftContent(conditions);
}
function hideConditions(delta) {
  const wrappScroll = conditions.querySelector(".wrappScroll");
  if (delta < 0 && wrappScroll.scrollTop <= 1) {
    conditions.classList.remove("visibility");
    conditions.classList.add("unvisibility");
    setTimeout(() => conditions.classList.remove("unvisibility"), 600);
    animateForecast();
    // window.location.hash = "bonus2000";
  }
}
function hideLeftContent(section) {
  let leftContent = section.querySelector(".leftContent");
  leftContent.classList.remove("openLeftContent");
  leftContent.classList.remove("closeLeftContent");
}
function hideAndShow(delta, currSection, prevSection) {
  hideLeftContent(prevSection);
  if (delta > 0) {
    setTimeout(() => {
      startScrollDownAnimation(prevSection);
    }, 600);
    toDoVisible(currSection);
    prevSection.classList.remove("unvisibility");
  } else {
    toDoUnvisible(prevSection);
    // setTimeout(() => {
    startScrollUpAnimation(prevSection);
    // }, 600);
  }
}
function startScrollUpAnimation(section) {
  stopAllAnimation();
  switch (section.classList[0]) {
    case getBonus.classList[0]:
      // window.location.hash = "main";
      break;
    case refill.classList[0]:
      animateGetBonus();
      // window.location.hash = "15byn";
      break;
    case returnElem.classList[0]:
      animateRefill();
      // window.location.hash = "bonus4";
      break;
    case forecast.classList[0]:
      animateReturn();
      // window.location.hash = "MLplatit";
      break;
    case conditions.classList[0]:
      animateForecast();
      // window.location.hash = "bonus2000";
      break;
  }
}
function startScrollDownAnimation(section) {
  stopAllAnimation();
  switch (section.classList[0]) {
    case getBonus.classList[0]:
      animateRefill();
      // window.location.hash = "bonus4";
      break;
    case refill.classList[0]:
      animateReturn();
      // window.location.hash = "MLplatit";
      break;
    case returnElem.classList[0]:
      animateForecast();
      // window.location.hash = "bonus2000";
      break;
    case forecast.classList[0]:
      // window.location.hash = "pravila";
      break;
  }
}
function stopAllAnimation() {
  stopgetBonusAnimation();
  stopForecastAnimation();
  stopRefillAnimation();
  stopReturnElemAnimation();
}
document.addEventListener("click", openSection);
function openSection(e) {
  if (e.target.closest("div").classList.contains("leftText")) {
    let leftContent = document.querySelectorAll(".leftContent");
    leftContent.forEach((i) => {
      i.classList.remove("openLeftContent");
      i.classList.add("closeLeftContent");
    });
    toDoAllUnVisible();
    if (e.target.closest("div").classList.contains("leftText1")) {
      getBonus.classList.remove("unvisibility");
      getBonus.classList.add("visibility");
      animateGetBonus();
    } else if (e.target.closest("div").classList.contains("leftText2")) {
      hideAndShow(e, refill, getBonus);
    } else if (e.target.closest("div").classList.contains("leftText3")) {
      hideAndShow(e, returnElem, refill);
    } else if (e.target.closest("div").classList.contains("leftText4")) {
      hideAndShow(e, forecast, returnElem);
    } else if (e.target.closest("div").classList.contains("leftText5")) {
      hideAndShow(e, conditions, forecast);
    }
  }
}
function toDoAllUnVisible() {
  getBonus.classList.remove("visibility");
  refill.classList.remove("visibility");
  returnElem.classList.remove("visibility");
  forecast.classList.remove("visibility");
  conditions.classList.remove("visibility");
}
function toDoVisible(section) {
  toDoAllUnVisible();
  const sections = document.querySelectorAll(".section");
  [...sections].forEach((item, i, arr) => {
    if (item.classList.contains(section.classList[0])) {
      arr.splice(arr.indexOf(item) + 1, arr.length - 1);
      arr.forEach((item) => {
        item.classList.add("visibility");
      });
    }
  });
}
function toDoUnvisible(section) {
  section.classList.add("unvisibility");
  const sections = document.querySelectorAll(".section");
  [...sections].forEach((item, i, arr) => {
    if (item.classList.contains(section.classList[0])) {
      const newArr = arr.splice(arr.indexOf(item), arr.length - 1);
      newArr.forEach((item) => {
        item.classList.remove("visibility");
        item.addEventListener("animationend", () =>
          item.classList.remove("unvisibility")
        );
      });
    }
  });
}
addTouchListeners(bonuses);
addTouchListeners(getBonus, refill);
addTouchListeners(refill, returnElem);
addTouchListeners(returnElem, forecast);
addTouchListeners(forecast, conditions);
addTouchListeners(conditions);
function addTouchListeners(section, currSection) {
  section.addEventListener("touchstart", function (e) {
    eventTouch = e;
  });
  section.addEventListener("touchmove", function (e) {
    if (eventTouch) {
      let delta = eventTouch.touches[0].pageY - e.touches[0].pageY;
      if (section == conditions) {
        hideConditions(delta);
      } else if (section == bonuses) {
        animateRegistr(delta);
        animateGetBonus();
      } else {
        hideAndShow(delta, currSection, section);
      }
    }
  });
  section.addEventListener("touchend", function (e) {
    eventTouch = null;
  });
}
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
// })();
