function shoot() {
    const element = sprite(`assets/player/javelin.gif`)
    element.style.bottom = `${dy}px`
    element.style.left = `${dx}px`
    console.log(dx, dy)
   
  function path(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function shootWithSpace(left, bottom){
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
        
        // setInterval(launch, 1)
        
        
                
    }

    return {
        to: path,
        withSpaceBar: shootWithSpace
    }
}