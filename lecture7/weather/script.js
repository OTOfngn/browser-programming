// https://api.open-meteo.com/v1/forecast?latitude=62.8924&longitude=27.6770&current=temperature_2m,wind_speed_10m

const cityText = document.getElementById("city")
const temperatureText = document.getElementById("temperature")
const windText = document.getElementById("wind")
const output = document.getElementById("output")

function log(message) {
    output.textContent += message + "\n"
}

function clearOutput() {
    output.textContent = ""
}

document.getElementById("btnLoadWeather").onclick = loadWeather

async function loadWeather() {
    clearOutput()

    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=62.8924&longitude=27.6770&current=temperature_2m,wind_speed_10m")

        if (!response.ok) {
            throw new Error("HTTP error: " + response.status)
        }

        const data = await response.json()
        console.log(data)

        cityText.textContent = data.timezone
        temperatureText.textContent = data.current.temperature_2m + " " + data.current_units.temperature_2m
        windText.textContent = data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m

    } catch (error) {
        log("Error: " + error)
    }

    // TODO: fetch data from API
}