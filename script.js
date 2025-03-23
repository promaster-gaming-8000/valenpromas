const messages = [
    "You misclicked that didn't you?",
    "You really sure?",
    "Are you positively sure?",
    "Please?",
    "You know yes means yes right?",
    "Why you choosing red? greenflag is better you know?",
    "You really wanna say no?",
    "are you really sure?",
    "Okay fine...",
    "Find the no button first then!",
    "."
];

let messageIndex = 0;
var bgmJS = document.getElementById("bgm");

let play = document.querySelector('.play')
let audio = document.querySelector('.aud')
let vol = document.querySelector('#vol')
let num = document.querySelector('.num')

function moveButton() {
    const button2 = document.querySelector('.button2');
    const yesButton = document.querySelector('.button1');
    const maxX = window.innerWidth - button2.offsetWidth;
    const maxY = window.innerHeight - button2.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
    yesButton.style.padding = `${currentSize * 0.8}px ${currentSize * 1.6}px`;

    if (messageIndex === messages.length - 1) {
        window.location.href = "cup_game.html";
        return;
    }
    
    button2.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    button2.style.position = 'absolute';
    button2.style.left = `${randomX}px`;
    button2.style.top = `${randomY}px`;
    button2.style.transition = '0s';
}
function playAudio() {
    document.getElementById('unmute').style.display="block";
    document.getElementById('mute').style.display="none";
    document.querySelectorAll("video, audio").forEach((elem) => unmute(elem));
}
function stopAudio() {
    document.getElementById('unmute').style.display="none";
    document.getElementById('mute').style.display="block";
    document.querySelectorAll("video, audio").forEach((elem) => mute(elem));
}
function mute(elem) {
    elem.muted = true;
    elem.pause();
}
function unmute(elem) {
    elem.muted = false;
    elem.play();
}
vol.oninput = function() {;
    let volValue = vol.value;
    
    audio.volume = vol.value/100
    num.innerHTML = vol.value;

    if (audio.volume == 0) {
        document.getElementById('unmute').style.display="none";
        document.getElementById('mute').style.display="block";
    }
    else {
        document.querySelectorAll("video, audio").forEach((elem) => unmute(elem));
        document.getElementById('unmute').style.display="block";
        document.getElementById('mute').style.display="none";
        elem.muted = false;
        elem.play();
    }
}

play.addEventListener('click', ()=> {
    audio.play()
})

window.onload = function() {
    const licenseElement = document.querySelector(".license");
    const messagesLicense = [
        "Programmed by PromasterYTJava ©",
        "Made with ❤️ by PromasterYTJava ©",
        "Coding since 2021... ©",
        "PromasterYTJava is watching 👀 ©",
        "This website runs on pure magic ✨ ©",
        "Another masterpiece by PromasterYTJava! 🚀 ©"
    ];

    let index = 0;

    function updateLicenseText() {
        licenseElement.textContent = messagesLicense[index];
        index = (index + 1) % messagesLicense.length;
    }

    setInterval(updateLicenseText, 2000);
};
function continueFunc(elem) {
    document.getElementById('continueID').style.display="none";
    document.querySelectorAll("video, audio").forEach((elem) => unmute(elem));
}