var count3 = 0;
class Question3 extends Phaser.Scene {
    constructor() {
        super('Question3');
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
        count3 = 0;
        

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
        var answerbox1 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"bad",text:"Meet the ransom demands by sending payment through Bitcoin to decrypt your files."});
        answerbox1.x=20;
        answerbox1.y=720-450;
        var answerbox2 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"good", text:"Isolate the system to prevent the malware from compromising additional devices."});
        answerbox2.x=650;
        answerbox2.y=game.config.height - 450;
        var answerbox3 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"ok", text:"Restore the encrypted files from backups since the files cannot be decrypted without the corresponding private key."});
        answerbox3.x=335;
        answerbox3.y=game.config.height - 230;
        var questionbox = new Questionbox({scene:this, key:"questionbox", text:"In May of 2017, WannaCry, a ransomware worm, spread rapidly across a number of computer networks. It exploited the vulnerabilities of the Windows SMBv1 server to remotely compromise systems, encrypt files, and spread to other hosts. Windows SMBv1 is the original protocol developed in the Server Message Block, an application layer network protocol commonly used in Windows to provide shared access to files and printers. What should your first step be if you have been infected?"});
        questionbox.x=245;
        questionbox.y=20;
        this.Question_num=this.add.bitmapText(25,45, 'cc', "Question 3",15);
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
        count3++;
        if (params=="good" && count3 == 1) {
            emitter.emit(G.UP_POINTS, 100);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"Perfect! This is the best choice!\n\nScore + 100!\n\nThe system can still be used, but WannaCry will continue to encrypt files and attempt to spread. Do not attempt to connect or power on unpatched systems on compromised networks. Continue to monitor network traffic to confirm that there is no unexpected SMBv1 network traffic.\n\nYou realize that ransomware like WannaCry thrive on being able to connect to multiple computers, so you isolate the system as quickly as possible. After doing so, you start to look for a backup. Although the system is essentially useless without full wipe, you can now wait and see if a decryption method is found. Because of your quick isolation of the system, WannaCry was prevented from spreading to more computers on your network."});
            longbox1.x = 130
            longbox1.y = 65
        }
        if (params=="ok" && count3 == 1) {
            emitter.emit(G.UP_POINTS, 50);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"Good job! Although this is NOT the best choice, it is still a good choice!\n\nScore + 50!\n\nYou do not have backups available for all the files, so consider storing the encrypted data before wiping the computer in the event that a decryption method is found in the future.\n\nYou realize that you may have a backup of your data that does not contain the ransomware, but this backup is old, and a lot of your files are missing. So you do decide to restore the backup, but because your first step was not to isolate the system, WannaCry was able to use your computer to spread even further!"});
            longbox1.x = 130
            longbox1.y = 65
        }
        if (params=="bad" && count3 == 1) {
            emitter.emit(G.UP_POINTS, 0);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"You chose the worst choice! This, unlike the other two options should never be done.\n\nScore + 0\n\nPaying a ransom to criminal actors is not encouraged because decryption or removal of the malware is not guaranteed. A backdoor will still remain even if payment is made.\n\nYou decide you need the files to be decrypted, so you end up paying the ransom to get the key to remove the encryption. A couple months later, the ransomware returns, and the attackers are asking for an even larger sum of money! Turns out they kept a backdoor open and were able to infect you again."});
            longbox1.x = 130
            longbox1.y = 65
        }

    }
    
    nextscreen(params) {
        this.scene.start("Question4");
        console.log("change scene");
    }
    

    update() {
        //constant running loop
    }
}