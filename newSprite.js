function newSprite(url){
    let sprite = document.createElement('img')
    sprite.src = url
    sprite.style.position = 'absolute'
    document.body.append(sprite)
    return sprite
}