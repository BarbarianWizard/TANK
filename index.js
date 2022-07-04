
const player = defender(400, 110)

// Create enemies
const russians = russian(450, 400)// have the Russians begin their advance
// russian.advance()

let javelin = document.addEventListener('keydown', function(e){
    if(e.key === ' '){
        projectile(gx, gy)
    }
}) 

const collision = hit()
