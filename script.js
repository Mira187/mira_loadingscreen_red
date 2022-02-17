var audio = document.getElementById("musik");
audio.volume = 0.2;

function toggleAudio() {
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

document.addEventListener('keypress', function (evt) {
    if(evt.keyCode ==32) {
        toggleAudio();
    }
});


  

 