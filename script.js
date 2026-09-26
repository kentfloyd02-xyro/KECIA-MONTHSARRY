const message = 'Happy 20th Birthday Love, Sorry dahil wala ako dyan promise pag graduate natin lagi na tayo mag kasama kada birthday mo. Sobrang down ko talaga nung hindi ako pinayagan kaya ganito ako sa iyo rn like walang sweet kase wala ako sa mood tapos hindi ko expect na magiging same treatment ka ayun sabog si kuya nag mokmok whatever ayoko maging ma-drama, kahit anong mangyari sa atin love isa lang masasabi ko sa iyo never ako mag hahanap ng iba para lang mapunan pag k-kulang mo, i was not saying na nag k-kulang ka i am saying na syempre hindi lahat ng oras nasa mood ka or ako so sana ganon ka rin sa akin, kase grabe ang overthink ko talaga as in kase nga hindi tayo okay + baka makahanap ka ng mas malapit basta andami kung iniisip na kung ano-ano na ka bullshitan pero wala naman ako magagawa, and alam kung big thing sa iyo yung pag p-papunt ni mommy mo sa akin dahil strict nga siya kaya super special niya sa iyo, baka love desire lang ito ni God maybe this is not the perfect time to meet each other but it does not mean na hindi na magkikita huwag naman masasabi ko nalang talaga kay mama na "may gala kami ng mga kaibigan ko ma maaga tas uwi gabi (outing daw) " pero ang totoo OTW na sainyo whahha ang desperado ko naman kainis grrrr nways masyado na akong say Thankyou love kase lagi mo akong iniintindi at ganon din naman ako sayo. wala na akong h-hilingan pa sa rs natin mag paka buti kalang sa akin sapat na whahahha kems. Enjoy your day Bebi, Padaba taka (HOPE TAMA IYAN whahhahha) MAHAL NA MAHAL KITA BEBI, LOVE, PAT, GWEN!! MWAAA HAPPY BIRTHDAY FUTURE GF,FIANCE, WIFEY KO :> (KISS YAN WHAHHAA)';
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