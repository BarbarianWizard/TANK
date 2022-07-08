/*
function russian(gx, gy) {
    let x = gx
    let y = gy
    
    let tank = sprite('./assets/enemies/static.gif')
    tank.style.zIndex = 1;
    let direction = null;
    

    
    //move(element).coordinates(x, y)


     function invade() {
        

        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        tank.style.left = x + 'px'
        tank.style.bottom = y + 'px'

        // 
    }

    setInterval(invade, 1)}
/*
    function turnEast() {
        direction = 'east'
        tank.src = `./assets/enemies/static.gif`
    }
  

    function turnWest() {
        direction = 'west'
        tank.src = `./assets/enemies/static.gif`
    }

    function turnSouth() {
        direction = 'south'
        tank.src = `./assets/enemies/static.gif`
    }

    function stop() {
        direction = null
        tank.src = `./assets/enemies/static.gif`
    }

    
    return {
        tank: tank,
        turnWest: turnWest,
        turnEast: turnEast,
        turnSouth: turnSouth,
        stop: stop
    }


}  */