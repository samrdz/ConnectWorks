var count5 = 0;
class Question5 extends Phaser.Scene {
    constructor() {
        super('Question5');
    }
    preload()
    {
    	//load images or sounds
        //this.load.audio("cat",["audio/meow.mp3","audio/meow.ogg"]);
        this.load.image("background", "images/Title/background.jpeg")
        //this.load.image("start_button", "images/Title/start_box.png")
        this.load.bitmapFont("cc", "fonts/carrier_command.png", "fonts/carrier_command.xml")
        this.load.image("answerbox", "images/P1/answerbox.png") // size: 610x220
        this.load.image("questionbox", "images/P1/questionbox.png") // size: 610x220
        this.load.image("menubox", "images/P1/menubox.png") // size: 610x220
        this.load.image("longbox", "images/P1/longpinktextbox_10px.png");



    }
    create() {
        //define our objects
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller()
        count5 = 0;
        

        //model.score=100;
        //console.log("random2!");

        this.Background=this.add.image(0,0,"background").setOrigin(0,0);


        this.sb=new ScoreBox({scene:this});
        this.sb.x=1255;
        this.sb.y=45;
        //this.Start_button=this.add.image(game.config.width/2,(game.config.height/5) * 4,"start_button").setOrigin(.5,.5);
        //this.Start_button.scaleX = 2;
        //this.Start_button.scaleY = this.Start_button.scaleX;

        //this.Game_title=this.add.image(game.config.width/2,game.config.height/5, "game_title").setOrigin(.5,.5);
        //this.Textbox=this.add.image(game.config.width/2,game.config.height/2, "textbox")
        //var textbox = new Textbox({scene:this});
        //textbox.back.setOrigin(0,0);

        /*
        this.Textbox1=this.add.image(20,0,"textbox").setOrigin(0,0);
        this.Textbox2=this.add.image(650,0,"textbox").setOrigin(0,0);
        this.Textbox2=this.add.image(335,240,"textbox").setOrigin(0,0);
        */

        //this.Textbox1=this.add.image(20,game.config.height - 450,"textbox").setOrigin(0,0);
        //this.Textbox2=this.add.image(650,game.config.height - 450,"textbox").setOrigin(0,0);
        //this.Textbox3=this.add.image(335,game.config.height - 230,"textbox").setOrigin(0,0);
        var answerbox1 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"bad",text:"Nothing, leave the passwords as they were"});
        answerbox1.x=20;
        answerbox1.y=720-450;
        var answerbox2 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"ok", text:"Change the password for the account that got hacked, but leave the other passwords the same"});
        answerbox2.x=650;
        answerbox2.y=game.config.height - 450;
        var answerbox3 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"good", text:"Change the password for the account that was hacked and change the passwords for the accounts that share the same password to all different unique passwords"});
        answerbox3.x=335;
        answerbox3.y=game.config.height - 230;
        var questionbox = new Questionbox({scene:this, key:"questionbox", text:"You were being lazy and decided to use the same password for multiple accounts, however, one of the accounts gets hacked. What should you do to mitigate the chances of having the account(s) hacked again?"});
        questionbox.x=245;
        questionbox.y=20;
        this.Question_num=this.add.bitmapText(25,45, 'cc', "Question 5",15);
        //var longbox1 = new Expbox({scene:this, key:"longbox", event:"button_pressed", text:"You wan to run some financial transactions, but you haven't been outside a lot and are craving a cofee. You head to starbucks and order a cofee, but you realize you are running late and need to get the financial transactions over with. You connect to the public starbucks wifi. What should you do to ensure the safest transaction?"});
        //answerbox3.x=335;
        //answerbox3.y=game.config.height - 230;
        //this.Question_num=this.add.bitmapText(1255,45, 'cc', "Score: 0",15).setOrigin(1,0)
       
        

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
        emitter.on("button_pressed",this.buttonPressed2, this);
        emitter.on("continue",this.nextscreen, this);
        emitter.emit(G.SCORE_UPDATED);
    }

    
    buttonPressed2(params) {
        //this.face.alpha=1;
        //this.face.rotation+=45;
        //this.catSound.play();
        //this.
        count5++;
        if (params=="good" && count5 == 1) {
            emitter.emit(G.UP_POINTS, 100);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"Perfect! This is the best choice!\n\nScore + 100!\n\nMaking sure that all accounts have different unique passwords makes it harder for hackers. Make sure to not use the same word or number combinations in passwords in order to keep your accounts the most secure."});
            longbox1.x = 130
            longbox1.y = 65
        }
        if (params=="ok" && count5 == 1) {
            emitter.emit(G.UP_POINTS, 50);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"Good job! Although this is NOT the best choice, it is still a good choice!\n\nScore + 50!\n\nChanging the password for the account that was hacked makes the account secure again, but not changing the other accounts passwords leave them prone to being easily hacked."});
            longbox1.x = 130
            longbox1.y = 65
        }
        if (params=="bad" && count5 == 1) {
            emitter.emit(G.UP_POINTS, 0);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"You chose the worst choice! This, unlike the other two options should never be done.\n\nScore + 0\n\nThis choice leaves the account password the same, which exponentially increases the possibility of getting hacked again. It also makes it easier for the other accounts with the same password to be hacked as well."});
            longbox1.x = 130
            longbox1.y = 65
        }

    }
    
    nextscreen(params) {
        this.scene.start("SceneEnd");
        console.log("change scene");
    }
    

    update() {
        //constant running loop
    }
}