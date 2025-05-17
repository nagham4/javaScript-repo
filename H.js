const inputText = document.getElementById("inputText");
const displayBtn = document.getElementById("displayBtn");
const errorMsg = document.getElementById("errorMsg");
const displayNum = document.getElementById("displayArea");

const showNumber = (number) => {
    displayNum.innerHTML = '';
    [...number].forEach(digit => {
        const span = document.createElement('span');
        span.className = 'digit';
        span.textContent = digit;
        displayNum.appendChild(span);
    });
};

const clearDisplay = () => {
    displayNum.innerHTML = '';
};

const validateInput = (input) => /^-?\d{1,3}$/.test(input); // Allow optional "-" for negative numbers

displayBtn.addEventListener("click", () => {
    const value = inputText.value.trim();

    if (!validateInput(value)) {
        errorMsg.textContent = "Please enter a valid number (1 to 3 digits only)";
        clearDisplay();
        return;
    }

    if (Number(value) < 0) {
        errorMsg.textContent = "Negative numbers are not allowed.";
        clearDisplay();
        return;
    }

    errorMsg.textContent = "";
    localStorage.setItem("savedNumber", value);
    showNumber(value);
});

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("savedNumber");
    if (saved && Number(saved) >= 0) {
        inputText.value = saved;
        showNumber(saved);
    }
});
