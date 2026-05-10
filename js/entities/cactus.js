import { GAME_WIDTH } from '../utils/constants.js';

export class Cactus {
    constructor(gameContainer, speed) {
        this.gameContainer = gameContainer;
        this.speed = speed;
        this.element = document.createElement("div");
        this.element.classList.add("cactus");
        
        // Aléatoirement utiliser le deuxième type de cactus
        if (Math.random() > 0.5) {
            this.element.classList.add("cactus-2");
        }

        this.left = GAME_WIDTH;
        this.element.style.left = this.left + "px";
        this.gameContainer.appendChild(this.element);
    }

    update() {
        this.left -= this.speed;
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
