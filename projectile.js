 function projectile(gx, gy) {
    let x = gx;
    let y = gy;
    
        const javelin = sprite(`assets/player/javelin.gif`)
        javelin.style.bottom = `${y}px`
        javelin.style.left = `${x}px`
        console.log(x, y)
        
       
shoot(javelin).withSpace(gx, gy)
return javelin;

 }
 