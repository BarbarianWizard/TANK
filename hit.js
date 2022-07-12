
function isCollide(a, b) {
        if (!a || !b) return false;
        
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
         
        if (
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))
         ) {
           
        }
        


     return !(
            ((aRect.top + aRect.height) < (bRect.top)) ||
            (aRect.top > (bRect.top + bRect.height)) ||
            ((aRect.left + aRect.width) < bRect.left) ||
            (aRect.left > (bRect.left + bRect.width))
        )

        
    }

