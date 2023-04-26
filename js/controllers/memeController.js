'use strict'
let gElCanvas
let gCtx



function renderMeme() {
    const meme = getMeme()

    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    const elImg = new Image()
    elImg.src = `imgs1/${meme.selectedImgId}.jpg`

    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        gCtx.font = meme.lines[meme.selectedLineIdx].size.toString() + 'px '+ meme.lines[meme.selectedLineIdx].font
        gCtx.strokeStyle = meme.lines[meme.selectedLineIdx].strokeColor
        gCtx.fillStyle = meme.lines[meme.selectedLineIdx].fillColor
        gCtx.textAlign = meme.lines[meme.selectedLineIdx].align
        const text = (meme.lines[meme.selectedLineIdx].txt) ? meme.lines[meme.selectedLineIdx].txt : 'Add text'

        // const canvasHeight = (!meme.selectedLineIdx)? gElCanvas.height/4 : gElCanvas.height/2
        // const canvasWidth = (!meme.selectedLineIdx)? gElCanvas.width/4 :  gElCanvas.width/2
            gCtx.strokeText(text, gElCanvas.height/4, gElCanvas.width/4)
            gCtx.fillText(text, gElCanvas.height/4,  gElCanvas.width/4)
      
            gCtx.strokeText(text,  gElCanvas.height/2, gElCanvas.width/2)
            gCtx.fillText(text, gElCanvas.height/2,  gElCanvas.width/2)
  
        
    }
}

function renderMeme() {
    const gElCanvas = document.querySelector('#my-canvas')
    const gCtx = gElCanvas.getContext('2d')
    const meme = getMeme()
    const elImg = new Image() // Create a new html img element
    elImg.src = `imgs1/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach((line, idx) => {
            gCtx.font = `${line.size}px ${line.font}`
            gCtx.fillStyle = line.fillColor
            gCtx.strokeStyle = line.strokeColor
            gCtx.textAlign = line.align
            const canvasWidth = (!idx) ? gElCanvas.width / 2 : gElCanvas.width / 4
            const canvasHeight = (!idx) ? gElCanvas.height / 4 : gElCanvas.height / 2
            const text = (line.txt) ? line.txt : 'Add text'
            gCtx.fillText(text, canvasWidth, canvasHeight)
            gCtx.strokeText(text, canvasWidth, canvasHeight)
        })
    }
}


function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onSetFillColor(color){
    setFillColor(color)
    renderMeme()
}

function onSetStrokeColor(color){
    setStrokeColor(color)
    renderMeme()
}

function onSetFontSize(size) {
    setFontSize(size)
    renderMeme()
}

function onSwitchLine(){
    SwitchLine()
    renderMeme()
}

function onSetFontFamily(font){
    setFontFamily(font)
    renderMeme()
}

function onRemoveLine(){
    removeLine()
    renderMeme()
}

function onSetAlignText(align){
    setAlignText(align)
    renderMeme()
}

function downloadCanvas(elLink) {
    console.log('HI')
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')
    const data = gElCanvas.toDataURL() 
    elLink.href = data 
    elLink.download = 'my-img' 
}

function onSaveMeme(){
    saveMeme()
    renderMeme()
}