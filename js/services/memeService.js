let gMeme
let gImgs = [{ id: 1, url: 'imgs1/1.jpg', keywords: ['funny', 'person'] }];



function getMeme() {
    return gMeme;
}


createMeme()


function setLineTxt(txt) {
    gMeme.lines[0].txt = txt
}

function createMeme() {
    gMeme = {
        selectedImgId: 'imgs1/1.jpg',
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