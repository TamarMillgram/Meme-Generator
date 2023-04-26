'use strict'
let gElCanvas
let gCtx


renderMeme()

function renderMeme() {
    const meme = getMeme()


    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    const elImg = new Image()
    elImg.src = `imgs1/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.font = '30px Arial'
        gCtx.strokeStyle = meme.lines[0].color
        gCtx.fillStyle = meme.lines[0].color
        const text = (meme.lines[0].txt) ? meme.lines[0].txt : 'Add text'
        gCtx.strokeText(text, 10, 50)
        gCtx.fillText(text, 10, 50)
    }
}

function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}
