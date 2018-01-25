class FullscreenManager {

    constructor(game) {
        this.game = game;
        this.isActive = false;
        this.init();
    }

    init() {
        this.game.scale.onFullScreenChange.add((screen) => {screen.game.global.fullscreenManager.isActive = screen.isFullScreen;});
    }

    run() {
        if (!this.isActive)
            this.game.scale.startFullScreen();
    }

}

export default FullscreenManager;