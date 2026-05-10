export class SoundManager {
    constructor() {
        this.sounds = {
            jump: document.getElementById('jump-sound'),
            hit: document.getElementById('hit-sound'),
            score: document.getElementById('score-sound')
        };
    }

    play(name) {
        const sound = this.sounds[name];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(e => console.log("Audio play blocked", e));
        }
    }
}
