const combinations = {
  rock: { scissors: "You win!", paper: "Computer wins", rock: "Draw" },
  paper: { rock: "You win!", scissors: "Computer wins", paper: "Draw" },
  scissors: { paper: "You win!", rock: "Computer wins", scissors: "Draw" },
};
const items = ["rock", "paper", "scissors"];

let game = true;

const userOptions = document.querySelectorAll(".user_pic");
const restartButton = document.querySelector("button");
const randomSelection = document.getElementById("random");
const computer = document.getElementById("computer");

// Start game when user clicks on icon
userOptions.forEach((img) => {
  img.addEventListener("click", () => {
    if (game == true) {
      let user_item = img.id;
      let selectedItem = document.getElementById(user_item);
      selectedItem.classList.add("highlight");
      // Start visual rolling dice function
      roll_dice();
      // Get the actual randomized item, display the corresponding icon and the result after 1050 milliseconds
      setTimeout(() => {
        let computer_item = items[randomize()];
        let result = scoring(combinations, user_item, computer_item);
        document.querySelector("span").innerHTML = result;
      }, 1050);
    }
    game = false;
  });
});

// If game is done (false), reset icons and message
restartButton.addEventListener("click", () => {
  if (game == false) {
    computer.classList.toggle("hide");
    randomSelection.classList.toggle("hide");
    let remove = document.getElementsByClassName("highlight")[0];
    remove.classList.remove("highlight");
    document.querySelector("span").innerHTML = "VS";
  }
  game = true;
});

// FUNCTIONS

// Check result
function scoring(combinations, user_item, computer_item) {
  return combinations[user_item][computer_item];
}

// Get random computer choice and corresponding item (with its img)
function randomize() {
  let random = Math.floor(Math.random() * 3);
  randomSelection.src = "./static/" + items[random] + ".png";
  return random;
}

// Simple "rolling dice" visual effect
function roll_dice() {
  computer.classList.toggle("hide");
  randomSelection.classList.toggle("hide");
  // Call randomize() every 0.04 seconds intervals with setInterval
  let temporary_roll = setInterval(function () {
    randomize();
  }, 40);
  // ClearInterval interrupts the function after 1 second with setTimeout
  setTimeout(function () {
    clearInterval(temporary_roll);
  }, 1000);
}
