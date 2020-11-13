
const keyboardKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';']
const sounds = document.querySelectorAll('.sound')

document.addEventListener('keydown', (e) => {
  if (e.repeat) return
  const key = e.key
  const keyIndex = keyboardKeys.indexOf(key)

  if (keyIndex > -1) playSound(sounds[keyIndex])
})

function playSound(sound) {
  const sampleSound = document.getElementById(sound.dataset.sample)
  sampleSound.currentTime = 0 
  sampleSound.play()
}