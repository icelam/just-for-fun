import './styles/index.scss';
import { signal, effect, computed } from '@preact/signals-core';

const tenCentsCard = document.querySelector('#counter-ten-cents');
const twentyCentsCard = document.querySelector('#counter-twenty-cents');
const fiftyCentsCard = document.querySelector('#counter-fifty-cents');
const oneDollarCard = document.querySelector('#counter-one-dollar');
const twoDollarsCard = document.querySelector('#counter-two-dollars');
const fiveDollarsCard = document.querySelector('#counter-five-dollars');
const tenDollarsCard = document.querySelector('#counter-ten-dollars');

const tenCentsCounter = signal(0);
const twentyCentsCounter = signal(0);
const fiftyCentsCounter = signal(0);
const oneDollarCounter = signal(0);
const twoDollarsCounter = signal(0);
const fiveDollarsCounter = signal(0);
const tenDollarsCounter = signal(0);

const totalAmount = computed(
  () => (
    tenCentsCounter * (0.1 * 10) +
    twentyCentsCounter * (0.2 * 10) +
    fiftyCentsCounter * (0.5 * 10) +
    oneDollarCounter * (1 * 10) +
    twoDollarsCounter * (2 * 10) +
    fiveDollarsCounter * (5 * 10) +
    tenDollarsCounter * (10 * 10)
  ) / 10
);

const numberOfCoins = computed(
  () => (
    tenCentsCounter +
    twentyCentsCounter +
    fiftyCentsCounter +
    oneDollarCounter +
    twoDollarsCounter +
    fiveDollarsCounter +
    tenDollarsCounter
  )
);

effect(() => {
  tenCentsCard.querySelector('.quantity').textContent = tenCentsCounter.value;
});

effect(() => {
  twentyCentsCard.querySelector('.quantity').textContent = twentyCentsCounter.value;
});

effect(() => {
  fiftyCentsCard.querySelector('.quantity').textContent = fiftyCentsCounter.value;
});

effect(() => {
  oneDollarCard.querySelector('.quantity').textContent = oneDollarCounter.value;
});

effect(() => {
  twoDollarsCard.querySelector('.quantity').textContent = twoDollarsCounter.value;
});

effect(() => {
  fiveDollarsCard.querySelector('.quantity').textContent = fiveDollarsCounter.value;
});

effect(() => {
  tenDollarsCard.querySelector('.quantity').textContent = tenDollarsCounter.value;
});


const toast = document.querySelector('.toast');
const toastAnimation = toast.animate(
  [
    {bottom: 0, opacity: 0},
    {bottom: '1.5rem', opacity: 1},
  ],
  {
    duration: 300,
    easing: 'ease-in-out',
    iterations: 1
  }
);

toastAnimation.cancel();

let toastTimer;
let isToastFadingOut = false;

effect(() => {
  clearTimeout(toastTimer);

  toast.textContent = `You have ${numberOfCoins} coins with a total value of HK$${totalAmount}`;

  if (isToastFadingOut) {
    toastAnimation.cancel();
    isToastFadingOut = false;
  }

  if (toast.style.visibility !== 'visible' || isToastFadingOut) {
    toastAnimation.playbackRate = 1;
    toastAnimation.play();
  }

  toast.style.visibility = 'visible';

  toastTimer = setTimeout(async () => {
    isToastFadingOut = true;
    const animationPromise = new Promise((resolve) => {
      toastAnimation.onfinish = resolve;
    });

    toastAnimation.playbackRate = -1;
    toastAnimation.play();
    await animationPromise;

    toast.style.visibility = 'hidden';
    isToastFadingOut = false;
  }, 2000);
});

const counterMappigs = [
  { element: tenCentsCard, counter: tenCentsCounter },
  { element: twentyCentsCard, counter: twentyCentsCounter },
  { element: fiftyCentsCard, counter: fiftyCentsCounter },
  { element: oneDollarCard, counter: oneDollarCounter },
  { element: twoDollarsCard, counter: twoDollarsCounter },
  { element: fiveDollarsCard, counter: fiveDollarsCounter },
  { element: tenDollarsCard, counter: tenDollarsCounter }
];

counterMappigs.forEach(({ element, counter }) => {
  element.querySelector('.plus-button').addEventListener('click', () => {
    counter.value++;
  });

  element.querySelector('.minus-button').addEventListener('click', () => {
    if (counter.value > 0) {
      counter.value--;
    }
  });
});
