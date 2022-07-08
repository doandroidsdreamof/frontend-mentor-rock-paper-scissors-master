let tl = gsap.timeline({ defaults: { ease: "Power3.easeOut", duration: 1 } })

const mainContainer = document.getElementById('main');

const rulesDiv = document.createElement("div");
const closeMark = document.createElement("div");

const gameButtons = document.querySelectorAll('.event');
const rulesButton = document.querySelector('.rules-button');
const ruleBox = document.querySelector('.container__rules');
const playAgainButton = document.querySelector('.playagain');

var breakPoint = window.matchMedia("(max-width: 720px)");


rulesButton.addEventListener('click', (e) => {
  const targetButton = e.target;
  e.stopPropagation();
  document.body.appendChild(rulesDiv);
  rulesDiv.innerText = "RULES";
  rulesDiv.appendChild(closeMark);
  closeMark.classList.add('close--image');
  rulesDiv.classList.add('rules--class');
  let tl = gsap.timeline({ defaults: { ease: "Power3.easeOut", duration: 1 } })
  tl.to('.rules--class', { 'clip-path': 'circle(160% at 0% 100%)', display: 'block', opacity: 1, duration: 1 })
  hideButton();

})

closeMark.addEventListener('click', (e) => {
  const targetClose = e.target;
  e.stopPropagation();
  let tl = gsap.timeline({ defaults: { ease: "Power3.easeOut", duration: 1 } })
  tl.to('.rules--class', { 'clip-path': 'circle(0% at 0% 100%)', display: 'none', opacity: 1, duration: 1 })
  if (!breakPoint.matches) {
    rulesDiv.innerText = "";
    playAgainButton.style.zIndex = "999";
    ruleBox.style.zIndex = "-999";
  }

})


function hideButton() {
  if (ruleBox.style.display = "block" && !breakPoint.matches) {
    playAgainButton.style.zIndex = "-999";
    ruleBox.style.zIndex = "999";
  }
}


