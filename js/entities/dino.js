import { DINO_BOTTOM_LIMIT, GRAVITY, JUMP_VELOCITY } from '../utils/constants.js';

export class Dino {
    constructor() {
        this.element = document.getElementById("dino");
        this.bottom = DINO_BOTTOM_LIMIT;
        this.isJumping = false;
        this.velocity = 0;
        this.animationTimer = 0;
        this.currentFrame = 1;
    }

    jump() {
        if (this.isJumping) return;
        this.isJumping = true;
        this.velocity = JUMP_VELOCITY;
        this.element.classList.add('dino-jumping');
    }

    update(deltaTime) {
        if (this.isJumping) {
            this.bottom += this.velocity;
            this.velocity -= GRAVITY;

            if (this.bottom <= DINO_BOTTOM_LIMIT) {
                this.bottom = DINO_BOTTOM_LIMIT;
                this.isJumping = false;
                this.velocity = 0;
                this.element.classList.remove('dino-jumping');
            }
        } else {
            // Animation de course
            this.animationTimer += deltaTime;
            if (this.animationTimer >= 100) { // Change de frame tous les 100ms
                this.currentFrame = this.currentFrame === 1 ? 2 : 1;
                this.element.classList.toggle('dino-run-1', this.currentFrame === 1);
                this.element.classList.toggle('dino-run-2', this.currentFrame === 2);
                this.animationTimer = 0;
            }
        }
        this.element.style.bottom = this.bottom + "px";
    }

    die() {
        this.element.classList.add('dino-dead');
        this.element.classList.remove('dino-run-1', 'dino-run-2', 'dino-jumping');
    }

    reset() {
        this.bottom = DINO_BOTTOM_LIMIT;
        this.isJumping = false;
        this.velocity = 0;
        this.element.style.bottom = this.bottom + "px";
        this.element.classList.remove('dino-dead', 'dino-jumping', 'dino-run-2');
        this.element.classList.add('dino-run-1');
        this.currentFrame = 1;
        this.animationTimer = 0;
    }

    getRect() {
        return this.element.getBoundingClientRect();
    }
}
