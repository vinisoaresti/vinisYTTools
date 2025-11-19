//Custom Volume Indicator
const songWrapper = document.getElementById('player');
let volumeIndicator = document.querySelector('yt-formatted-string');
volumeIndicator.id = 'custom-volume-indicator';
volumeIndicator.innerText = `Volume: ${player.volume * 100}`;
const vwPixels = window.innerWidth;
const vhPixels = window.innerHeight;
let volumeIndicatorStyling = {
    display: 'none',
    position: 'fixed',
    zIndex: 1,
    width: (vwPixels / 100) * 70 + 'px',
    height: (vhPixels / 100) * 20 + 'px',
    class: 'title style-scope ytmusic-player-controls'
};
Object.assign(volumeIndicator.style, volumeIndicatorStyling);
songWrapper.insertBefore(volumeIndicator, songWrapper.firstChild);
//Disappear when changing song
//Scroll Volume Change
const player = document.querySelector('.video-stream');
let lastVolume = localStorage.getItem('volume');
player.volume = lastVolume ? parseFloat(lastVolume) : 0.25;
document.onwheel = (event) => {
    let newVolume;
    if (event.deltaY > 0) {
        newVolume = (player.volume - 0.05).toFixed(2);
        if (newVolume < 0) {
            newVolume = 0;
            console.log("Minimum volume!");
            return;
        } else {
            player.volume = newVolume;
        }
    } else {
        newVolume = (player.volume + 0.05).toFixed(2);
        if (newVolume > 1) {
            newVolume = 1;
            console.log("Maximum volume!");
            return;
        } else {
            player.volume = newVolume;
        }
    }
    localStorage.setItem('volume', player.volume = newVolume);
}