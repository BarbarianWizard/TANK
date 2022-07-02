function sprite(url){
    let element = document.createElement('img')
    element.src = url
    element.style.position = 'fixed'
    document.body.append(element)
    
    return element
}