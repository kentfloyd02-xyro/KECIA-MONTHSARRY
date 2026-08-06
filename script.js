const message = `Hi love, whahaha i think ang oa ko neto pero bahala na. First and Foremost, HAPPY 3RD MONTHSARRY. set up lang yung flower if malaman mo talaga na sa'yo, s'yempre papayag ba ako walang plan B inadvance ko na whahahaha i just wanna thankyou for everything love kase super blessed ko simula nung nakilala kita, hindi ko man nagagawa maging sweet pero i'll always trying my best thru Video Call or Call, mahal na mahal kita love. At sure din naman akong gano'n ka rin ramdam ko rin naman. Thankyou sa pag treat sa'kin ng tama, alam kung marami pa tayong pag dadaanan na mga bagay-bagay pero 'wag nating maging option ang pag hihiwalay o pag hahanap nang atensyon sa iba. Palagi lang nating pag-usapan mga problem nating kakaharapin mas mag tatagal tayo if pag uusapan natin lahat ng bagay-bagay, Ang mabibigay ko lang na assurance sa'yo ay yung hindi ako mambabae,mamahalin ka hanggang sa huling hininga ko, ibibigay lahat ng luho mo(dahil alam kung maluho ka), at bubusogin 'yang tummy mo para happy tummy, happy wifey. Love Mahal na Mahal kita, whatever happens i'll still by your side (TAMA BA 'YAN) whahahhahaha Hindi ako mag sasawa na mahalin ka sa araw-araw gwen. Ikaw ang regalo na ayokong mawala, sana gano'n ka rin, Kase pansin ko naiinis kana sa'kin whahhaha like parang Stress na Stress kana as in. Huwag naman, habaan mo pasens'ya mo whahahha + sa nangyari 06|08|26 sorry talaga love pangako hindi na mauulit 'yun. sana 'wag mo'ko iwan sorry if napa ranas ko yung nangyari sa past mo it wouldn't happen again. mahal kita always sana masaya ka sa plan b na 'to hehehe ginamit ko nalang pag ka IT ko sayang eh kung hindi ko gagamitin para makapag pasikat sa'yo blee. ILOVEYOUUUUUU!`;

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

  portrait.textContent += message[portraitIndex];

  portraitIndex++;

  if (portraitIndex >= message.length) {
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
