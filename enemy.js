class Enemy {
  constructor(x, y) {
    const element = sprite('./assets/enemies/static.gif')
    element.style.zIndex = 1;
    // position
    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    }

  //function hit(){

  // }


   
}



//   hit(damage) {
//     hp-=damage
//   }

//   getBounds() {
    
//   }


/*

Box 1: x 200 y 200 width 200 height 200
Box 2: x 195 y 195 width 10 height 10

200,200
400,400

195,195
205,205

is 195,195 > 200,200 || 195,195 < 400,400 no
is 205,205 > 200,200 || 205,205 < 400,400 yes

*/