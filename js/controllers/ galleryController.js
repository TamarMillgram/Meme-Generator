'use strict'


function onInitGallery() {
    renderGallery()
}


function renderGallery() {

    const gallery = document.querySelector('.gallery')
    let img = ''
    for (let i = 0; i < 18; i++) {
        img += `<img src="imgs1/${i + 1}.jpg" onclick="onImgSelect(this)">`
    }

    gallery.innerHTML = img
}

function onImgSelect(img){
    setImg() 
    renderMeme()
}