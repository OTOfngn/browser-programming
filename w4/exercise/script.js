console.log("JS connected")

const btnName = document.getElementById("btnName");
const nameOut = document.getElementById("nameOut");

btnName.onclick = function () {
    nameOut.innerText = "Yiming Chen"; // students should replace
};

const btnToggle = document.getElementById("btnToggle");
const toggleOut = document.getElementById("toggleOut");

btnToggle.onclick = function () {
    if (toggleOut.innerText === "OFF") {
        toggleOut.innerText = "ON";
    } else {
        toggleOut.innerText = "OFF";
    }
};

const btnBg = document.getElementById("btnBg");
const btnBgReset = document.getElementById("btnBgReset");

btnBg.onclick = function () {
    document.body.style.backgroundColor = "lavender";
};

btnBgReset.onclick = function () {
    document.body.style.backgroundColor = "";
};

let count = 0;

const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnReset = document.getElementById("btnReset");
const counterValue = document.getElementById("counterValue");

function renderCount() {
    counterValue.innerText = String(count);
}

btnPlus.onclick = function () {
    count = count + 1;
    renderCount();
};

btnMinus.onclick = function () {
    count = count - 1;
    renderCount();
};

btnReset.onclick = function () {
    count = 0;
    renderCount();
};

renderCount();

const aInput = document.getElementById("a");
const bInput = document.getElementById("b");
const btnAdd = document.getElementById("btnAdd");
const sumOut = document.getElementById("sumOut");

btnAdd.onclick = function () {
    const a = Number(aInput.value);
    const b = Number(bInput.value);
    const sum = a + b;

    sumOut.innerText = "Result: " + sum;
};

const btnHide = document.getElementById("btnHide");
const secret = document.getElementById("secret");

btnHide.onclick = function () {
    if (secret.style.display === "none") {
        secret.style.display = "block";
    } else {
        secret.style.display = "none";
    }
};

const msgInput = document.getElementById("msgInput");
const btnCheck = document.getElementById("btnCheck");
const msgOut = document.getElementById("msgOut");

btnCheck.onclick = function () {
    const text = msgInput.value.trim();

    if (text === "") {
        msgOut.innerText = "Please type something.";
        msgOut.style.color = "crimson";
    } else {
        msgOut.innerText = "You typed: " + text;
        msgOut.style.color = "green";
    }
};

const btnHappy = document.getElementById("btnHappy");
const btnSad = document.getElementById("btnSad");
const moodOut = document.getElementById("moodOut");

btnHappy.onclick = function () {
    moodOut.innerText = "Mood: Happy 😊";
    moodOut.style.color = "green";
};

btnSad.onclick = function () {
    moodOut.innerText = "Mood: Sad 😢";
    moodOut.style.color = "blue";
};
