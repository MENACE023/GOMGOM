/* SCREENS */

const introScreen =
  document.getElementById("introScreen");

const proposalScreen =
  document.getElementById("proposalScreen");

const finalScreen =
  document.getElementById("finalScreen");

/* BUTTONS */

const startBtn =
  document.getElementById("startBtn");

const yesBtn =
  document.getElementById("yesBtn");

const noBtn =
  document.getElementById("noBtn");

const musicBtn =
  document.getElementById("musicBtn");

/* MUSIC */

const bgMusic =
  document.getElementById("bgMusic");

let musicPlaying = false;

/* START */

startBtn.addEventListener("click", () => {

  introScreen.classList.remove("active");

  proposalScreen.classList.add("active");

});

/* YES */

yesBtn.addEventListener("click", () => {

  proposalScreen.classList.remove("active");

  finalScreen.classList.add("active");

});

/* MUSIC TOGGLE */

musicBtn.addEventListener("click", () => {

  if (!musicPlaying) {

    bgMusic.play();

    musicPlaying = true;

    musicBtn.innerHTML = "🔊";

  } else {

    bgMusic.pause();

    musicPlaying = false;

    musicBtn.innerHTML = "🎵";
  }

});

/* NO BUTTON TEXTS */

const noTexts = [

  "What? 🥺",

  "Why 😭",

  "Please? 💔",

  "Don't do this 😭",

  "I thought you loved me ;(",

  "Say yes please ❤️"
];

let noCount = 0;

/* MOVE BUTTON */

function moveNoButton() {

  const maxX = 120;

  const maxY = 120;

  const x =
    Math.floor(Math.random() * maxX)
    - maxX / 2;

  const y =
    Math.floor(Math.random() * maxY)
    - maxY / 2;

  noBtn.style.transform =
    `translate(${x}px, ${y}px)`;
}

/* DESKTOP */

noBtn.addEventListener(
  "mouseover",
  moveNoButton
);

/* MOBILE */

noBtn.addEventListener(
  "touchstart",
  moveNoButton
);

/* CLICK */

noBtn.addEventListener("click", () => {

  if (noCount < noTexts.length) {

    noBtn.innerText =
      noTexts[noCount];

    noCount++;
  }

  /* GROW YES BUTTON */

  const currentSize =
    parseFloat(
      window.getComputedStyle(
        yesBtn
      ).fontSize
    );

  yesBtn.style.fontSize =
    currentSize + 4 + "px";

  yesBtn.style.padding =
    "18px 40px";

});

/* HEARTS */

const heartsContainer =
  document.querySelector(".hearts");

function createHeart() {

  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤️";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  heart.style.animationDuration =
    Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {

    heart.remove();

  }, 7000);

}

setInterval(createHeart, 700);