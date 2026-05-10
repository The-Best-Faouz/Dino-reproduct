export class GameOverScreen {
    constructor() {
        this.element = document.getElementById("game-over");
    }

    show() {
        this.element.style.display = "block";
    }

    hide() {
        this.element.style.display = "none";
    }
}
