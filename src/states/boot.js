import FullscreenManager from '../components/fullscreenManager';

class Boot extends Phaser.State {

    constructor() {
        super();
    }

    preload() {
        this.load.image('preloader', 'assets/preloader.gif');
    }

    create() {
        this.game.input.maxPointers = 1;

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

        this.initGlobalVariables();

        this.game.state.start('preloader');
    }

    initGlobalVariables() {
        this.game.global = {
            fullscreenManager: new FullscreenManager(this.game)
        }

    }
}

export default Boot;
