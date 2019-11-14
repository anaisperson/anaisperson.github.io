// Class Pizza Invader
class PizzaInvader {
  constructor() {
    const img = document.createElement('img');

    // Définir le format de l'image Pizza au chargement
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 300;
      this.h = this.w / imgRatio;
      this.x = 10;
      this.y = H/2-this.h/2;
    }   

    img.src = "images/pizza-invader.png";
  }

  // Conditions de dessin de l'image
  paint() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
        
  // Faire bouger la pizza vers le haut avec la flèche haut
  moveUp() {
    this.y -= 50;
  }

  // Faire bouger la pizza vers le bas avec la flèche bas
  moveDown() {
    this.y += 20;
  }

}