let gMeme
let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs = [{ id: 1, url: 'imgs1/1.jpg', keywords: ['funny', 'person'] }];



function getMeme() {
    return gMeme;
}

// function createMemes() {

// }



createMeme() 

function createMeme() {
    gMeme = {
        selectedImgId: gImgs[0].url,
        // selectedLineIdx: lines[0],
        lines: [
            {
                txt: 'I sometimes eat Falafel', size: 20,
                align: 'left',
                color: 'red'
            }
        ],
    }
    console.log('gMeme',gMeme);
}