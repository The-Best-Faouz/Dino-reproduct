import { Cactus } from '../entities/cactus.js';
import { Bird } from '../entities/bird.js';
import { Cloud } from '../entities/cloud.js';
import { randomObstacleTime } from '../utils/random.js';

export class ObstacleManager {
    constructor(gameContainer) {
        this.gameContainer = gameContainer;
        this.obstacles = [];
        this.clouds = [];
        this.spawnTimer = 0;
        this.cloudTimer = 0;
        this.nextSpawnTime = randomObstacleTime();
    }

    update(deltaTime, speed) {
        this.spawnTimer += deltaTime;
        this.cloudTimer += deltaTime;

        // Spawn obstacles
        if (this.spawnTimer >= this.nextSpawnTime) {
            this.spawn(speed);
            this.spawnTimer = 0;
            this.nextSpawnTime = randomObstacleTime();
        }

        // Spawn clouds
        if (this.cloudTimer >= 3000) { // Un nuage toutes les 3s
            this.clouds.push(new Cloud(this.gameContainer));
            this.cloudTimer = 0;
        }

        this.obstacles.forEach((obstacle, index) => {
            obstacle.update();
            if (obstacle.isOffScreen()) {
                obstacle.remove();
                this.obstacles.splice(index, 1);
            }
        });

        this.clouds.forEach((cloud, index) => {
            cloud.update();
            if (cloud.isOffScreen()) {
                cloud.remove();
                this.clouds.splice(index, 1);
            }
        });
    }

    spawn(speed) {
        // 80% de chances d'avoir un cactus, 20% un oiseau
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
        this.clouds.forEach(cloud => cloud.remove());
        this.obstacles = [];
        this.clouds = [];
        this.spawnTimer = 0;
        this.cloudTimer = 0;
        this.nextSpawnTime = randomObstacleTime();
    }
}
