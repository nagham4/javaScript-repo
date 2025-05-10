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

    // Clear all segments
    digitDivs.forEach(digit => {
        digit.querySelectorAll(".segment").forEach(seg => seg.classList.remove("on"));
    });

    // Pad number to 3 digits (left)
    const padded = number.padStart(3, ' ');
    for (let i = 0; i < 3; i++) {
        const digitChar = padded[i];
        if (digitChar === ' ') continue;

        const segments = segmentMap[digitChar];
        if (!segments) continue;

        const digit = digitDivs[i];
        segments.forEach(seg => {
            digit.querySelector(`.segment.${seg}`).classList.add("on");
        });
    }
}



/*document.getElementById("displayBtn").onclick = function () {
    const inputElement = document.getElementById("inputText");
    const displayElement = document.getElementById("display");
    const num = inputElement.value;

    // Validate input: must be 1 to 3 digits only
    if (/^\d{1,3}$/.test(num)) {
        displayElement.innerHTML = '';

        for (let digit of num) {
            let span = document.createElement("span");
            span.className = "segment";
            span.textContent = digit;
            displayElement.appendChild(span);
        }
    } else {
        alert("Please enter a number between 1 and 3 digits only!");
    }
};
window.addEventListener('DOMContentLoaded', () => {
    const savedNumber = localStorage.getItem('savedNumber');
    if (savedNumber !== null) {
      displayNumber(savedNumber); // 
      document.getElementById('inputText').value = savedNumber;
    }
  });
  
  // 
  const handleDisplayClick = () => {
    const input = document.getElementById('inputText').value.trim();
  
    if (validateInput(input)) {
      localStorage.setItem('savedNumber', input); // 
      displayNumber(input); // 
    } else {
      displayError('الرجاء إدخال رقم صحيح من 1 إلى 3 خانات'); // 
    }
  };*/