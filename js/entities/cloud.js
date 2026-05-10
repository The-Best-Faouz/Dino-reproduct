import { GAME_WIDTH } from '../utils/constants.js';
import { randomRange } from '../utils/random.js';

export class Cloud {
    constructor(gameContainer) {
        this.gameContainer = gameContainer;
        this.element = document.createElement("div");
        this.element.classList.add("cloud");
        
        this.left = GAME_WIDTH + randomRange(0, 200);
        this.bottom = randomRange(150, 250);
        this.speed = randomRange(1, 2);
        
        this.element.style.left = this.left + "px";
        this.element.style.bottom = this.bottom + "px";
        
        this.gameContainer.appendChild(this.element);
    }

    update() {
        this.left -= this.speed;
        this.element.style.left = this.left + "px";
    }

    isOffScreen() {
        return this.left < -100;
    }

    remove() {
        this.element.remove();
    }
}
