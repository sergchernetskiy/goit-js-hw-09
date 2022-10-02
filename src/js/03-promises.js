import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
let delay = Number(formRef.delay.value.trim());
const delayStep = Number(formRef.step.value.trim());
const amount = Number(formRef.amount.value.trim());
//console.log('firstDelay', firstDelay);
//console.log('delayStep', delayStep);
//console.log('amount', amount);
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;

    createPromise(position, delay)
      .then(
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            position: 'center-center',
            useIcon: false,
            opacity: 0.7,
          }
        )
      )
      .catch(
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            position: 'center-center',
            useIcon: false,
            opacity: 0.7,
          }
        )
      );

    delay += delayStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}
