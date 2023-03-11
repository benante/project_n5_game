const combinations = {
  rock: { scissors: "You win!", paper: "Computer wins", rock: "Draw" },
  paper: { rock: "You win!", scissors: "Computer wins", paper: "Draw" },
  scissors: { paper: "You win!", rock: "Computer wins", scissors: "Draw" },
};
const items = ["rock", "paper", "scissors"];

let game = true;

const selection_imgs = document.querySelectorAll(".user_pic");
const random_pic = document.getElementById("random");
const button = document.querySelector("button");
const pic = document.getElementById("random");
const computer = document.getElementById("computer");

selection_imgs.forEach((img) => {
  img.addEventListener("click", () => {
    if (game == true) {
      let user_item = img.id;
      let selectedItem = document.getElementById(user_item);
      selectedItem.classList.add("highlight");
      roll_dice();
      setTimeout(() => {
        let computer_item = items[random()];
        let result = scoring(combinations, user_item, computer_item);
        document.querySelector("span").innerHTML = result;
      }, 1050);
    }
    game = false;
  });
});

button.addEventListener("click", () => {
  if (game == false) {
    computer.classList.toggle("hide");
    pic.classList.toggle("hide");
    let remove = document.getElementsByClassName("highlight")[0];
    remove.classList.remove("highlight");
    document.querySelector("span").innerHTML = "VS";
  }
  game = true;
});

// FUNCTIONS

// Check result
function scoring(combinations, user_item, computer_item) {
  console.log("User chose " + user_item);
  console.log("computer chose " + computer_item);
  return combinations[user_item][computer_item];
}

// Get random computer choice
function random() {
  let random = Math.floor(Math.random() * 3);
  pic.src = "./static/" + items[random] + ".png";
  return random;
}

// Simple "rolling dice" visual effect
function roll_dice() {
  // let image = document.getElementById("random");
  computer.classList.toggle("hide");
  pic.classList.toggle("hide");
  let temporary_roll = setInterval(function () {
    let random = Math.floor(Math.random() * 3);
    pic.src = "./static/" + items[random] + ".png";
  }, 40);
  setTimeout(function () {
    clearInterval(temporary_roll);
  }, 1000);
}
