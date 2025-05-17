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

document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const displayBtn = document.getElementById("displayBtn");

    const savedNumber = localStorage.getItem('savedNumber');
    if (savedNumber) {
        inputText.value = savedNumber;
        displayNumber(savedNumber);
    }

    displayBtn.addEventListener("click", () => {
        const value = inputText.value.trim();

        if (/^\d{1,3}$/.test(value)) {
            localStorage.setItem('savedNumber', value);
            displayNumber(value);
        } else {
            alert("Please enter a number between 0 and 999.");
        }
    });
});

function displayNumber(number) {
    const segmentMap = {
        '0': ['a','b','c','d','e','f'],
        '1': ['b','c'],
        '2': ['a','b','g','e','d'],
        '3': ['a','b','c','d','g'],
        '4': ['f','g','b','c'],
        '5': ['a','f','g','c','d'],
        '6': ['a','f','e','d','c','g'],
        '7': ['a','b','c'],
        '8': ['a','b','c','d','e','f','g'],
        '9': ['a','b','c','d','f','g']
    };

    const digitDivs = document.querySelectorAll(".digit");

    digitDivs.forEach((digit, index) => {
        digit.style.display = 'none';
        digit.querySelectorAll(".segment").forEach(seg => seg.classList.remove("on"));
        const digitChar = number[number.length - digitDivs.length + index] || null;
        if (digitChar) {
            digit.style.display = 'inline-block'; 
            const segments = segmentMap[digitChar];
            segments.forEach(seg => {
                digit.querySelector(.segment.${seg}).classList.add("on");
            });
        }
    });
} 