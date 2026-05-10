import { formatScore } from '../utils/helpers.js';

export class HUD {
    constructor() {
        this.scoreElement = document.getElementById("score");
    }

    update(score, highScore) {
        this.scoreElement.innerText = `HI ${formatScore(highScore)} ${formatScore(score)}`;
    }
}
