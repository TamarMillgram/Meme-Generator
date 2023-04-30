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


function getSelectedLineIdx(){
   return gMeme.selectedLineIdx
}


function switchLine() {
    const selectedLine = getSelectedLineIdx()
    if (selectedLine === gMeme.lines.length-1) { 
        gMeme.selectedLineIdx = 0
    //    gMeme.line.txt =
    } else if (selectedLine < gMeme.lines.length-1){
        gMeme.selectedLineIdx++
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

function getTxtPos(idx) {
    const line = gMeme.lines[idx]
    let height = line.size
    let width = gCtx.measureText(line.txt).width
    let xStart
    let yStart = line.pos.y - height
    let xEnd = width + (height / 4)
    let yEnd = height + (height / 4)

    if (line.align === 'center') xStart = line.pos.x - (width / 2) - 5
    else if (line.align === 'start') xStart = line.pos.x - 5
    else xStart = line.pos.x - width - 5

    return { xStart, yStart, xEnd, yEnd }
}

function setTxtBorders(coords, idx) {
    const { xStart, yStart, xEnd, yEnd } = coords
    gMeme.lines[idx].borders = { xStart, yStart, xEnd: xStart + xEnd, yEnd: yStart + yEnd }
}