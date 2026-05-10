import { DINO_BOTTOM_LIMIT, GRAVITY, JUMP_VELOCITY } from '../utils/constants.js';

export class Dino {
    constructor() {
        this.element = document.getElementById("dino");
        this.bottom = DINO_BOTTOM_LIMIT;
        this.isJumping = false;
        this.velocity = 0;
    }

    jump() {
        if (this.isJumping) return;
        this.isJumping = true;
        this.velocity = JUMP_VELOCITY;
    }

    update() {
        if (this.isJumping) {
            this.bottom += this.velocity;
            this.velocity -= GRAVITY;

            if (this.bottom <= DINO_BOTTOM_LIMIT) {
                this.bottom = DINO_BOTTOM_LIMIT;
                this.isJumping = false;
                this.velocity = 0;
            }
            this.element.style.bottom = this.bottom + "px";
        }
    }

    die() {
        this.element.classList.add('dino-dead');
    }

    reset() {
        this.bottom = DINO_BOTTOM_LIMIT;
        this.isJumping = false;
        this.velocity = 0;
        this.element.style.bottom = this.bottom + "px";
        this.element.classList.remove('dino-dead');
    }

    getRect() {
        return this.element.getBoundingClientRect();
    }
}
