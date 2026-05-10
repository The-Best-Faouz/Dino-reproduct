export class StartScreen {
    constructor() {
        this.element = document.getElementById("start-message");
    }

    show() {
        this.element.style.display = "block";
    }

    hide() {
        this.element.style.display = "none";
    }
}
