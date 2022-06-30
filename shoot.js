function shoot(element) {
    const element = newSprite(`assets/player/javelin.gif`)
    element.style.position = defender(x,y)

    function path(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function shootWithSpace(left, bottom, callback){
        let direction = 'north';
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function launch(){ 
            if(direction === 'north'){
               y+=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(launch, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'Space'){
                direction = 'north'
            }
            console.log('space pressed')
        })
                
    }

    return {
        to: path,
        withSpaceBar: shootWithSpace
    }
}