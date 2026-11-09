const appreciateBtn = document.getElementById("appreciateBtn");
const thankYouText = document.getElementById("thankYouText");
const confettiContainer = document.getElementById("confetti");

const symbols = ["♥", "✦", "•", "✿", "★"];

appreciateBtn.addEventListener("click", () => {
    thankYouText.classList.remove("hidden");
    appreciateBtn.innerHTML = "<span>💙</span> Appreciation Sent!";

    createConfetti(45);

    setTimeout(() => {
        appreciateBtn.innerHTML = "<span>💐</span> Send Appreciation";
    }, 2500);
});

function createConfetti(amount) {
    for (let i = 0; i < amount; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";

        piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.fontSize = (10 + Math.random() * 12) + "px";
        piece.style.animationDuration = (1.8 + Math.random() * 1.8) + "s";
        piece.style.animationDelay = Math.random() * 0.35 + "s";

        confettiContainer.appendChild(piece);

        setTimeout(() => piece.remove(), 4000);
    }
}
