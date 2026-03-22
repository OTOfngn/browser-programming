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

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
}

btnTheme.addEventListener("click", function () {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        console.log("theme changed to light");
    } else {
        body.classList.add("dark-theme");
        console.log("theme changed to dark");
    }
    localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
});

const updateDate = document.getElementById("update_date");
updateDate.textContent = "Last updated: " + new Date().toLocaleDateString();

const btnLoadData = document.getElementById("btnLoadData");
btnLoadData.addEventListener("click", loadUserData);
const dataOutput = document.getElementById("dataOutput");


async function loadUserData() {
    dataOutput.textContent = "Loading...";
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error("Error loading data");
        }
        dataOutput.textContent = "";
        const data = await response.json();
        console.log(data);

        const pName = document.createElement("p");
        pName.textContent = "Name: " + data.name;
        const pEmail = document.createElement("p");
        pEmail.textContent = "Email: " + data.email;
        const pCompany = document.createElement("p");
        pCompany.textContent = "Company: " + data.company.name;
        dataOutput.appendChild(pName);
        dataOutput.appendChild(pEmail);
        dataOutput.appendChild(pCompany);

    } catch (error) {
        console.log(error);
    }



}
// We use await function to deal with internet and operating delay
// We check response.ok to detect potential error.
// We use try and check to deal with the error.