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
let stopgame;
let win;
let caughtedIngredients = [];
//const lost = document.getElementById("lost");

let frames = 0;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  ctx.clearRect(0, 0, W, H); // 🧽

  pizza.paint();

  // Générer une recette aléatoire à partir du tableau des ingrédients

  if (frames % 100 === 0) {
    let ingredient = ingredients[Math.floor(Math.random() * 7)];
    obstacles.push(new Obstacle(ingredient));
    // recette.push(ingredient);
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
          if (!caughtedIngredients.includes(obstacle.ingredient)) {
            caughtedIngredients.push(obstacle.ingredient); 
          }
          console.log("caughtedIngredients: ", caughtedIngredients);

          caughtedIngredients = caughtedIngredients.sort(function (a, b) {
            return a.localeCompare(b);
          });

          recette = recette.sort(function (a, b) {
            return a.localeCompare(b);
          });

          if (JSON.stringify(caughtedIngredients) === JSON.stringify(recette)) {
            stopgame = true;
            win = true;
          }
          //stopgame = false;
        } // sinon loseGame
        else {
          console.log("loseGame")
          stopgame = true;
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

  if (!stopgame) {
    requestAnimationFrame(animLoop);
  } else {
    console.log('stopgame final');
    ctx.clearRect(0, 0, W, H);
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("game over", W/2, H/2);
  }

  if (stopgame && win) {
    console.log('win');
      ctx.clearRect(0, 0, W, H);
      ctx.font = "50px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("You're a real pizzaiolo !", W/2, H/2);
  }
}



function startGame() {
  pizza = new PizzaInvader(); // 🍕

  recette = ingredients.slice(Math.random() * ingredients.length);
  console.log('RECETTE : ', recette);
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
