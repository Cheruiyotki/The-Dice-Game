function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    var header = document.querySelector("h1");

    if (randomNumber1 > randomNumber2) {
        header.textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        header.textContent = "Player 2 Wins! 🚩";
    } else {
        header.textContent = "It's a Draw! 🎲";
    }

    console.log("Player 1:", randomNumber1, "Player 2:", randomNumber2);
}
