function shoot(element) {
    element.style.position = 'fixed'   
   
        function shootWithSpace(left, bottom){
        let x = left;
        let y = bottom;

        element.style.left = x
        element.style.bottom = y
        
        function launch(){ 
             if(direction === 'north'){
                y+=1
             }
            element.style.left = x + 14 + 'px'
            element.style.bottom = y + 'px'
        }

        

          setInterval(launch, 1)
        
          document.addEventListener('keydown', function(e){
             if(e.key === ' '){
                 direction = 'north'
             }
             console.log('space pressed')
         })
                        
    }

    return {
        withSpace: shootWithSpace
    }
}