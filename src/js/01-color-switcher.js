
const mainBg = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intID = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', startRandomizer);
stopBtn.addEventListener('click', stopRandomizer);

function startRandomizer() {
    intID = setInterval(() => {
        mainBg.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}
function stopRandomizer() {
    clearInterval(intID);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}