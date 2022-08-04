function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    function removeTransition (){
        key.classList.remove('playing')
    }
    window.addEventListener('keyup', removeTransition);
}

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     console.log(e.propertyName);
//     console.log(e.target.classList);
//     e.target.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('keyup', removeTransition));

window.addEventListener('keydown', playSound);
