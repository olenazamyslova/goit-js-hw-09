import Notiflix from 'notiflix';

const mainForm = document.querySelector('.form');
let delayTime = null;
let stepTime = null;
let amountSub = null;


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  
}
const submitHandler = e => {
  e.preventDefault();
  if (!e.target.tagName === 'BUTTON') return;

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;

  delayTime = Number(delay.value);
  stepTime = Number(step.value);
  amountSub = Number(amount.value);

  for (let i = 1; i <= amountSub; i++) {
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayTime += stepTime;
  }

  e.currentTarget.reset();
};
mainForm.addEventListener('submit', submitHandler);