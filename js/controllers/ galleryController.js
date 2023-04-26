'use strict'


function onInitGallery() {
    renderGallery()
}


function renderGallery() {
    let imgs = getImgs()
    const gallery = document.querySelector('.gallery')
    const strHTMLs = imgs.map((img,idx) =>`<img class="img${idx}" src="${img.url}" onclick="onImgSelect(this.id)" id="${img.id}">`)
    gallery.innerHTML =  strHTMLs.join('')
}

function onImgSelect(imgId){
    setImg(imgId) 
    renderMeme()
    onShowMemeEditor()
}


function onShowMemeEditor(){
    document.querySelector('.meme-container').hidden = false
    document.querySelector('.gallery-container').hidden = true
}