import { INITIAL_GAME_SPEED, SPEED_INCREMENT, SCORE_INCREMENT_INTERVAL } from '../utils/constants.js';

export class ScoreManager {
    constructor(onSpeedIncrease) {
        this.score = 0;
        this.highScore = localStorage.getItem('dino-high-score') || 0;
        this.gameSpeed = INITIAL_GAME_SPEED;
        this.onSpeedIncrease = onSpeedIncrease;
        this.timer = 0;
    }

    update(deltaTime) {
        this.timer += deltaTime;
        if (this.timer >= SCORE_INCREMENT_INTERVAL) {
            this.score++;
            this.timer = 0;

            if (this.score % 100 === 0) {
                this.gameSpeed += SPEED_INCREMENT;
                if (this.onSpeedIncrease) this.onSpeedIncrease(this.gameSpeed);
            }
        }
    }

    reset() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('dino-high-score', this.highScore);
        }
        this.score = 0;
        this.gameSpeed = INITIAL_GAME_SPEED;
        this.timer = 0;
    }

    getScore() {
        return this.score;
    }

    getHighScore() {
        return this.highScore;
    }

    getSpeed() {
        return this.gameSpeed;
    }
}
