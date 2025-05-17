const inputText = document.getElementById("inputText");
const displayBtn = document.getElementById("displayBtn");
const errorMsg = document.getElementById("errorMsg");
const displayNum = document.getElementById("displayArea");




const validateInput = (input) => /^\d{1,3}$/.test(input);
displayBtn.addEventListener("click", () => {
    const value = inputText.value.trim();
    if (!validateInput(value)) {
    errorMsg.textContent = "Please enter a valid number (1 to 3 digits only)";
    clearDisplay();
    return;
    }
    errorMsg.textContent = "";
    localStorage.setItem("savedNumber", value);
    showNumber(value);
});

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("savedNumber");
    if (saved) {
    inputText.value = saved;
    showNumber(saved);
    }
});

