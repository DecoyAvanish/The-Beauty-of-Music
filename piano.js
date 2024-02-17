const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let audio = new Audio();

const playAudio = (key) => {
    audio.src = `piano-88-notes/${key}.wav`;
    audio.play();
}

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playAudio(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    const isChecked = keysCheckbox.checked;
    pianoKeys.forEach(key => {
        if (isChecked) {
            key.classList.remove("hide");
        } else {
            key.classList.add("hide");
        }
    });
}

// Initially hide the keys
showHideKeys();

volumeSlider.addEventListener("input", handleVolume);
keysCheckbox.addEventListener("change", showHideKeys);
