class PizzaInvader {
  constructor() {
    const img = document.createElement('img');
    img.onload = () => {
      // Une fois que l'image est chargée
      this.img = img;

      const imgRatio = img.naturalWidth/img.naturalHeight;

      this.w = 300;
      this.h = this.w / imgRatio;
      this.x = 10;
      this.y = H/2-this.h/2;
    }   

    img.src = "images/pizza-invader.png";
  }

  paint() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
        
  moveUp() {
    this.y -= 50;
  }

  moveDown() {
    this.y += 20;
  }

}