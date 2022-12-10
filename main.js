const blackKeys = document.querySelectorAll('.black-key')
const whiteKeys = document.querySelectorAll('.white-key')

function playBlackKeyNote(blackKeyPath) {
    new Audio(blackKeyPath).play()
}

blackKeys.forEach((blackKey, i) => {
    let number = i + 1;
    let blackKeyPath = 'keys/black keys/blackkey' + (i + 1) + '.mp3'
    blackKey.addEventListener('click', () => playBlackKeyNote(blackKeyPath))
});

function playWhiteKeyNote(whiteKeyPath) {
    new Audio(whiteKeyPath).play()
}

whiteKeys.forEach((whiteKey, i) => {
    let number = i + 1;
    let whiteKeyPath = 'keys/white keys/whitekey' + (i + 1) + '.mp3'
    whiteKey.addEventListener('click', () => playWhiteKeyNote(whiteKeyPath))
});


