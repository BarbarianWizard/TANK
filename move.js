function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        dx = left;
        dy = bottom;

        element.style.left = dx + 'px'
        element.style.bottom = dy + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                dx-=1
            }
            if(direction === 'east'){
                dx+=1
            }
            element.style.left = dx + 'px'
            element.style.bottom = dy + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}