export class GameLoop {
    constructor(updateCallback) {
        this.updateCallback = updateCallback;
        this.lastTime = 0;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.loop.bind(this));
    }

    stop() {
        this.isRunning = false;
    }

    loop(currentTime) {
        if (!this.isRunning) return;

        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        this.updateCallback(deltaTime);

        requestAnimationFrame(this.loop.bind(this));
    }
}
