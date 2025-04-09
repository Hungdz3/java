function guessNumber() {
    let userInput = document.getElementById("userInput").value;
    if (userInput === "") {
        document.getElementById("message").textContent = "Vui lòng nhập một số!";
        return;
    }
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    if (parseInt(userInput) === randomNumber) {
        document.getElementById("message").textContent = `Chúc mừng! Bạn đã đoán đúng số ${randomNumber}.`;
    } else {
        document.getElementById("message").textContent = `Sai rồi! Số đúng là ${randomNumber}. Hãy thử lại.`;
    }
}
