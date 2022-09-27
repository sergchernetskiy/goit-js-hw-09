const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;

refs.btnStop.disabled = true;

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  refs.btnStop.removeAttribute('disabled');
  refs.btnStart.disabled = true;

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStopClick() {
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.disabled = true;

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
