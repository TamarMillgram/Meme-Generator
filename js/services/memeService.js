let gMeme
let imgId
createMeme()



function getMeme() {
    return gMeme;
}

function setFontSize(fontSize) {
    
    if (fontSize === 1) {
        gMeme.lines[gMeme.selectedLineIdx].size++
    } else if (fontSize === 0) {
        gMeme.lines[gMeme.selectedLineIdx].size--
    }
}

function SwitchLine(){
    if(!gMeme.selectedLineIdx){
        gMeme.selectedLineIdx = 1
    }else{
        gMeme.selectedLineIdx = 0
    }

}

function setAlignText(align){
    gMeme.lines[gMeme.selectedLineIdx].align = align
}

function removeLine(){
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
}

function setFontFamily(font){
    gMeme.lines[gMeme.selectedLineIdx].font = font
}

function setFillColor(color){
    gMeme.lines[gMeme.selectedLineIdx].fillColor = color

}

function setStrokeColor(color){
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}

function setImg(imgId){
    gMeme.selectedImgId = imgId
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
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
                align: 'left',
                fillColor: 'white',
                strokeColor: 'black',
            },
            {
                txt: 'Add Text',
                size: 30,
                font: 'Impact',
                align: 'left',
                fillColor: 'white',
                strokeColor: 'black',
            }
        ],
    }
}

