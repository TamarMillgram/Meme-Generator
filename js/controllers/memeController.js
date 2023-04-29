'use strict'
// let gElCanvas
// let gCtx





function renderMeme() {
    const gElCanvas = document.querySelector('#my-canvas')
    const gCtx = gElCanvas.getContext('2d')
    const meme = getMeme()

    const elImg = new Image()
    elImg.src = `imgs1/${meme.selectedImgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        meme.lines.forEach((line, idx) => {
            gCtx.font = `${line.size}px ${line.font}`
            gCtx.fillStyle = line.fillColor
            gCtx.strokeStyle = line.strokeColor
            gCtx.textAlign = line.align
            // const canvasWidth = (!idx) ? gElCanvas.width / 2 : gElCanvas.width / 4
            // const canvasHeight = (!idx) ? gElCanvas.height / 4 : gElCanvas.height / 2
            const text = (line.txt) ? line.txt : ''
            gCtx.fillText(text,  line.pos.x, line.pos.y)
            gCtx.strokeText(text,  line.pos.x, line.pos.y)
        })
    }
}

function onSetLineTxt(txt) {
    setLineTxt(txt)
    renderMeme()
}

function onSetFillColor(color) {
    setFillColor(color)
    renderMeme()
}

function onSetStrokeColor(color) {
    setStrokeColor(color)
    renderMeme()
}

function onSetFontSize(size) {
    setFontSize(size)
    renderMeme()
}

function onSwitchLine() {
    SwitchLine()
    renderMeme()
}

function onSetFontFamily(font) {
    setFontFamily(font)
    renderMeme()
}

function onRemoveLine() {
    removeLine()
    renderMeme()
}

function onSetAlignText(align) {
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

function onAddLine() {
    addLine()
    renderMeme()
}

function onSaveMeme() {
    saveMeme()
    renderMeme()
}

function showMemeEditor() {
    document.querySelector('.meme-container').classList.remove('display-none')
    document.querySelector('.meme-container').classList.add('flex')   
    document.querySelector('.saved-container').classList.add('display-none') 
}

function hideEditor() {
    document.querySelector('.meme-container').classList.add('display-none')
    document.querySelector('.meme-container').classList.remove('flex')
    document.querySelector('.saved-container').classList.add('display-none')
}

function showAbout() {
    document.querySelector('.gallery-container').classList.add('display-none')
    document.querySelector('.saved-container').classList.add('display-none')
    document.querySelector('.about-container').classList.remove('display-none')
    document.querySelector('.about-container').classList.add('flex')
    hideEditor()
}

function showMemes() {
    document.querySelector('.gallery-container').classList.add('display-none')
    document.querySelector('.about-container').classList.add('display-none')
    document.querySelector('.saved-container').classList.remove('display-none')
    hideEditor()
}

function onAddSticker(sticker) {
    addSticker(sticker)
    renderMeme()
}

function renderStickers() {
    const elStickersContainer = document.querySelector('.stickers-container')
    const stickers = getStickers()
    let strHTMLs = stickers.map( (sticker) => `
    <button class="sticker-btn" onclick="onAddSticker(this.innerText)">${sticker}</button>`).join('')
        elStickersContainer.innerHTML = strHTMLs
       renderMeme()
}

function onSelectStickers(num) {
    gStickerIdx += num
    if (gStickerIdx === -1) {
        gStickerIdx = gStickers.length - 1
    }
    if (gStickerIdx === gStickers.length) gStickerIdx = 0
    renderStickers()
}

function onToggleMenu() {
	document.body.classList.toggle('menu-open');
	const elBtn = document.querySelector('.menu-button');
	elBtn.innerText = elBtn.innerText === '☰' ? 'X' : '☰';
}

function onToggleModal() {
	document.body.classList.toggle('modal-open');
}
