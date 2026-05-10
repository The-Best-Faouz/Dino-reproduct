import { Cactus } from '../entities/cactus.js';
import { Bird } from '../entities/bird.js';
import { randomObstacleTime } from '../utils/random.js';

export class ObstacleManager {
    constructor(gameContainer) {
        this.gameContainer = gameContainer;
        this.obstacles = [];
        this.spawnTimer = 0;
        this.nextSpawnTime = randomObstacleTime();
    }

    update(deltaTime, speed) {
        this.spawnTimer += deltaTime;

        if (this.spawnTimer >= this.nextSpawnTime) {
            this.spawn(speed);
            this.spawnTimer = 0;
            this.nextSpawnTime = randomObstacleTime();
        }

        this.obstacles.forEach((obstacle, index) => {
            obstacle.update();
            if (obstacle.isOffScreen()) {
                obstacle.remove();
                this.obstacles.splice(index, 1);
            }
        });
    }

    spawn(speed) {
        // 80% de chances d'avoir un cactus, 20% un oiseau (si score suffisant?)
        const type = Math.random() > 0.8 ? 'bird' : 'cactus';
        let obstacle;
        
        if (type === 'bird') {
            obstacle = new Bird(this.gameContainer, speed);
        } else {
            obstacle = new Cactus(this.gameContainer, speed);
        }
        
        this.obstacles.push(obstacle);
    }

    reset() {
        this.obstacles.forEach(obstacle => obstacle.remove());
        this.obstacles = [];
        this.spawnTimer = 0;
        this.nextSpawnTime = randomObstacleTime();
    }
}
