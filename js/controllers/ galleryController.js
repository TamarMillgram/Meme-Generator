'use strict'


function onInitGallery() {
    renderGallery()
    showGallery()
}

function renderGallery() {
    let imgs = getImgs()
    const gallery = document.querySelector('.gallery')
    let strHTML = `<label for="file-upload" class="file-upload">
    Choose file</label><input type="file" class="file-input btn" id="file-upload" name="image" onchange="onImgInput(event)"/>`
    const strHTMLs = imgs.map((img,idx) =>`<img class="img${idx}" src="${img.url}" onclick="onImgSelect(this.id)" id="${img.id}">`)
    gallery.innerHTML = strHTML += strHTMLs.join('')
}

function onImgSelect(imgId){
    setImg(imgId) 
    hideGallery()
    showMemeEditor() 
    renderStickers()
    renderMeme()
}

function showGallery() {
    document.querySelector('.meme-saved').classList.add('display-none')
    document.querySelector('.about-container').classList.add('display-none')
    document.querySelector('.gallery-container').classList.remove('display-none')
}

function hideGallery() {
    document.querySelector('.gallery-container').classList.add('display-none')
}



