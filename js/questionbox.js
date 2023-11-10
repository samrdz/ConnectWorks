class Questionbox extends Phaser.GameObjects.Container {
    constructor(config) {
        if (!config.key) {
            console.log("missing key")
            return;
        }
        super(config.scene);
        this.scene = config.scene;
        this.back=this.scene.add.image(0,0,config.key)
        this.back.setOrigin(0,0);
        this.add(this.back);

        if (config.text) {
            this.text1=this.scene.add.bitmapText(25,25, 'cc', config.text,12);
            this.text1.setMaxWidth(740);
            console.log("hello");
            //this.text1.setOrigin(1,1);
            this.add(this.text1);
        }

        this.scene.add.existing(this);
        this.setSize(this.back.displayWidth, this.back.displayHeight);
        console.log(this.back.displayWidth)
        console.log(this.back.displayHeight)
        //console.log(this);
    }

}