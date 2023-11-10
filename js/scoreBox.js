class ScoreBox extends Phaser.GameObjects.Container {
    constructor(config) {
        if (!config.scene) {
            console.log("missing scene!");
            return;
        }
        super(config.scene);
        this.scene = config.scene;
        //add a textfield
        this.text1=this.scene.add.bitmapText(0,0, 'cc', "SCORE:0", 15);
        //this.text1 = this.scene.add.text(0, 0, "SCORE:0");
        this.text1.setOrigin(1, 0);
        this.add(this.text1);
        //if there is position information then apply it
        //if (config.x) {
        //    this.x = config.x;
        //}
        //if (config.y) {
        //    this.y = config.y;
        //}
        //this.text1.setBackgroundColor("#000000");
        //add to the scene
        this.scene.add.existing(this);
        emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this);
    }
    scoreUpdated() {
        this.text1.setText("SCORE:" + model.score);
    }
}