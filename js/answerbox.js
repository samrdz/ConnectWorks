class Answerbox extends Phaser.GameObjects.Container {
    constructor(config) {
        if (!config.key) {
            console.log("missing key")
            return;
        }
        super(config.scene);

        this.config=config;
        this.scene = config.scene;
        this.back=this.scene.add.image(0,0,config.key)
        this.back.setOrigin(0,0);
        this.add(this.back);

        if (config.text) {
            this.text1=this.scene.add.bitmapText(35,35, 'cc', config.text,12);
            this.text1.setMaxWidth(540);
            console.log("hello");
            //this.text1.setOrigin(1,1);
            this.add(this.text1);
        }




        console.log("hello2");
        this.scene.add.existing(this);
        //this.setSize(this.back.displayWidth, this.back.displayHeight);
        //console.log(this.back.displayWidth)
        //console.log(this.back.displayHeight)
        //console.log(this);

        this.back.setInteractive();
        this.back.on('pointerover', this.over, this);
        this.back.on('pointerout', this.out, this);
        this.back.on("pointerdown", this.pressed, this);
        console.log("hello2");
    }

    over() {
        //console.log("pointerdown")
        this.y -= 5;
    }

    out() {
        this.y += 5
    }

    pressed() {
        if (this.config.params)
		{
			emitter.emit(this.config.event,this.config.params);
		}
		else
		{
			emitter.emit(this.config.event);
		}
    }
}