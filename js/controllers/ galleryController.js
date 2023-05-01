'use strict'


function onInitGallery() {
    renderGallery()
    renderKeywords() 
    showGallery()
}

function renderKeywords() {
    const keywords = getKeywords()
    console.log('keywords',keywords);
    const strHTMLs = keywords.map(keyword => `<a class="keyword" id="${keyword}" onclick="renderGallery(this.id)"> ${keyword}</a>`);
    document.querySelector('.keywords-container').innerHTML = strHTMLs.join('')
}

function renderGallery(keyword) {
    let imgs = getImgs(keyword)
    const gallery = document.querySelector('.gallery')
    let strHTML = `<label for="file-upload" class="file-upload">
    Choose file</label><input type="file" class="file-input btn" id="file-upload" name="image" onchange="onImgInput(event)"/>`
    const strHTMLs = imgs.map((img,idx) =>`<img class="img${idx}" src="${img.url}" onclick="onImgSelect(this.id)" id="${img.id}">`)
    const msg = `<p style="text-align: center">Sorry, no match found. Please try searching for something else.`
    gallery.innerHTML = (imgs.length)? strHTMLs.join('') : msg
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
    document.querySelector('.meme-container').classList.add('display-none')
    document.querySelector('.gallery-container').classList.remove('display-none')

}

function hideGallery() {
    document.querySelector('.gallery-container').classList.add('display-none')
}



