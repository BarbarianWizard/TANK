class Enemy {
  constructor(x, y) {
    const element = sprite('./assets/enemies/static.gif')
    element.style.zIndex = 1;
    // position
    element.style.left = x + 'px'
    element.style.bottom = y + 'px'

    this.element = element;
    
    
  }

  getElement() {
    return this.element;
  }

     
}


