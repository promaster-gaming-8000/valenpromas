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
window.onload = function () {
    const licenseElement = document.querySelector(".license");
    const messages = [
        "Programmed by PromasterYTJava ©",
        "Made with ❤️ by PromasterYTJava ©",
        "Coding since 2021... ©",
        "PromasterYTJava is watching 👀 ©",
        "This website runs on pure magic ✨ ©",
        "Another masterpiece by PromasterYTJava! 🚀 ©"
    ];

    let index = 0;

    function updateLicenseText() {
        licenseElement.textContent = messages[index];
        index = (index + 1) % messages.length;
    }

    setInterval(updateLicenseText, 2000);
};