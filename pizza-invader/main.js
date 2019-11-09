let pizza;
let obstacles = [];
let ingredients = [
  "tomate",
  "fromage",
  "champignon",
  "olive",
  "peperoni",
  "piment",
  "poivron",
];
let recette = [];
let gameover;
//const lost = document.getElementById("lost");

let frames = 0;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  ctx.clearRect(0, 0, W, H); // 🧽

  pizza.paint();

  if (frames % 100 === 0) {
    let ingredient = ingredients[Math.floor(Math.random() * 7)];

    // tirer au sort parmi la liste ingredients

    
    obstacles.push(new Obstacle(ingredient));

    // Générer une recette aléatoire

    
  }

  // Obstacles

  obstacles.forEach(function(obstacle) {
    obstacle.x -= 10;
    obstacle.paint();

    // 1. détecter la collision

    obstacles.forEach(function (obstacle, index) {
      let crashed = obstacle.hits(pizza);
      if (crashed) {
        console.log("crashed");

        // si l'obstacle avec lequel ca vient de crasher correspond à un ingredient de la liste (obstacle.ingredient doit etre dans la recette)
        if (recette.includes(obstacle.ingredient)) {
          console.log("continue")
        } // sinon loseGame
        else {
          console.log("loseGame")
          gameover = true;
          //looseGame();
        }

        obstacles.splice(index, 1);
      }
    });
    console.log(obstacle.hits(pizza));
  });
}

//Faire bouger la pizza
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38: // up arrow
      pizza.moveUp();
      break;
    case 40: // down arrow
      pizza.moveDown();
      break;
  }
};
document.onkeyup = function(e) {
  //player.speedX = 100;
  //player.speedY = 100;
};

function animLoop() {
  frames++;

  draw();

  if (!gameover) {
    requestAnimationFrame(animLoop);
  } else {
    console.log(`gameover final`);
    ctx.clearRect(0, 0, W, H);
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("game over", W/2, H/2);
  }
}

function startGame() {
  pizza = new PizzaInvader(); // 🍕

  let recette = ingredients.slice(Math.random() * ingredients.length);
  console.log(recette);
  const $recette = document.getElementById('recette');
  $recette.innerHTML = "<p>Voici les ingredients : " + recette.join(', ') + "</p>"


  // start de la boucle d'animation
  requestAnimationFrame(animLoop);
}

document.getElementById("start-button").onclick = function() {
  startGame();
};

//function looseGame()
//{
//    stopGame();
//    gameStatus = "gameLost";
//
//    displayScore.innerHTML = score;
//    lost.style.display = "block";
//    pauseButton.style.display = "none";
//    restartButton.style.display = "block";
//}


//autostart
//startGame();
