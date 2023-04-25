'use strict'
let gElCanvas
let gCtx


renderMeme()

function renderMeme() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    saveAndRestoreExample()
    drawImg()
}

function drawImg() {
    const elImg = new Image() // Create a new html img element
    elImg.src = 'imgs1/1.jpg' // Send a network req to get that image, define the img src
    console.log('elImg:', elImg)
    // When the image ready draw it on the canvas
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function saveAndRestoreExample() {
    gCtx.font = '30px Arial'
    gCtx.strokeStyle = 'green'
    gCtx.strokeText('Saving the context', 10, 50)

    gCtx.save() // Saves the current drawing style state using a stack.
    gCtx.font = '25px sans serif'
    gCtx.strokeStyle = 'black'
    gCtx.strokeText('Switching to something else', 10, 100)

    gCtx.restore() // Restores the drawing style state to the last element on the 'state stack' saved by save().

    gCtx.strokeText('Back to previous context', 10, 150)
}