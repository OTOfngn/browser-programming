const output = document.getElementById("output")

function log(text) {
    output.textContent += text + "\n"
}

function clearOutput() {
    output.textContent = ""
}

document.getElementById("btnLoadUsers").onclick = loadUsers

async function loadUsers() {

    clearOutput()

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status)
        }

        const data = await response.json()

        const list = document.getElementById("userList")
        list.innerHTML = ""

        data.forEach(function (user) {
            const li = document.createElement("li")

            li.textContent = user.name + " - " + user.email + " - " + user.address.city

            list.appendChild(li)
        })

    } catch (error) {
        log("Error: " + error)
    }


}


//Short reflection:
//fetch() returns a promise whether the request was successful or not.
//response.json() eventually returns a json file.
//response.ok checks if the request was successful.