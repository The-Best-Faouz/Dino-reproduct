export class Ground {
    constructor() {
        this.element = document.getElementById("ground");
    }

    setSpeed(speed) {
        // On ajuste la durée de l'animation CSS en fonction de la vitesse
        const duration = 12 / speed; 
        this.element.style.animationDuration = `${duration}s`;
    }

    pause() {
        this.element.style.animationPlayState = 'paused';
    }

    resume() {
        this.element.style.animationPlayState = 'running';
    }
}
