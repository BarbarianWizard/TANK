let gx
let gy

function move(element) {
    element.style.position = 'fixed'

     function coordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    } 

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        gx = left;
        gy = bottom;

        element.style.left = gx + 'px'
        element.style.bottom = gy + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                gx-=1
            }
            if(direction === 'east'){
                gx+=1
            }
            if(direction === 'south'){
                gy-=1
            }
            element.style.left = gx + 'px'
            element.style.bottom = gy + 'px'
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
        to: coordinates,
        withArrowKeys: moveWithArrowKeys
    }
}