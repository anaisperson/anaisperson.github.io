// Dessiner un ingrédient

//var canvas = document.getElementById('canvas');
//var ctx = canvas.getContext('2d');
//
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

//ball.draw();

//Ajouter de la vitesse

//function draw() {
//    ctx.clearRect(0,0, canvas.width, canvas.height);
//    ball.draw();
//    ball.x += ball.vx;
//    ball.y += ball.vy;
//    raf = window.requestAnimationFrame(draw);
//  }
//  
//  canvas.addEventListener('mouseover', function(e){
//    raf = window.requestAnimationFrame(draw);
//  });
//  
//  canvas.addEventListener("mouseout",function(e){
//    window.cancelAnimationFrame(raf);
//  });
//  
//  ball.draw();

//class Ingredients {
//    constructor() {
//      // this.img
//      const img = document.createElement('img');
//      img.onload = () => {
//        // Une fois que l'image est chargée
//        this.img = img;
//  
//        const imgRatio = img.naturalWidth/img.naturalHeight;
//  
//        this.w = 300;
//        this.h = this.w / imgRatio;
//        this.x = 10;
//        this.y = H/2-this.h/2;
//      }   
//  
//      img.src = "images/champignon.png";
//    }
//  
//    paint() {
//      if (!this.img) return;
//      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//    }
//          
//    moveUp() {
//      this.y -= 50;
//      console.log("test")
//    }
//  
//    moveDown() {
//      this.y += 20;
//    }
//  
//  }