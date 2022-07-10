
const player = defender(400, 110)

// Create enemies
// const russians = russian(450, 400)// have the Russians begin their advance
// russian.advance()

let enemy = new Enemy(500, 500);
let tank = enemy.getElement();

let javelin;
document.addEventListener('keydown', function(e){
    
    if(e.key === ' '){
        javelin = projectile(gx, gy)
    }
    
}) 

function isCollide(a, b) {
    if (!a || !b) return false;
    
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

setInterval(() => {
    const hasCollided = isCollide(javelin, tank)
    console.log(hasCollided)
}, 100)