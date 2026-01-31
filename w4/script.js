console.log("connected");

const btn1 = document.getElementById("btn1");
const out1 = document.getElementById("out1");

let count = 0;
btn1.addEventListener("click", function () {
    count++;
    if (count <= 1) {
        out1.textContent = "You clicked the meaningless button";
    } else {
        out1.textContent = "You clicked the meaningless button " + count + " times";
    }
    console.log("button clicked");
});

const btnTheme = document.getElementById("btnTheme");
const body = document.body;

btnTheme.addEventListener("click", function () {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        console.log("theme changed to light");
    } else {
        body.classList.add("dark-theme");
        console.log("theme changed to dark");
    }
});

