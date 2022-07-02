
const player = defender(400, 110)

// Create enemies
const russians = russian(450, 400)// have the Russians begin their advance
// russian.advance()


// const javelin = shoot()
document.addEventListener('keydown', function(e){
    if(e.key === ' '){
        shoot()
    }
    console.log('space pressed')
})