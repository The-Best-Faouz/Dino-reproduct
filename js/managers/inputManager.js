export class InputManager {
    constructor(onAction) {
        this.onAction = onAction;
        this.init();
    }

    init() {
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' || e.code === 'ArrowUp') {
                e.preventDefault();
                this.onAction();
            }
        });

        window.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.onAction();
        }, { passive: false });
    }
}
