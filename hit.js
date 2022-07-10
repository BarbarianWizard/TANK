/* let x = element.style.left
let y = element.style.bottom

function boxCollision(object1, object2) {
        if (
                object1.x + object1.width >= object2.x &&
                object1.x <= object2.x + object2.width &&
                object1.y + object1.height >= object2.y &&
                object1.y <= object2.y + object2.height
        )
        return true
        console.log('collision detected')
}
.
*/

function isCollide(a, b) {
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
    
        return !(
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))
        );
    }