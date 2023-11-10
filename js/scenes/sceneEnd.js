class SceneEnd extends Phaser.Scene {
    constructor() {
        super('SceneEnd');
    }
    preload()
    {
    	//load images or sounds
        //this.load.image("face", "images/face.png");
        //this.load.audio("cat",["audio/meow.mp3","audio/meow.ogg"]);
        this.load.audio("backgroundMusic",["audio/meow.mp3","audio/meow.ogg"]);      
        this.load.image("game_title", "images/Title/game_title.png")
        this.load.image("background", "images/Title/background.jpeg")
        this.load.image("menubox", "images/P1/menubox.png")
        //this.load.image("answerbox", "images/P1/answerbox.png") // size: 610x220
        //this.load.image("questionbox", "images/P1/questionbox.png") // size: 610x220
        this.load.bitmapFont("cc", "fonts/carrier_command.png", "fonts/carrier_command.xml")
        //this.load.image("text", "images/Title/text.png")
  



    }
    create() {
        //define our objects
        emitter = new Phaser.Events.EventEmitter();
        controller=new Controller();
        //console.log("random!");
        this.Background=this.add.image(0,0,"background").setOrigin(0,0);

              this.catSound=this.sound.add('backgroundMusic', {loop: false});
       // this.catSound.play();
        //this.Start_button=this.add.image(game.config.width/2,(game.config.height/5) * 4,"start_button").setOrigin(.5,.5);
        var flatButton = new FlatButton({scene:this,key:"menubox", text:"Play Again", x:game.config.width/2, y:(game.config.height/5) * 4, event:"button_pressed"})
        //this.Start_button.scaleX = 2;
        //this.Start_button.scaleY = this.Start_button.scaleX;


        //this.Game_title=this.add.image(game.config.width/2,game.config.height/5, "game_title").setOrigin(.5,.5);

      this.text1=this.add.bitmapText(game.config.width/2,game.config.height/5, 'cc', "ConnectWork",60).setOrigin(0.5,0.5);
        //this.Textbox=this.add.image(game.config.width/2,game.config.height/2, "textbox")
        //var answerbox1 = new Questionbox({scene:this, key:"questionbox", text:""});
        //answerbox1.x=20;
        //answerbox1.y=720-450;
        //textbox.back.setOrigin(0,0);
      this.text2=this.add.bitmapText(game.config.width/2,game.config.height/2, 'cc', "Player Score "+model.score,30).setOrigin(0.5,0.5);

   


        //this.Textbox2=this.add.image(game.config.width/2,game.config.height/2, "textbox2")

        //console.log("random3!");

        /*
        this.catSound=this.sound.add("cat");
        
        this.face = this.add.image(100, 200, "face");
        this.face.setOrigin(0,0);
        this.face.alpha=.5; //transparency
        this.face.rotation=45;//rotation
        this.face.scaleX=.5;//scale
        this.face.scaleY=.5;
        this.face.displayWidth=300;//set to actual value
        this.face.scaleY=this.face.scaleX;//make porportional
        //x and y refer to the middle of the image, 0,0 is top left
        //to center
        this.face.x = game.config.width/2;
        this.face.y = game.config.height/2;
        this.face.setInteractive();
        this.face.on('pointerdown', this.onDown,this);
        */

        emitter.on("button_pressed",this.buttonPressed, this);
    }

    buttonPressed(params) {
        this.scene.start("Question1");
        console.log("change scene");
    }

    /*
    onDown() {
        this.face.alpha=1;
        this.face.rotation+=45;
        this.catSound.play();
    }
    */

    update() {
        //constant running loop
    }
}