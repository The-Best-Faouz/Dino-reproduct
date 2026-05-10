import { GAME_WIDTH } from '../utils/constants.js';
import { randomRange } from '../utils/random.js';

export class Bird {
    constructor(gameContainer, speed) {
        this.gameContainer = gameContainer;
        this.speed = speed;
        this.element = document.createElement("div");
        this.element.classList.add("bird");
        
        this.left = GAME_WIDTH;
        // Altitude aléatoire (bas, milieu, haut)
        const altitudes = [60, 100, 140];
        this.bottom = altitudes[Math.floor(randomRange(0, altitudes.length))];
        
        this.element.style.left = this.left + "px";
        this.element.style.bottom = this.bottom + "px";
        
        this.gameContainer.appendChild(this.element);
    }

    update() {
        this.left -= this.speed + 1; // Les oiseaux vont un peu plus vite
        this.element.style.left = this.left + "px";
    }

    isOffScreen() {
        return this.left < -50;
    }

    remove() {
        this.element.remove();
    }

    getRect() {
        return this.element.getBoundingClientRect();
    }
}
