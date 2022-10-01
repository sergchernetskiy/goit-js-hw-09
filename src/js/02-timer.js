import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  btnStart: document.querySelector('[data-start]'),
  input: document.querySelector('#datetime-picker'),
  //rootSelector: document.querySelector('.timer'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //console.log(selectedDates[0]);
    const currentTime = Date.now();
    if (selectedDates[0] < currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future', {
        position: 'center-center',
        backOverlay: true,
        clickToClose: true,
        closeButton: true,
      });
    }
    return refs.btnStart.removeAttribute('disabled');
  },
};

flatpickr('#datetime-picker', options);
refs.btnStart.disabled = true;

class Timer {
  constructor({ onTick }) {
    this.timerId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }

    const timerDeadline = new Date(refs.input.value).getTime();
    this.isActive = true;

    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const diff = timerDeadline - currentTime;

      if (diff < 100) {
        clearInterval(this.timerId);
      } else {
        const data = this.convertMs(diff);
        this.onTick(data);
      }
    }, 1000);
  }

  convertMs(diff) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = this.addLeadingZero(Math.floor(diff / day));
    const hours = this.addLeadingZero(Math.floor((diff % day) / hour));
    const minutes = this.addLeadingZero(
      Math.floor(((diff % day) % hour) / minute)
    );
    const seconds = this.addLeadingZero(
      Math.floor((((diff % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  }

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  onTick: updateClockFace,
});

function updateClockFace({ days, hours, minutes, seconds }) {
  /* [...rootSelector].forEach(item => {
    refs[item.dataset.title] = item;
  }); */
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

refs.btnStart.addEventListener('click', timer.start.bind(timer));
