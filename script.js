window.addEventListener('keydown', e => {
    playSound(e.key)
})

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click', () => {
        playSound(key.dataset.key)
    })
});

function playSound(letter) {
    const audio = document.querySelector(`audio[data-key="${letter}"`)
    const key = document.querySelector(`div[data-key="${letter}"`)
    if (!audio) return
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
    setTimeout(function () {
        key.classList.remove('playing')
    }, 70);
}
