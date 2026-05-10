import { checkCollision } from '../utils/helpers.js';

export class CollisionDetector {
    static check(dino, obstacles) {
        const dinoRect = dino.getRect();
        
        // On réduit un peu la hitbox du dino pour être plus juste
        const adjustedDinoRect = {
            left: dinoRect.left + 10,
            right: dinoRect.right - 10,
            top: dinoRect.top + 5,
            bottom: dinoRect.bottom - 5
        };

        for (const obstacle of obstacles) {
            const obstacleRect = obstacle.getRect();
            if (checkCollision(adjustedDinoRect, obstacleRect)) {
                return true;
            }
        }
        return false;
    }
}
