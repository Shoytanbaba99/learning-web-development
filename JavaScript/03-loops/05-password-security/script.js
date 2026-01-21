const passInput = document.getElementById("passInput");
const validateBtn = document.getElementById("validateBtn");
const ruleLength = document.getElementById("ruleLength");
const ruleNum = document.getElementById("ruleNum");
const ruleSymbol = document.getElementById("ruleSymbol");
validateBtn.addEventListener("click", () => {
    const password = passInput.value;

    let hasLength = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (password.length >= 8) {
        hasLength = true;
    }

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (char >= "0" && char <= "9") {
            hasNumber = true;
        }

        if (char === "@" || char === "#" || char === "$") {
            hasSymbol = true;
        }
    }



    if (hasLength) {
        ruleLength.textContent = "✅ At least 8 characters";
        ruleLength.style.color = "green";
    } else {
        ruleLength.textContent = "❌ At least 8 characters";
        ruleLength.style.color = "red";
    }

    if (hasNumber) {
        ruleNum.textContent = "✅ Contains a number";
        ruleNum.style.color = "green";
    } else {
        ruleNum.textContent = "❌ Contains a number";
        ruleNum.style.color = "red";
    }

    if (hasSymbol) {
        ruleSymbol.textContent = "✅ Contains a symbol (@, #, $)";
        ruleSymbol.style.color = "green";
    } else {
        ruleSymbol.textContent = "❌ Contains a symbol (@, #, $)";
        ruleSymbol.style.color = "red";
    }
});
