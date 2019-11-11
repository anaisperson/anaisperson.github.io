class Obstacle {
  constructor(ingredient) {
    this.ingredient = ingredient;

    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 100;
      this.h = this.w / imgRatio;
      this.x = 1100;
      this.y = H/2-this.h/2;
    }   

    img.src = "images/" + ingredient + ".png";;
  }

  paint() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }


  hits(pizza) {
    return (
      (pizza.x+pizza.w >= this.x && pizza.x <= this.x+this.w)
      &&
      (pizza.y <= this.y+this.h && pizza.y+pizza.h >= this.y)
    );
  }
}

// function looseGame()
// {
//     stopGame();
//     gameStatus = "gameLost";

//     displayScore.innerHTML = score;
//     lost.style.display = "block";
//     pauseButton.style.display = "none";
//     restartButton.style.display = "block";
// }