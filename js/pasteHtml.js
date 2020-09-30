




window.addEventListener('resize', pasteHtml);

function pasteHtml(e) {
  const textReturn = document.querySelector('.returnTextExplain');
  const registrationTextRow3 = document.querySelector('.registrationTextRow3');
  const registrationTextRow4 = document.querySelector('.registrationTextRow4');
  const refillTextRow1 = document.querySelector('.refillTextRow1');
  const refillTextRow2 = document.querySelector('.refillTextRow2');

  if (window.innerWidth > 1024) {
    textReturn.innerHTML = `<div>
                  <p class="textBg textBgResize">
                    Если событие, на которое была сделана проигрышная ставка,
                    попало в список матчей “Maxline вернет”,
                  </p>
                  <p>
                    Если событие, на которое была сделана проигрышная ставка,
                    попало в список матчей “Maxline вернет”,
                  </p>
                </div>
                <div>
                  <p class="textBg textBgResize">
                    то для получения бонуса необходимо зайти в историю ставок в
                    личном кабинете сайта и нажать
                  </p>
                  <p>
                    то для получения бонуса необходимо зайти в историю ставок в
                    личном кабинете сайта и нажать
                  </p>
                </div>
                <div>
                  <p class="textBg textBgResize">на кнопку для получения бонуса</p>
                  <p>на кнопку для получения бонуса</p>
                </div>
              `;
    registrationTextRow3.innerHTML = ` <p class="textBg textBgResize">
                Обращайся на
                <a href="mailto:bonus@maxline.by">bonus@maxline.by</a> с
                указанием номера игрового счета
              </p>
              <p>
                Обращайся на
                <a href="mailto:bonus@maxline.by">bonus@maxline.by</a> с
                указанием номера игрового счета<span class="tick"></span>
              </p>`;
    registrationTextRow4.innerHTML = `<p class="textBg textBgResize">
                c пометкой "<span class="green">fint</span>".
              </p>
              <p>c пометкой "<span class="green">fint</span>".</p>`;
  }
  if (window.innerWidth <= 1024) {
    textReturn.innerHTML = `<div>
                  <p class="textBg textBgResize">
                    Если событие, на которое была сделана проигрышная</p>
                  <p>Если событие, на которое была сделана проигрышная</p>
                </div>
                <div>
                  <p class="textBg textBgResize">
                  ставка, попало в список матчей “Maxline вернет”, то</p>
                  <p>ставка, попало в список матчей “Maxline вернет”, то</p>
                </div>               
                <div>
                  <p class="textBg textBgResize">
                    для получения бонуса необходимо зайти в историю ставок</p>
                  <p>для получения бонуса необходимо зайти в историю ставок</p>
                </div>
                <div>
                <p class="textBg textBgResize">
                   в личном кабинете сайта и нажать на кнопку</p>
                <p>в личном кабинете сайта и нажать на кнопку</p>
              </div>
                <div>
                  <p class="textBg textBgResize">для получения бонуса</p>
                  <p>для получения бонуса</p>
                </div>`;
    registrationTextRow3.innerHTML = `<p class="textBg textBgResize">
                Обращайся на
                <a href="mailto:bonus@maxline.by">bonus@maxline.by</a> с
                указанием номера</p>
              <p>
                Обращайся на
                <a href="mailto:bonus@maxline.by">bonus@maxline.by</a> с
                указанием номера<span class="tick"></span>
              </p>`;
    registrationTextRow4.innerHTML = `<p class="textBg textBgResize">
                игрового счета c пометкой "<span class="green">fint</span>".</p>
              <p>игрового счета c пометкой "<span class="green">fint</span>".</p>`;
  }
  if (window.innerWidth < 500) {
    textReturn.innerHTML = `<div>
    <p class="textBg textBgResize">
      Если событие, на которое была сделана</p>
    <p>Если событие, на которое была сделана</p>
  </div>
  <div>
    <p class="textBg textBgResize">проигрышная ставка, попало в список матчей</p>
    <p>проигрышная ставка, попало в список матчей</p>
  </div>
  <div>
    <p class="textBg textBgResize">
     “Maxline вернет”, то для получения бонуса</p>
    <p>“Maxline вернет”, то для получения бонуса</p>
    </div> 
      <div>
    <p class="textBg textBgResize">необходимо зайти в историю ставок в личном</p>
    <p>необходимо зайти в историю ставок в личном</p>
  </div>
  <div>
  <p class="textBg textBgResize">кабинете сайта и нажать на кнопку для получени</p>
  <p>кабинете сайта и нажать на кнопку для получени</p>
</div>
  <div>
    <p class="textBg textBgResize">я бонуса</p>
    <p>бонуса</p>
  </div>`;
    refillTextRow1.innerHTML = `<p class="textBg textBgResize">
                Пополняй игровой счет любым доступным</p>
              <p>
                Пополняй игровой счет любым доступным<span class="tick"></span></p>`;
    refillTextRow2.innerHTML = `<p class="textBg textBgResize">способом.</p>
              <p>способом.</p>`;
  }

  if (e.type == 'resize') {
    const forMobile = document.querySelector('.forMobile');
    forMobile.classList.add('forMobileResize');

    const TextBgResize = document.querySelectorAll('.textBgResize');
    [...TextBgResize].forEach((item) => {
      item.classList.add('animReturnResize');
    });
  }
}
