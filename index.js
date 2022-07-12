
const player = defender(400, 110)

let enemy = new Enemy(500, 500);

let tank = enemy.getElement();


let javelin;
document.addEventListener('keydown', function(e){
    
    if(e.key === ' '){
        javelin = projectile(gx, gy)
    }
    
}) 




setInterval(() => {
    const hasCollided = isCollide(javelin, tank)
    

if (hasCollided) {
    const element = sprite(`./assets/explosion.gif`)
    element.style.zIndex = 1;
        tank.replaceWith(element)
        javelin.replaceWith()
        
        
        } 
}, 100)

