'use strict'
const gKeywords = _createKeywords()
let gKeywordSearchCountMap =  _createKeywordSearchCountMap();
const numOfImgs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18] 
let gImgs = _createImgs()


function getImgs(keyword){
    if (!keyword) return gImgs;
    return gImgs.filter(img => {
       const regex = new RegExp('^' + keyword)
       return img.keywords.find(keyword => keyword.match(regex));
    })
}

function getKeywords() {
    return gKeywords;
}

function  _createImgs() {
    let imgs = []

    numOfImgs.forEach((num) => {
        let img = {
            id: num,
            url: `imgs1/${num}.jpg`,
            keywords: getRandomKeywords(2, gKeywords)
        }
        imgs[num] = img
    })
    
    return imgs
}

function _createKeywordSearchCountMap() {
    return gKeywords.reduce((acc, keyword) => {
        acc[keyword] = 0;
        return acc;
    }, { });
}

function _createKeywords() {
    return ['happy', 'sad', 'crazy', 'sarcastic', 'funny']
}


