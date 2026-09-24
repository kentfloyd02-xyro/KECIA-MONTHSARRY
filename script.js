const message = 'Happy 20th Birthday Love, Sorry dahil wala ako dyan promise pag graduate natin lagi na tayo mag kasama kada birthday mo. Thankyou love kase lagi mo akong iniintindi at ganon din naman ako sayo. wala na akong h-hilingan pa sa rs natin mag paka buti kalang sa akin sapat na whahahha kems. Enjoy your day Bebi, Padaba taka (HOPE TAMA IYAN whahhahha)';
// Repeat only for the image-text effect so the portrait is filled before it fades.
const portraitMessage = (message + ' ').repeat(20);
const giftContainer = document.getElementById("giftContainer");
const giftBtn = document.getElementById("giftBtn");
const bouquet = document.getElementById("bouquet");

const portrait = document.getElementById("portrait");
const letter = document.getElementById("letter");

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

const portraitContainer = document.getElementById("portraitContainer");
const letterContainer = document.getElementById("letterContainer");

let portraitIndex = 0;
let letterIndex = 0;

startBtn.onclick = () => {
    intro.classList.add("hide");

    setTimeout(() => {
        intro.style.display = "none";

        portraitContainer.style.display = "flex";

        typePortrait();
    }, 1000);
};

function typePortrait() {
    if (portrait.scrollHeight > portrait.clientHeight) {
        portrait.classList.add("glow");

        setTimeout(() => {
            portrait.classList.add("zoom");
        }, 2000);

        setTimeout(showLetter, 6000);

        return;
    }

    portrait.textContent += portraitMessage[portraitIndex];

    portraitIndex++;

    if (portraitIndex >= portraitMessage.length) {
        portraitIndex = 0;
    }

    setTimeout(typePortrait, 1);
}

function showLetter() {
    portraitContainer.style.display = "none";

    letterContainer.style.display = "block";

    typeLetter();
}

function typeLetter() {
    if (letterIndex >= message.length) {
        giftContainer.style.display = "block";

        return;
    }

    letter.textContent += message[letterIndex];

    letterIndex++;

    setTimeout(typeLetter, 25);
}

giftBtn.onclick = () => {
    giftBtn.style.display = "none";

    bouquet.style.display = "block";

    setTimeout(() => {
        bouquet.classList.add("show");
    }, 10);
};

const petals = document.getElementById("petals");

for (let i = 0; i < 25; i++) {
    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = 6 + Math.random() * 6 + "s";

    petal.style.animationDelay = Math.random() * 5 + "s";

    petal.style.fontSize = 16 + Math.random() * 20 + "px";

    petals.appendChild(petal);
}
