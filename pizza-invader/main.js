// Déclarer les variables 
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
let frames = 0;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;


// Commencer le jeu en cliquant sur le bouton start
document.getElementById("start-button").onclick = function() {
  startGame();
};

// Faire bouger la pizza avec les flèches haut et bas
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

// Boucle d'animation
function animLoop() {
  frames++;
  draw();

  // Quand le jeu est perdu
  if (!stopgame) {
    requestAnimationFrame(animLoop);
  } else {
    ctx.clearRect(0, 0, W, H);
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(" 🔥👎 GAME OVER !!! 👎🔥", W/2, H/2);
  }

// Quand le jeu est gagné
  if (stopgame && win) {
    ctx.clearRect(0, 0, W, H);
    ctx.font = "50px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("🇮🇹🍕❤️ You're a real pizzaiolo !❤️ 🍕🇮🇹 ", W/2, H/2);
  }
}

// Dessiner les obstacles dans le canvas
function draw() {
  ctx.clearRect(0, 0, W, H); // 🧽

  pizza.paint();

  // Générer une recette aléatoire à partir du tableau des ingrédients
  if (frames % 100 === 0) {
    let ingredient = ingredients[Math.floor(Math.random() * 8)];
    obstacles.push(new Obstacle(ingredient));
  }

  // Obstacles
  obstacles.forEach(function(obstacle) {
    obstacle.x -= 10;
    obstacle.paint();

    // 1. détecter la collision
    obstacles.forEach(function (obstacle, index) {
      let crashed = obstacle.hits(pizza);

      if (crashed) {
        // si l'obstacle avec lequel ca vient de crasher correspond à un ingredient de la liste (obstacle.ingredient doit etre dans la recette)
        if (recette.includes(obstacle.ingredient)) {
          if (!caughtedIngredients.includes(obstacle.ingredient)) {
            caughtedIngredients.push(obstacle.ingredient); 
          }

          caughtedIngredients = caughtedIngredients.sort(function (a, b) {
            return a.localeCompare(b);
          });

          recette = recette.sort(function (a, b) {
            return a.localeCompare(b);
          });

          // gagner ou perdre
          if (JSON.stringify(caughtedIngredients) === JSON.stringify(recette)) {
            stopgame = true;
            win = true;
          }
        } else {
          stopgame = true;
        }

        obstacles.splice(index, 1);
      }
    });
  });
}

// Start Game
function startGame() {
  // Générer une pizza
  pizza = new PizzaInvader(); // 🍕

  // Générer une recette aléatoire à partir d'un array d'ingrédients
  recette = ingredients.slice(Math.random() * ingredients.length);
  const $recette = document.getElementById('recette');
  $recette.innerHTML = "<p> ✨ 👉 Votre recette, si vous l'acceptez : " + recette.join(', ') + " 🧾 ✨</p>"

  ingredients.push("ananas");

  // Start de la boucle d'animation
  requestAnimationFrame(animLoop);
}


