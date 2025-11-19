//TODO: Start code only when playing something (? --> investigating)
//Idea: scroll only on html video container

let player = document.querySelector('.video-stream');
console.log(`1: ${player.volume}`);
const lastVolume = localStorage.getItem('volume');
player.volume = lastVolume ? parseFloat(lastVolume) : 0.25;
let currentVolume = player.volume;
console.log(`2: ${currentVolume}`);

document.onwheel = (event) => {
    console.log(`3: ${currentVolume}`);
    if (event.deltaY > 0) {
        currentVolume = (player.volume - 0.05).toFixed(2);
        if (currentVolume <= 0) {
            currentVolume = 0;
            console.log("Minimum volume!");
        }
        player.volume = currentVolume;
    } else {
        currentVolume = (player.volume + 0.05).toFixed(2);
        if (currentVolume >= 1) {
            currentVolume = 1;
            console.log("Maximum volume!");
        }
        player.volume = currentVolume;

    }
    localStorage.setItem('volume', player.volume = currentVolume);
    console.log(`4: ${currentVolume}`);
}

const observer = new MutationObserver((mutations) => {
    if (mutations.filter(mutation => mutation.attributeName === 'src').length >= 1) {
        console.log("Src mutation:")
        mutations.forEach((mutation) => console.log(mutation));
        player = document.querySelector('.video-stream');
        player.volume = currentVolume;
        console.log(`5: ${currentVolume}`);
    } else {
        console.log("Not a src mutation:");
        mutations.forEach((mutation) => console.log(mutation));
        console.log(`6: ${currentVolume}`);
    }
});
observer.observe(player, { attributes: true });