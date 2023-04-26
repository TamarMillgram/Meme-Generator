let gMeme
let imgId

function getMeme() {
    return gMeme;
}


createMeme()

function setImg(imgId){
    gMeme.selectedImgId = imgId
}


function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
}

function createMeme() {
    gMeme = {
        selectedImgId: '',
        selectedLineIdx: 0,
        lines: [
            {
                txt: '',
                size: 20,
                align: 'left',
                color: 'red'
            }
        ],
    }
}

