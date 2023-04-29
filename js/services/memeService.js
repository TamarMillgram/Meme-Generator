let gMeme
let imgId
let gElCanvas = document.querySelector('#my-canvas')
const gStickers = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '☺️', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '🥱', '😴', '😌', '🥳', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '🥺', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '🥴', '😷', '🤒', '🤕', '🤮', '🤢']
let gStickerIdx = 0



const STORAGE_KEY = 'memeDB'
createMeme()

function getStickers(){
    if (gStickerIdx + 3 < gStickers.length) {
        return gStickers.slice(gStickerIdx, gStickerIdx + 4)
    } else {
        const space = gStickers.length - gStickerIdx
        return gStickers.slice(gStickerIdx, gStickerIdx + space).push(gStickers.slice(0, 4 - space))
    }
}

function addSticker(sticker){
    const line = {
        txt: sticker,
        size: 30,
        align: 'center',
        font: 'impact',
        fillColor: 'white',
        strokeColor: 'black',
        pos: {
            x: gElCanvas.width / 3,
            y: gElCanvas.height / 3
        }
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function getMeme() {
    return gMeme
}

function setFontSize(fontSize) {

    if (fontSize === 1) {
        gMeme.lines[gMeme.selectedLineIdx].size++
    } else if (fontSize === 0) {
        gMeme.lines[gMeme.selectedLineIdx].size--
    }
}

function SwitchLine() {
    if (!gMeme.selectedLineIdx) {
        gMeme.selectedLineIdx = 1
    } else {
        gMeme.selectedLineIdx = 0
    }

}

function setAlignText(align) {
    gMeme.lines[gMeme.selectedLineIdx].align = align
}

function removeLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
}

function setFontFamily(font) {
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color

}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function addLine() {
    const line = {
        txt: 'add text',
        size: 30,
        align: 'center',
        font: 'impact',
        fillColor: 'white',
        strokeColor: 'black',
        pos: {
            x: gElCanvas.width / 2,
            y: gElCanvas.height / 2
        }
    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function createMeme() {
    gMeme = {
        selectedImgId: '',
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Add Text',
                size: 30,
                font: 'Impact',
                align: 'center',
                fillColor: 'white',
                strokeColor: 'black',
                pos: {
                    x: gElCanvas.width / 2,
                    y: gElCanvas.height * 0.15
                }
            },
            {
                txt: 'Add Text',
                size: 30,
                font: 'Impact',
                align: 'center',
                fillColor: 'white',
                strokeColor: 'black',
                pos: {
                    x: gElCanvas.width / 2,
                    y: gElCanvas.height * 0.85
                }
            }
        ],
    }
}

function saveMeme() {

}