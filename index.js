const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const inputText = document.getElementById("input-text")
const inputDiv = document.getElementById("input-div")
const letterSelect = document.getElementById("letter-select")


function doesMyNameStartWith() {
    const name = inputEl.value
    if (name.charAt(0) === letterSelect.value.toUpperCase() || name.charAt(0) === letterSelect.value.toLowerCase()) {
        inputText.textContent = `YES, your name starts with a(n) "${letterSelect.value}"`
    } else {
        inputText.textContent = `NO, your name DOES NOT start with a(n) "${letterSelect.value}"`
    }
}

function reset() {
    inputEl.value = ""
    inputText.textContent = ""
    letterSelect.value = "A"
}