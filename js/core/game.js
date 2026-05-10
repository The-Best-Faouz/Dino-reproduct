import { Dino } from '../entities/dino.js';
import { Ground } from '../entities/ground.js';
import { ObstacleManager } from '../managers/obstacleManager.js';
import { ScoreManager } from '../managers/scoreManager.js';
import { SoundManager } from '../managers/soundManager.js';
import { InputManager } from '../managers/inputManager.js';
import { HUD } from '../ui/hud.js';
import { StartScreen } from '../ui/startScreen.js';
import { GameOverScreen } from '../ui/gameOverScreen.js';
import { CollisionDetector } from './collision.js';
import { GameLoop } from './loop.js';

export class Game {
    constructor() {
        this.container = document.getElementById("game");
        this.isGameOver = false;
        this.isStarted = false;

        this.dino = new Dino();
        this.ground = new Ground();
        this.scoreManager = new ScoreManager((speed) => {
            this.ground.setSpeed(speed);
            this.soundManager.play('score');
        });
        this.obstacleManager = new ObstacleManager(this.container);
        this.soundManager = new SoundManager();
        this.inputManager = new InputManager(() => this.handleAction());
        
        this.hud = new HUD();
        this.startScreen = new StartScreen();
        this.gameOverScreen = new GameOverScreen();

        this.loop = new GameLoop((dt) => this.update(dt));
    }

    handleAction() {
        if (this.isGameOver) {
            this.restart();
        } else if (!this.isStarted) {
            this.start();
        } else {
            this.dino.jump();
            this.soundManager.play('jump');
        }
    }

    start() {
        this.isStarted = true;
        this.isGameOver = false;
        this.startScreen.hide();
        this.ground.setSpeed(this.scoreManager.getSpeed());
        this.soundManager.startMusic();
        this.loop.start();
    }

    restart() {
        this.isGameOver = false;
        this.isStarted = true;
        this.gameOverScreen.hide();
        this.scoreManager.reset();
        this.obstacleManager.reset();
        this.dino.reset();
        this.ground.resume();
        this.ground.setSpeed(this.scoreManager.getSpeed());
        this.soundManager.startMusic();
        this.loop.start();
    }

    update(deltaTime) {
        if (this.isGameOver) return;

        const currentSpeed = this.scoreManager.getSpeed();

        this.dino.update(deltaTime);
        this.obstacleManager.update(deltaTime, currentSpeed);
        this.scoreManager.update(deltaTime);
        this.hud.update(this.scoreManager.getScore(), this.scoreManager.getHighScore());

        if (CollisionDetector.check(this.dino, this.obstacleManager.obstacles)) {
            this.gameOver();
        }
    }

    gameOver() {
        this.isGameOver = true;
        this.loop.stop();
        this.dino.die();
        this.ground.pause();
        this.gameOverScreen.show();
        this.soundManager.stopMusic();
        this.soundManager.play('hit');
    }
}
