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

        const temp = data.current.temperature_2m
        const wind = data.current.wind_speed_10m

        cityText.textContent = "Kuopio"
        temperatureText.textContent = temp + " °C"
        windText.textContent = wind + " km/h"

        log(`City: Kuopio`)
        log(`Temperature: ${temp} °C`)
        log(`Wind speed: ${wind} km/h`)

    } catch (error) {
        log("Error: " + error.message)
    }
}