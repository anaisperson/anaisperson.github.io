// Class Obstacle 
class Obstacle {
  constructor(ingredient) {
    this.ingredient = ingredient;
    
    // Définir le format des obstacles
    const img = document.createElement('img');
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 100;
      this.h = this.w / imgRatio;
      this.x = 1100;
      this.y = H/2-this.h/2;
    }   

    // Relier chaque ingrédient à son image
    img.src = "images/" + ingredient + ".png";
  }

  // Faire apparaître les ingrédients obstacles
  paint() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  // Détection des collisions
  hits(pizza) {
    return (
      (pizza.x+pizza.w >= this.x && pizza.x <= this.x+this.w)
      &&
      (pizza.y <= this.y+this.h && pizza.y+pizza.h >= this.y)
    );
  }
}
