function russian(x, y) {
    let element = sprite('./assets/enemies/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

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
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(invade, 1)

    function turnEast() {
        direction = 'east'
        element.src = `./assets/enemies/static.gif`
    }
  

    function turnWest() {
        direction = 'west'
        element.src = `./assets/enemies/static.gif`
    }

    function turnSouth() {
        direction = 'south'
        element.src = `./assets/enemies/static.gif`
    }

    function stop() {
        direction = null
        element.src = `./assets/enemies/static.gif`
    }

    return {
        element: element,
        turnWest: turnWest,
        turnEast: turnEast,
        turnSouth: turnSouth,
        stop: stop
    }
}