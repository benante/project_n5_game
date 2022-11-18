const combinations = {
  "rock": { "scissors": "You win!", "paper": "Computer wins", "rock" : "Draw" },
  "paper": { "rock": "You win!", "scissors": "Computer wins" , "paper": "Draw"},
  "scissors": { "paper": "You win!", "rock": "Computer wins" , "scissors" : "Draw"},
};

const images = ["rock.png", "paper.png", "scissors.png"];

let user_score = 0;
let pc_score = 0;

let user_item = "";
let game = false;

const selection_imgs = document.querySelectorAll(".user_pic");

selection_imgs.forEach((img) => {
  img.addEventListener("click", () => {
    user_item = img.id;
    document.getElementById(user_item).classList.add("highlight");
    roll_dice();
    let result = scoring(combinations, user_item, "scissors")
  });
});

// FUNCTIONS
function scoring(combinations, user_item, computer_item) {
  return combinations[user_item][computer_item];
}

function roll_dice() {
  let image = document.getElementById("random");
  image.classList.toggle("hide");
  let temporary_roll = setInterval(function () {
    let random = Math.floor(Math.random() * 3);
    image.src = "/static/" + images[random];
  }, 60);

  setTimeout(function () {
    clearInterval(temporary_roll);
  }, 1000);
}


