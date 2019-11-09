

//Générer des recettes aléatoirement
//function getRandomInt(max) {
//  return Math.floor(Math.random() * Math.floor(max));
//}
//console.log(getRandomInt(3));

// Dessiner un ingrédient

//var ball = {
//  x: 0,
//  y: 0,
//  vx: 5,
//  vy: 2,
//  radius: 25,
//  color: 'blue',
//  draw: function() {
//    ctx.beginPath();
//    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
//    ctx.closePath();
//    ctx.fillStyle = this.color;
//    ctx.fill();
//  }
//};
//
//ball.draw();
//
//
//
//
//
//
//
//

//
//
//
//
//
//

//
//
//
//
//
//
//
//
// POINTS

//ctx.font = "50px Verdana";
//ctx.textAlign = "center";
//ctx.fillStyle = "yellow";
//ctx.fillText(`${points} pts`, W-50, 100);
//points++;
//
//console.log('keydown');
//switch (e.keyCode) {
//  case 38: // up
//    pizza.moveUp();
//    break;
//  case 34: // down
//    pizza.moveDown();
//    break;
//}
//
//let raf;
//let frames = 0;
//function animLoop() {
//  frames++;
//
//  draw();
//
//  if (!gameover) {
//    raf = requestAnimationFrame(animLoop);
//  }
//}
//
//function startGame() {
//  if (raf) {
//    cancelAnimationFrame(raf);
//  }
//
//  gameover = false;
//  points = 0;
//
//  pizza = new Pizza();
//  obstacles = [];
//
//  raf = requestAnimationFrame(animLoop);
//}
//
//document.getElementById("start-button").onclick = function() {
//  startGame();
//};
//
//
//
//
//
//
//
//
// INGREDIENTS

//var ingredients = ['tomate', 'fromage', 'champignon', 'olive', 'peperoni', 'piment', 'poivron'];
////console.log(ingredients.length);
//
//
//
//
//
//
//
//
//
//// RECETTES
//
//var recetteUn = ingredients.slice(0,1); //margherita
//var recetteDeux = ingredients.slice(0,1,2); //reine
//var recetteTrois = ingredients.slice(0,2,4); //pizza bizarre 1
//var recetteQuatre = ingredients.slice(4,5,6); //pizza bizarre 2

// console.log(ingredients.slice(0,1)); // margherita
// console.log(ingredients.slice(0,1)); // margherita



// Lancer le décompte

//<button onclick="start()">Lancer le décompte</button>
//<div id="bip" class="display"></div>
//
//<script>
//var counter = 10;
//var intervalId = null;
//function finish() {
//  clearInterval(intervalId);
//  document.getElementById("bip").innerHTML = "TERMINE!";	
//}
//function bip() {
//    counter--;
//    if(counter == 0) finish();
//    else {	
//        document.getElementById("bip").innerHTML = counter + " secondes restantes";
//    }	
//}
//function start(){
//  intervalId = setInterval(bip, 1000);
//}	
//</script>
