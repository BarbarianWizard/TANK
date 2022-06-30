function defender(x, y) {
    const element = newSprite(`assets/player/static.gif`)
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/player/static.gif`
        }
        
         if (direction === 'west') {
            element.src = `assets/player/left.gif`
        }
        
         if (direction === 'east') {
            element.src = `assets/player/right.gif`
        }
                console.log(direction)
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}