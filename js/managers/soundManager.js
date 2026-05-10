export class SoundManager {
    constructor() {
        this.sounds = {
            jump: document.getElementById('jump-sound'),
            hit: document.getElementById('hit-sound'),
            score: document.getElementById('score-sound'),
            bg: document.getElementById('bg-music')
        };
    }

    play(name) {
        const sound = this.sounds[name];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log("Audio play blocked", e));
        }
    }

    startMusic() {
        if (this.sounds.bg) {
            this.sounds.bg.volume = 0.5; // Un peu moins fort que les bruitages
            this.sounds.bg.play().catch(e => console.log("Music play blocked", e));
        }
    }

    stopMusic() {
        if (this.sounds.bg) {
            this.sounds.bg.pause();
            this.sounds.bg.currentTime = 0;
        }
    }
}
